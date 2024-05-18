import { PerimeterStrategy } from '../PerimeterStrategy';

export class RhombusPerimeterStrategy extends PerimeterStrategy {
  calculate(rhombus) {
    return 4 * Math.sqrt((rhombus.diagonal1 / 2) ** 2 + (rhombus.diagonal2 / 2) ** 2);
  }
}