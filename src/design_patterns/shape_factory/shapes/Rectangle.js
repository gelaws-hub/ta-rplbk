import { Shape } from '../Shape';
import { RectangleAreaStrategy } from '../../strategy/area_strategy/RectangleAreaStrategy';
import { RectanglePerimeterStrategy } from '../../strategy/perimeter_strategy/RectanglePerimeterStrategy';

export class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
    this.setAreaStrategy(new RectangleAreaStrategy());
    this.setPerimeterStrategy(new RectanglePerimeterStrategy());
  }
}