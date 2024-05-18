<<<<<<< HEAD
import { PerimeterStrategy } from '../PerimeterStrategy';

export class EllipsePerimeterStrategy extends PerimeterStrategy {
  calculate(ellipse) {
    // This is an approximation
    const h = (parseFloat(ellipse.semiMajorAxis) - parseFloat(ellipse.semiMinorAxis)) ** 2 / (parseFloat(ellipse.semiMajorAxis) + parseFloat(ellipse.semiMinorAxis)) ** 2;
    return Math.PI * (parseFloat(ellipse.semiMajorAxis) + parseFloat(ellipse.semiMinorAxis)) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
=======
import { PerimeterStrategy } from '../PerimeterStrategy';

export class EllipsePerimeterStrategy extends PerimeterStrategy {
  calculate(ellipse) {
    // This is an approximation
    const h = (ellipse.semiMajorAxis - ellipse.semiMinorAxis) ** 2 / (ellipse.semiMajorAxis + ellipse.semiMinorAxis) ** 2;
    return Math.PI * (ellipse.semiMajorAxis + ellipse.semiMinorAxis) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
>>>>>>> c6a0a64519c58cea6fedcd67b676b782519c49c2
}