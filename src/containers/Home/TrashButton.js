import React from 'react';
import { Button, Icon } from 'native-base';

const TrashButton = ({ onPress }) => {
    return (
        <Button transparent onPress={() => onPress()}>
            <Icon name='trash' />
        </Button>
    );
};

export default TrashButton;