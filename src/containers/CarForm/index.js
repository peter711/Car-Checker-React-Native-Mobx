import React from 'react';
import { Content, Form, Item, Input, Label, Button, Text, Card, CardItem, Body } from 'native-base';
import { observer } from 'mobx-react/native';

import { ScreenContainer, ScreenContent } from '../../components';
import { CarListModel } from '../../models';

import styles from './styles';

class CarForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            brand: ''
        }
    }

    async onAddCarPress() {
        await CarListModel.addCar(this.state);
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ScreenContainer>
                <ScreenContent>
                    <Card>
                        <CardItem>
                            <Body>
                                <Form>
                                    <Item inlineLabel>
                                        <Label>Name</Label>
                                        <Input value={this.state.name} onChangeText={text => this.setState({ name: text })} />
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label>Brand</Label>
                                        <Input value={this.state.brand} onChangeText={text => this.setState({ brand: text })} />
                                    </Item>
                                </Form>
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