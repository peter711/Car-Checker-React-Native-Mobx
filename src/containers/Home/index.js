import React from 'react';
import { Icon, Text, View, Spinner, ActionSheet } from 'native-base';
import { observer } from 'mobx-react/native'

import { CarList, ScreenContainer, ScreenContent, ScreenHeader, FabButton } from '../../components';
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
            this.setState({clicked: BUTTONS[buttonIndex]})
        });
    }

    render() {
        return (
            <ScreenContainer>
                <ScreenHeader title={'Cars'} onMenuPress={() => this.props.navigation.toggleDrawer()} rightContent={<TrashButton onPress={() => this.showActionSheet()}/>}/>
                {CarListModel.loading
                    && <Spinner/>
                }
                {CarListModel.cars.length === 0
                    && renderEmptyList()}
                {CarListModel.cars.length > 0 &&
                    <ScreenContent>
                        <CarList cars={CarListModel.cars} />
                    </ScreenContent>
                }
                <FabButton
                    active={this.state.fabActive}
                    onFabButtonPress={() => this.setState({fabActive: !this.state.fabActive})}
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