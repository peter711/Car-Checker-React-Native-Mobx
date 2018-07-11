import React from 'react';
import { SwipeRow, View, Text, Button, Icon } from 'native-base';

import styles from './styles';

const CarListItem = ({ car }) => {
    return (
        <SwipeRow
            rightOpenValue={-75}
            body={
                <View style={styles.swipeRowBody}>
                    <View style={styles.swipeRowTitleRow}>
                        <Icon style={styles.swipeRowIcon} name="ios-car-outline" />
                        <Text style={styles.swipeRowTitle}>
                            {car.name} {car.brand}
                        </Text>
                    </View>
                </View>
            }
            right={
                <Button danger onPress={() => alert('Trash')}>
                    <Icon active name="trash" />
                </Button>
            }
        />
    );
};

export default CarListItem;