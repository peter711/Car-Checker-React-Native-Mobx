import React from 'react';
import { Alert } from 'react-native';
import { Icon, Text, View, Spinner, ActionSheet, Content } from 'native-base';
import { observer } from 'mobx-react/native'

import { CarList, ScreenContainer, ScreenHeader, FabButton } from '../../components';
import { CarListModel } from '../../models';

import TrashButton from './TrashButton';

import styles from './styles';

const BUTTONS = [
    { text: 'Remove all' },
    { text: "Cancel" }
];

const CANCEL_INDEX = 1;

class Home extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Home'
    }

    constructor(props) {
        super(props);
        this.state = {
            fabActive: false,
            clicked: undefined
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.clicked === BUTTONS[0]) {
            showRemoveConfirmationAlert({
                onRemovePress: removeAllCars
            });
            this.setState({ clicked: null });
        }
    }

    onFabButtonPress() {
        this.setState({ fabActive: !this.state.fabActive })
    }

    addCar() {
        this.props.navigation.navigate('NewCar');
        this.setState({ fabActive: false });
    }

    showActionSheet() {
        ActionSheet.show({
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            title: 'Select an option'
        }, buttonIndex => {
            this.setState({ clicked: BUTTONS[buttonIndex] })
        });
    }

    onDetailsItemListClick(car) {
        this.props.navigation.navigate('CarTiles', {
            car
        });
    }

    render() {
        return (
            <ScreenContainer>
                <ScreenHeader title={'Cars'} onMenuPress={() => this.props.navigation.toggleDrawer()} rightContent={<TrashButton onPress={() => this.showActionSheet()} />} />
                {CarListModel.loading
                    && <Spinner />
                }
                {CarListModel.cars.length === 0
                    && renderEmptyList()}
                {CarListModel.cars.length > 0 &&
                    <Content>
                        <CarList cars={CarListModel.cars} onDetailsClick={this.onDetailsItemListClick.bind(this)}/>
                    </Content>
                }
                <FabButton
                    active={this.state.fabActive}
                    onFabButtonPress={() => this.setState({ fabActive: !this.state.fabActive })}
                    onCarButtonPress={this.addCar.bind(this)}
                />
            </ScreenContainer>
        );
    }
}

Home = observer(Home);

export default Home;

///////////////////////////////

function renderEmptyList() {
    return (
        <View style={styles.emptyListView}>
            <Icon name='ios-car' style={styles.emptyListIcon} />
            <Text style={styles.emptyText}>No records</Text>
        </View>
    );
}

async function removeAllCars() {
    return CarListModel.removeAllCars();
}

function showRemoveConfirmationAlert({ onRemovePress } = {}) {
    Alert.alert(
        'Remove cars',
        'Are you sure you want to remove all record ?',
        [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Remove', onPress: () => onRemovePress()}
        ]
    )
}

