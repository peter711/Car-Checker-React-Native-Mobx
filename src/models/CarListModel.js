import { observable, decorate, configure, action, runInAction } from 'mobx';
import { storeData, retrieveData, removeItem } from '../common/asyncStorageCommons';

configure({ enforceActions: true });

const CARS_STORAGE_KEY = 'CARS';

class CarListModel {
    loading = true;
    cars = [];

    constructor() {
        Promise.race([
            retrieveData(CARS_STORAGE_KEY),
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
        return storeData(CARS_STORAGE_KEY, this.cars);
    }

    async removeAllCars() {
        await removeItem(CARS_STORAGE_KEY);
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
