import { PerimeterStrategy } from '../PerimeterStrategy';

export class EllipsePerimeterStrategy extends PerimeterStrategy {
  calculate(ellipse) {
    // This is an approximation
    const h = (ellipse.semiMajorAxis - ellipse.semiMinorAxis) ** 2 / (ellipse.semiMajorAxis + ellipse.semiMinorAxis) ** 2;
    return Math.PI * (ellipse.semiMajorAxis + ellipse.semiMinorAxis) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  }
}