import { PerimeterStrategy } from '../PerimeterStrategy';

export class EllipsePerimeterStrategy extends PerimeterStrategy {
  calculate(ellipse) {
    // This is an approximation
    const h = (parseFloat(ellipse.semiMajorAxis) - parseFloat(ellipse.semiMinorAxis)) ** 2 / (parseFloat(ellipse.semiMajorAxis) + parseFloat(ellipse.semiMinorAxis)) ** 2;
    return Math.PI * (parseFloat(ellipse.semiMajorAxis) + parseFloat(ellipse.semiMinorAxis)) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
}