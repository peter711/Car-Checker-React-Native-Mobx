import { AsyncStorage } from 'react-native';

export async function storeData(key, value) {
    try {
        const valueAsString = JSON.stringify(value);
        await AsyncStorage.setItem(key, valueAsString);
    } catch (error) {
        console.error(`Error when saving: ${error}`);
    }
}

export async function retrieveData(key) {
    try {
        const item = await AsyncStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } else {
            return null;
        }
    } catch (error) {
        console.error(`Error when retreving data: ${error}`);
    }
}

export async function removeItem(key) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(`Error while removing cars: ${error}`);
    }
}