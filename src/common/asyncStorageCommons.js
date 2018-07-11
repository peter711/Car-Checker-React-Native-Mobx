import { AsyncStorage } from 'react-native';

export async function storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
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