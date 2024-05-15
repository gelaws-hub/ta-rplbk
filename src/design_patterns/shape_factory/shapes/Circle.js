  import { Shape } from '../Shape';
  import { CircleAreaStrategy } from '../../strategy/area_strategy/CircleAreaStrategy';
  import { CirclePerimeterStrategy } from '../../strategy/perimeter_strategy/CirclePerimeterStrategy';
  
  export class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
      this.setAreaStrategy(new CircleAreaStrategy());
      this.setPerimeterStrategy(new CirclePerimeterStrategy());
    }
  }
  