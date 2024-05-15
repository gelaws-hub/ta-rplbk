import { AreaStrategy } from '../AreaStrategy';

export class SquareAreaStrategy extends AreaStrategy {
  calculate(square) {
    return square.side ** 2;
  }
}