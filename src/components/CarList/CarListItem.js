import React from 'react';
import { Card, CardItem, Icon, Right, Text } from 'native-base';

const CarListItem = ({ car }) => {
    return (
        <Card>
            <CardItem>
                <Icon active name="logo-googleplus" />
                <Text>{car.name}</Text>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </CardItem>
        </Card>
    );
};

export default CarListItem;