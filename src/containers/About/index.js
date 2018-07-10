import React from 'react';
import { Text, View } from 'native-base';
import styles from './styles';

class AboutContainer extends React.PureComponent {
    static navigationOptions = {
        drawerLabel: 'About'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>About page</Text>    
            </View>
        );
    }
}

export default AboutContainer;