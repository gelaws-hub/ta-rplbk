import { PerimeterStrategy } from '../PerimeterStrategy';

export class SquarePerimeterStrategy extends PerimeterStrategy {
  calculate(square) {
    return 4 * square.side;
  }
}