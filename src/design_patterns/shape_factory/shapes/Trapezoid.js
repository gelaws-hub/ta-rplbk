import { Shape } from '../Shape';
import { TrapezoidAreaStrategy } from '../../strategy/area_strategy/TrapezoidAreaStrategy';
import { TrapezoidPerimeterStrategy } from '../../strategy/perimeter_strategy/TrapezoidPerimeterStrategy';

export class Trapezoid extends Shape {
  constructor(base1, base2, height) {
    super();
    this.base1 = base1;
    this.base2 = base2;
    this.height = height;
    this.setAreaStrategy(new TrapezoidAreaStrategy());
    this.setPerimeterStrategy(new TrapezoidPerimeterStrategy());
  }
}