import React from 'react';
import { Image } from 'react-native';
import { View } from 'native-base';
import { Tile } from '../../components';

import { ScreenContainer, ScreenContent } from '../../components';

import styles from './styles';

const TILES_CONFIG = {
    BRAKE: {
        icon: (<Image
            style={styles.image}
            source={require('../../assets/images/disc-brake.png')}
        />),
        text: 'Brakes',
        onPress: () => alert('Tile pressed')
    },
    BODY: {
        icon: (<Image
            style={styles.image}
            source={require('../../assets/images/disc-brake.png')}
        />),
        text: 'Body',
        onPress: () => alert('Tile pressed')
    }
}



class CarTiles extends React.Component {
    render() {
        const car = this._getCar();
        return (
            <ScreenContainer>
                <ScreenContent>
                    <View style={styles.tilesContainer}>
                        <Tile
                            icon={TILES_CONFIG.BRAKE.icon}
                            text={TILES_CONFIG.BRAKE.text}
                            onPress={TILES_CONFIG.BRAKE.onPress}
                        />
                        <Tile
                            icon={TILES_CONFIG.BODY.icon}
                            text={TILES_CONFIG.BODY.text}
                            onPress={TILES_CONFIG.BODY.onPress}
                        />
                    </View>
                </ScreenContent>
            </ScreenContainer>
        );
    }

    _getCar() {
        const { navigation } = this.props;
        return navigation.getParam('car');
    }
}

export default CarTiles;