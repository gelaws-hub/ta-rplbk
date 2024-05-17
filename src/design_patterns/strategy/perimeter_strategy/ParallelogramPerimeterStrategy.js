import { PerimeterStrategy } from '../PerimeterStrategy';

export class ParallelogramPerimeterStrategy extends PerimeterStrategy {
  calculate(parallelogram) {
    return 2 * (parseFloat(parallelogram.base) + parseFloat(parallelogram.side));
  }
}
