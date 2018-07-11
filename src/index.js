import {
    createDrawerNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import { HomeScreen, AboutScreen, CarFormScreen } from './containers';

const NEW_CAR_ROUTES_CONFIG = {
    CarForm: CarFormScreen
};

const ROUTES_CONFIG = {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    NewCar: { screen: CarFormScreen }
};

export default createDrawerNavigator(ROUTES_CONFIG);