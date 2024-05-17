import { PerimeterStrategy } from '../PerimeterStrategy';

export class TrianglePerimeterStrategy extends PerimeterStrategy {
  calculate(triangle) {
    return parseFloat(triangle.side1) + parseFloat(triangle.side2) + parseFloat(triangle.side3);
  }
}
