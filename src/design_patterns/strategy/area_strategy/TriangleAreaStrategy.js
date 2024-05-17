import { AreaStrategy } from '../AreaStrategy';

export class TriangleAreaStrategy extends AreaStrategy {
  calculate(triangle) {
    return (triangle.base * triangle.height) / 2;
  }
}