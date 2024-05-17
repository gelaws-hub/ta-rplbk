import { AreaStrategy } from '../AreaStrategy';

export class ParallelogramAreaStrategy extends AreaStrategy {
  calculate(parallelogram) {
    return parallelogram.base * parallelogram.height;
  }
}