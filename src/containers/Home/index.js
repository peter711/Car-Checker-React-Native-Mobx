import React from 'react';
import { Container, Header, Title, Content, Body, Icon, Text, View, Fab, Button } from 'native-base';
import { observer } from 'mobx-react/native'

import styles from './styles';

import CarList from '../../components/CarList';

import carListModel from '../../models/CarListModel';

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
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Home
                        </Title>
                    </Body>
                </Header>
                {carListModel.cars.length === 0
                    && renderEmptyList()}
                {carListModel.cars.length > 0 &&
                    <Content>
                        <CarList cars={carListModel.cars} />
                    </Content>
                }
                <Fab
                    direction="up"
                    position="bottomRight"
                    active={this.state.fabActive}
                    onPress={this.onFabButtonPress.bind(this)}
                >
                    <Icon name="ios-add" />
                    <Button onPress={this.addCar.bind(this)}>
                        <Icon name="car" />
                    </Button>
                </Fab>
            </Container>
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