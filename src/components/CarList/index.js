import React from 'react';
import { FlatList, View, Text } from 'react-native';

import CarListItem from './CarListItem';

const keyExtractor = item => item.id;

const CarList = ({ cars, onDetailsClick }) => {
    return (
        <FlatList
            data={cars}
            keyExtractor={keyExtractor}
            extraData={cars.length}
            renderItem={({ item }) => <CarListItem car={item} onDetailsClick={onDetailsClick}/>}
        />
    );
};

export default CarList;