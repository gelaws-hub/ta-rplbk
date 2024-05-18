import { Shape } from "../Shape";
import { SquareAreaStrategy } from "../../strategy/area_strategy/SquareAreaStrategy";
import { SquarePerimeterStrategy } from "../../strategy/perimeter_strategy/SquarePerimeterStrategy";

export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
    this.setAreaStrategy(new SquareAreaStrategy());
    this.setPerimeterStrategy(new SquarePerimeterStrategy());
  }
}
