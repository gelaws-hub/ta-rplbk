import { AreaStrategy } from '../AreaStrategy';

export class RhombusAreaStrategy extends AreaStrategy {
  calculate(rhombus) {
    return (rhombus.diagonal1 * rhombus.diagonal2) / 2;
  }
}