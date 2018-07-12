import React from 'react';
import { Item, Input, Label, Button, Text, Card, CardItem, Body, Icon } from 'native-base';
import { observer } from 'mobx-react/native';

import { ScreenContainer, ScreenContent } from '../../components';
import { CarListModel, CarModel } from '../../models';

import styles from './styles';

class CarForm extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button transparent style={styles.checkMarkButton} onPress={navigation.getParam('addCar')}>
                    <Icon name="md-checkmark-circle" />
                </Button>
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            brand: ''
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            addCar: this.onAddCarPress.bind(this)
        });
    }

    async onAddCarPress() {
        const car = new CarModel({
            name: this.state.name,
            brand: this.state.brand
        });
        await CarListModel.addCar(car);
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ScreenContainer>
                <ScreenContent>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item inlineLabel>
                                    <Label>Name</Label>
                                    <Input value={this.state.name} onChangeText={text => this.setState({ name: text })} />
                                </Item>
                                <Item inlineLabel last>
                                    <Label>Brand</Label>
                                    <Input value={this.state.brand} onChangeText={text => this.setState({ brand: text })} />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                </ScreenContent>
            </ScreenContainer>
        );
    }
}

CarForm = observer(CarForm);

export default CarForm;