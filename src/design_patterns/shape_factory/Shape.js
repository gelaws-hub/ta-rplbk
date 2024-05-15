export class Shape {
    constructor() {
      this.areaStrategy = null;
      this.perimeterStrategy = null;
    }
  
    setAreaStrategy(strategy) {
      this.areaStrategy = strategy;
    }
  
    setPerimeterStrategy(strategy) {
      this.perimeterStrategy = strategy;
    }
  
    getArea() {
      return this.areaStrategy.calculate(this);
    }
  
    getPerimeter() {
      return this.perimeterStrategy.calculate(this);
    }
  }
  
