import { Shape } from '../Shape';
import { RhombusAreaStrategy } from '../../strategy/area_strategy/RhombusAreaStrategy';
import { RhombusPerimeterStrategy } from '../../strategy/perimeter_strategy/RhombusPerimeterStrategy';

export class Rhombus extends Shape {
  constructor(diagonal1, diagonal2) {
    super();
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
    this.setAreaStrategy(new RhombusAreaStrategy());
    this.setPerimeterStrategy(new RhombusPerimeterStrategy());
  }
}