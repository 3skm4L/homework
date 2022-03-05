class Machine{
    constructor(fuelType, engineType, passengerLoad){
        this.fuelType = fuelType;
        this.engineType = engineType;
        this.passengerLoad = passengerLoad;
    }
}

class Car extends Machine{
    constructor (p1, p2, p3, numWheels){
        super(p1, p2, p3);
        this.numWheels = numWheels;
    }
}

class Boat extends Machine{
    constructor(p1, p2, p3, cargoCap){
        super(p1, p2, p3);
        this.cargoCap = cargoCap;
    }
}

class Plane extends Machine{
    constructor(p1, p2, p3, wingSpan){
        super(p1, p2, p3);
        this.wingSpan = wingSpan;
    }
}