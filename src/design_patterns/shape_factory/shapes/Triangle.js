import { Shape } from '../Shape';
import { TriangleAreaStrategy } from '../../strategy/area_strategy/TriangleAreaStrategy';
import { TrianglePerimeterStrategy } from '../../strategy/perimeter_strategy/TrianglePerimeterStrategy';

export class Triangle extends Shape {
  constructor(base, height, side1, side2, side3) {
    super();
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.setAreaStrategy(new TriangleAreaStrategy());
    this.setPerimeterStrategy(new TrianglePerimeterStrategy());
  }
}
