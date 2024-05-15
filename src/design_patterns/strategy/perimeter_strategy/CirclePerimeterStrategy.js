import { PerimeterStrategy } from '../PerimeterStrategy';

export class CirclePerimeterStrategy extends PerimeterStrategy {
  calculate(circle) {
    return 2 * Math.PI * circle.radius;
  }
}
