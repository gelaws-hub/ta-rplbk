import { AreaStrategy } from '../AreaStrategy';

export class TrapezoidAreaStrategy extends AreaStrategy {
  calculate(trapezoid) {
    return ((parseFloat(trapezoid.base1) + parseFloat(trapezoid.base2)) / 2) * parseFloat(trapezoid.height);
  }
}