import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

import { HomeScreen, AboutScreen, CarFormScreen } from './containers';

const DRAWER_ROUTES_CONFIG = {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
};

const drawerNavigation = createDrawerNavigator(DRAWER_ROUTES_CONFIG);

drawerNavigation.navigationOptions = {
    header: null
}

const appNavigation = createStackNavigator({
    App: { screen: drawerNavigation },
    NewCar: { screen: CarFormScreen }
});

export default appNavigation;