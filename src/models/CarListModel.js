import { observable, decorate, configure } from 'mobx';

configure({ enforceActions: true });

class CarListModel {
    cars = [
        { name: 'Mazda' },
        { name: 'Audi' }
    ];

    addCar(e) {
        this.cars.push(e);
    }
}

decorate(CarListModel, {
    cars: observable
});

const carListModel = new CarListModel();

export default carListModel;
