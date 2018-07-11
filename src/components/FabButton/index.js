import React from 'react';
import { Fab, Icon, Button } from 'native-base';

const FabButton = ({
    onFabButtonPress,
    onCarButtonPress,
    active
}) => {
    return(
        <Fab direction="up" position="bottomRight" active={active} onPress={() => onFabButtonPress()}>
            <Icon name="ios-add" />
            <Button onPress={() => onCarButtonPress()}>
                <Icon name="car" />
            </Button>
        </Fab>
    );
}

export default FabButton;