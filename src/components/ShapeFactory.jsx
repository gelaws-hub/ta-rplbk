import React from 'react';
import Circle from '../Pages/Circle';
import Square from '../Pages/Square';
import Triangle from '../Pages/Triangle';
import Rectangle from '../Pages/Rectangle';
import Ellipse from '../Pages/Ellipse';
import Parallelogram from '../Pages/Parallelogram';
import Trapezoid from '../Pages/Trapezoid';
import Rhombus from '../Pages/Rhombus';

class ShapeFactory {
  createShape(shape) {
    switch (shape) {
      case 'circle':
        return <Circle />;
      case 'square':
        return <Square />;
      case 'triangle':
        return <Triangle />;
      case 'rectangle':
        return <Rectangle />;
      case 'ellipse':
        return <Ellipse />;
      case 'parallelogram':
        return <Parallelogram />;
      case 'trapezoid':
        return <Trapezoid />;
      case 'rhombus':
        return <Rhombus />;
      default:
        return <p>Please select a shape to start calculations.</p>;
    }
  }
}

export default ShapeFactory;
