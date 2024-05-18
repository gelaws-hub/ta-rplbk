<<<<<<< HEAD
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
=======
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
>>>>>>> c6a0a64519c58cea6fedcd67b676b782519c49c2
}