<<<<<<< HEAD
import { PerimeterStrategy } from '../PerimeterStrategy';

export class RhombusPerimeterStrategy extends PerimeterStrategy {
  calculate(rhombus) {
    return 4 * Math.sqrt((rhombus.diagonal1 / 2) ** 2 + (rhombus.diagonal2 / 2) ** 2);
  }
=======
import { PerimeterStrategy } from '../PerimeterStrategy';

export class RhombusPerimeterStrategy extends PerimeterStrategy {
  calculate(rhombus) {
    return 4 * Math.sqrt((rhombus.diagonal1 / 2) ** 2 + (rhombus.diagonal2 / 2) ** 2);
  }
>>>>>>> c6a0a64519c58cea6fedcd67b676b782519c49c2
}