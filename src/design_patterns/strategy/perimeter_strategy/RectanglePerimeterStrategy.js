import { PerimeterStrategy } from '../PerimeterStrategy';

export class RectanglePerimeterStrategy extends PerimeterStrategy {
  calculate(rectangle) {
    return 2 * (parseFloat(rectangle.length) + parseFloat(rectangle.width));
  }
}
