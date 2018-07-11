import { observable, decorate, configure, action } from 'mobx';
import { storeData, retrieveData } from '../common/asyncStorageCommons';


configure({ enforceActions: true });

const CARS_STORAGE_KEY = 'CARS';

class CarListModel {
    loading = true;
    cars = [];

    constructor() {
        retrieveData(CARS_STORAGE_KEY).then(res => this._onCarsRetrieved(res));
    }

    async addCar(e) {
        this.cars.push(e);
        return storeData(CARS_STORAGE_KEY, this.cars);
    }

    _onCarsRetrieved(cars) {
        action(cars => {
            this.cars = cars;
            this.loading = false;
        })(cars);
    }
}

decorate(CarListModel, {
    loading: observable,
    cars: observable,
    addCar: action
});

const carListModel = new CarListModel();

export default carListModel;
