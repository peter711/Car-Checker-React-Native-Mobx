import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

import styles from './styles';

const Tile = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.tile}
            onPress={() => onPress() }
        >
            <Card>
                <CardItem bordered>
                    <Body style={styles.tileBody}>
                        {icon}
                        <Text>
                            {text}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
};

export default Tile;