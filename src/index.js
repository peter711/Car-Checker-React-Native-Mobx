import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';
import { Root } from "native-base";

import {
    HomeScreen,
    AboutScreen,
    CarFormScreen,
    CarTilesScreen
} from './containers';

const DRAWER_ROUTES_CONFIG = {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
};

const drawerNavigation = createDrawerNavigator(DRAWER_ROUTES_CONFIG);

drawerNavigation.navigationOptions = {
    header: null
}

const AppNavigation = createStackNavigator({
    App: { screen: drawerNavigation },
    NewCar: { screen: CarFormScreen },
    CarTiles: { screen: CarTilesScreen }
});

const App = () => (
    <Root>
        <AppNavigation/>
    </Root>
)

export default App;