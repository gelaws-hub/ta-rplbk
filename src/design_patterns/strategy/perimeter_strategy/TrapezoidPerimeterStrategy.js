import { PerimeterStrategy } from "../PerimeterStrategy";

export class TrapezoidPerimeterStrategy extends PerimeterStrategy {
  calculate(trapezoid) {
    const h = Math.sqrt(
      Math.pow(trapezoid.height, 2) +
        Math.pow(
          (parseFloat(trapezoid.base2) - parseFloat(trapezoid.base1)) / 2,
          2
        )
    );
    return (
      parseFloat(trapezoid.base1) +
      parseFloat(trapezoid.base2) +
      2 * parseFloat(h)
    );
  }
}
