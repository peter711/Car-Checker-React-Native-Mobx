import React from 'react';
import { Content, Body, Icon, Text, View, Spinner } from 'native-base';
import { observer } from 'mobx-react/native'

import { CarList, ScreenContainer, ScreenContent, ScreenHeader, FabButton } from '../../components';
import { CarListModel } from '../../models';

import styles from './styles';

class Home extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Home'
    }

    constructor(props) {
        super(props);
        this.state = {
            fabActive: false
        }
    }

    onFabButtonPress() {
        this.setState({ fabActive: !this.state.fabActive })
    }

    addCar() {
        this.props.navigation.navigate('NewCar');
        this.setState({ fabActive: false });
    }

    render() {
        return (
            <ScreenContainer>
                <ScreenHeader title={'Cars'} onMenuPress={() => this.props.navigation.toggleDrawer()}/>
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