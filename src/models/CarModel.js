const generateUniqueId = Symbol('generateUniqueId');

class CarModel {
    id;
    name;
    brand;

    constructor({ name, brand }) {
        this.name = name;
        this.brand = brand;
        this.id = this[generateUniqueId]();
    }

    [generateUniqueId] () {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    }

}

export default CarModel;