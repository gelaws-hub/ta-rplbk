import { Shape } from "../Shape";
import { ParallelogramAreaStrategy } from "../../strategy/area_strategy/ParallelogramAreaStrategy";
import { ParallelogramPerimeterStrategy } from "../../strategy/perimeter_strategy/ParallelogramPerimeterStrategy";

export class Parallelogram extends Shape {
  constructor(base, height, side) {
    super();
    this.base = base;
    this.height = height;
    this.side = side;
    this.setAreaStrategy(new ParallelogramAreaStrategy());
    this.setPerimeterStrategy(new ParallelogramPerimeterStrategy());
  }
}
