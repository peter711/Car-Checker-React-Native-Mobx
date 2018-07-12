import React from 'react';
import { Text } from 'native-base';

class CarTiles extends React.Component {
    render() {
        const car = this._getCar();
        return (
            <Text>
                {car.id} {car.name} {car.brand}
            </Text>
        );
    }

    _getCar() {
        const { navigation } = this.props;
        return navigation.getParam('car');
    }
}

export default CarTiles;