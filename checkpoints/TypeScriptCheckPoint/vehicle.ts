// 1. Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// 2. Implement the Car class
class Car implements Vehicle {
    // Properties from the Vehicle interface
    make: string;
    model: string;
    year: number;

    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement the start method
    start(): void {
        console.log("Car engine started");
    }
}

const myCar = new Car("Toyota", "Camry", 2023);

myCar.start();
