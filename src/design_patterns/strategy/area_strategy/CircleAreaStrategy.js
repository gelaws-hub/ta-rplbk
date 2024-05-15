import { AreaStrategy } from '../AreaStrategy';

export class CircleAreaStrategy extends AreaStrategy {
  calculate(circle) {
    return Math.PI * circle.radius ** 2;
  }
}