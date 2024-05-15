import { Shape } from '../Shape';
import { EllipseAreaStrategy } from '../../strategy/area_strategy/EllipseAreaStrategy';
import { EllipsePerimeterStrategy } from '../../strategy/perimeter_strategy/EllipsePerimeterStrategy';

export class Ellipse extends Shape {
  constructor(semiMajorAxis, semiMinorAxis) {
    super();
    this.semiMajorAxis = semiMajorAxis;
    this.semiMinorAxis = semiMinorAxis;
    this.setAreaStrategy(new EllipseAreaStrategy());
    this.setPerimeterStrategy(new EllipsePerimeterStrategy());
  }
}