import React from 'react';
import { Header, Body, Title, Icon, Left, Right, Button } from 'native-base';

const ScreenHeader = ({ title, onMenuPress }) => {
    return (
        <Header>
            <Left>
                <Button transparent onPress={() => onMenuPress()}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>
                    {title}
                </Title>
            </Body>
            <Right />
        </Header>
    );
}

export default ScreenHeader;