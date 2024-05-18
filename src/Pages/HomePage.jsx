import React from "react";
import { Link } from "react-router-dom";
import circleImage from "./home_img/Circle.jpg";
import squareImage from "./home_img/Square.jpg";
import triangleImage from "./home_img/Triangle.jpg";
import rectangleImage from "./home_img/Rectan.jpg";
import ellipseImage from "./home_img/Ellipse.jpg";
import parallelogramImage from "./home_img/Parallelogram.jpg";
import trapezoidImage from "./home_img/Trapezoid.jpg";
import rhombusImage from "./home_img/Rhombus.jpg";
import historyImage from "./home_img/history.png";

const pages = [
  { name: "Circle", to: "/circle", image: circleImage },
  { name: "Square", to: "/square", image: squareImage },
  { name: "Triangle", to: "/triangle", image: triangleImage },
  { name: "Rectangle", to: "/rectangle", image: rectangleImage },
  { name: "Parallelogram", to: "/parallelogram", image: parallelogramImage },
  { name: "Trapezoid", to: "/trapezoid", image: trapezoidImage },
  { name: "Rhombus", to: "/rhombus", image: rhombusImage },
  { name: "Ellipse", to: "/ellipse", image: ellipseImage },
  { name: "History", to: "/history", image: historyImage },
];

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Shape Calculator is Awesome!
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {pages.map((page, index) => (
          <Link to={page.to} key={index}>
            <div className="flex flex-col items-center justify-center border rounded-lg p-4 transition duration-300 hover:shadow-lg">
              <img src={page.image} alt={page.name} className="h-32 mb-2" />
              <h2 className="text-center">{page.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
