import { AreaStrategy } from '../AreaStrategy';

export class RectangleAreaStrategy extends AreaStrategy {
  calculate(rectangle) {
    return rectangle.length * rectangle.width;
  }
}