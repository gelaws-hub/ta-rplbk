<<<<<<< HEAD
import { Shape } from '../Shape';
import { SquareAreaStrategy } from '../../strategy/area_strategy/SquareAreaStrategy';
import { SquarePerimeterStrategy } from '../../strategy/perimeter_strategy/SquarePerimeterStrategy';

export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
    this.setAreaStrategy(new SquareAreaStrategy());
    this.setPerimeterStrategy(new SquarePerimeterStrategy());
  }
=======
import { Shape } from '../Shape';
import { SquareAreaStrategy } from '../../strategy/area_strategy/SquareAreaStrategy';
import { SquarePerimeterStrategy } from '../../strategy/perimeter_strategy/SquarePerimeterStrategy';

export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
    this.setAreaStrategy(new SquareAreaStrategy());
    this.setPerimeterStrategy(new SquarePerimeterStrategy());
  }
>>>>>>> c6a0a64519c58cea6fedcd67b676b782519c49c2
}