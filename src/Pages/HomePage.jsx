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
import Cover from "./home_img/Cover.png";

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
    <div className="container mx-auto p-4 mb-auto flex flex-col">
      <h1 className="text-lg md:text-3xl font-bold text-center mb-8">
        Shape Calculator is
        <br />
        Awesome!
      </h1>
      <div className="mx-auto mb-4 ">
        <img className="max-h-96 m-0 rounded-2xl hover:shadow-lg" src={Cover} alt="Cover" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        {pages.map((page, index) => (
          <Link to={page.to} key={index}>
            <div
              className="
            h-24
            flex flex-col items-center justify-center border rounded-lg
            p-4 transition duration-300 hover:shadow-lg md:h-auto"
            >
              <img src={page.image} alt={page.name} className="h-20 m-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
