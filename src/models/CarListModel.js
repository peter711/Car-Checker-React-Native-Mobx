import { observable, decorate, configure, action, runInAction } from 'mobx';

import { AsyncStorageCommons } from '../common';

configure({ enforceActions: true });

const CARS_STORAGE_KEY = 'CARS';

class CarListModel {
    loading = true;
    cars = [];

    constructor() {
        Promise.race([
            AsyncStorageCommons.retrieveData(CARS_STORAGE_KEY),
            new Promise(resolve => {
                setTimeout(
                    () => resolve(),
                    5 * 1000
                )
            })
        ]).then(res => this._onCarsRetrieved(res));
    }

    async addCar(e) {
        this.cars.push(e);
        return AsyncStorageCommons.storeData(CARS_STORAGE_KEY, this.cars);
    }

    async removeAllCars() {
        await AsyncStorageCommons.removeItem(CARS_STORAGE_KEY);
        runInAction(() => this.cars = []);
    }

    _onCarsRetrieved(cars) {
        runInAction(() => {
            this.cars = cars || [];
            this.loading = false;
        });
    }
}

decorate(CarListModel, {
    loading: observable,
    cars: observable,
    addCar: action,
    removeAllCars: action
});

const carListModel = new CarListModel();

export default carListModel;
