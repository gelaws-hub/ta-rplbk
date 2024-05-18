<<<<<<< HEAD
import { AreaStrategy } from '../AreaStrategy';

export class EllipseAreaStrategy extends AreaStrategy {
  calculate(ellipse) {
    return Math.PI * ellipse.semiMajorAxis * ellipse.semiMinorAxis;
  }
=======
import { AreaStrategy } from '../AreaStrategy';

export class EllipseAreaStrategy extends AreaStrategy {
  calculate(ellipse) {
    return Math.PI * ellipse.semiMajorAxis * ellipse.semiMinorAxis;
  }
>>>>>>> c6a0a64519c58cea6fedcd67b676b782519c49c2
}