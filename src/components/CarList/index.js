import React from 'react';
import { FlatList } from 'react-native';

import CarListItem from './CarListItem';

const CarList = ({ cars }) => {
    return (
        <FlatList
            data={cars}
            renderItem={({ item }) => <CarListItem car={item} />}
        />
    );
};

export default CarList;