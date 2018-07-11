import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { observer } from 'mobx-react/native';

import carListModel from '../../models/CarListModel';

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
        await carListModel.addCar(this.state);
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input value={this.state.name} onChangeText={text => this.setState({name: text})}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Brand</Label>
                            <Input value={this.state.brand} onChangeText={text => this.setState({brand: text})}/>
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