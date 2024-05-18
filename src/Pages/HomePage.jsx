import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "Circle", to: "/circle" },
  { name: "Square", to: "/square" },
  { name: "Triangle", to: "/triangle" },
  { name: "Rectangle", to: "/rectangle" },
  { name: "Ellipse", to: "/ellipse" },
  { name: "Parallelogram", to: "/parallelogram" },
  { name: "Trapezoid", to: "/trapezoid" },
  { name: "Rhombus", to: "/rhombus" },
  { name: "History", to: "/history" }
];

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shape Calculator is Awesome!</h1>
      <div className="grid grid-cols-3 gap-4">
        {pages.map((page, index) => (
          <Link to={page.to} key={index}>
            <div className="flex flex-col items-center justify-center border rounded-lg p-4 transition duration-300 hover:shadow-lg">
              <img src="#" alt={page.name} className="w-32 h-32 mb-2" />
              <p className="text-center">{page.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
