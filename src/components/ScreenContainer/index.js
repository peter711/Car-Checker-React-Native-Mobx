import React from 'react';
import { Container } from 'native-base';

import styles from './styles';
const ScreenContainer = ({children}) => {
    return (
        <Container style={styles.container}>
            {children}
        </Container>
    );
}

export default ScreenContainer;