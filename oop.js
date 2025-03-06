function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }

  const Car1 = new Car('Ford', 'red', 200, 'f-1');
  const Car2 = new Car('Toyota', 'blue', 180, 't-1');
    const Car3 = new Car('BMW', 'black', 220, 'b-1');

    console.log(Car1);
    console.log(Car2);
    console.log(Car3);

    Car1.drive();
    Car2.reverse();
    Car3.turn();