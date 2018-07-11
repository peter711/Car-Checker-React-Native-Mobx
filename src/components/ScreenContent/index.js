import React from 'react';
import { Content } from 'native-base';

import styles from './styles';
const ScreenContent = ({ children }) => {
    return (
        <Content style={styles.content}>
            {children}
        </Content>
    )
}

export default ScreenContent;