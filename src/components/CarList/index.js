import React from 'react';
import { FlatList } from 'react-native';

import CarListItem from './CarListItem';

const keyExtractor = (item, index) => index.toString();

const CarList = ({ cars }) => {
    return (
        <FlatList
            data={cars}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => <CarListItem car={item} />}
        />
    );
};

export default CarList;