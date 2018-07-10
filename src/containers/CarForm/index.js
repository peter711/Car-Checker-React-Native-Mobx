import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { observer } from 'mobx-react/native';

import carListModel from '../../models/CarListModel';

import styles from './styles';

class CarForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            car: {
                name: 'Example name',
                brand: 'Example brand'
            }
        }
    }

    onAddCarPress() {
        carListModel.addCar(this.state.car);
        this.props.navigation.navigate('Home');
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input value={this.state.car.name} onChange={this.handleChange}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Brand</Label>
                            <Input value={this.state.car.brand}/>
                        </Item>
                    </Form>
                    <Button style={styles.button} block light onPress={this.onAddCarPress.bind(this)}>
                        <Text>Add car</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

CarForm = observer(CarForm);

export default CarForm;