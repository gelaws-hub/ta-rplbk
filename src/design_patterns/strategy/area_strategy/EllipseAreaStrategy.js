import { AreaStrategy } from '../AreaStrategy';

export class EllipseAreaStrategy extends AreaStrategy {
  calculate(ellipse) {
    return Math.PI * ellipse.semiMajorAxis * ellipse.semiMinorAxis;
  }
}