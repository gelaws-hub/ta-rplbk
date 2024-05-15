import React, { useState, useEffect } from "react";
import axios from "axios";
import { Circle } from "../design_patterns/shape_factory/shapes/Circle";

const CircleComponent = () => {
  const [radius, setRadius] = useState("");
  const [circle, setCircle] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setRadius(value >= 0 ? value : "");
  };

  useEffect(() => {
    if (radius) {
      const newCircle = new Circle(radius);
      setCircle(newCircle);
    }
  }, [radius]);

  const saveResult = () => {
    if (!circle) return;

    const shapeData = {
      shape: "circle",
      parameters: { radius },
      area: circle.getArea(),
      perimeter: circle.getPerimeter(),
    };

    axios
      .post("https://shape-calculator-be.vercel.app/save", shapeData)
      .then((response) => {
        setPopupMessage("Success! Calculation saved.");
        console.log(response.data);
      })
      .catch((error) => {
        setPopupMessage("Error! Failed to save calculation.");
        console.error("There was an error!", error);
      });

    // Reset the popup message after a certain time
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4">
      {popupMessage && (
        <div className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md">
          {popupMessage}
        </div>
      )}
      <div className="flex flex-col mb-8 p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Description */}
        <h2 className="text-2xl font-bold mb-4">Circle Description</h2>
        <img
          src={require("./img/Circle-withsegments.png")}
          alt="Circle"
          className="mb-4 w-48 m-auto"
        />
        <p className="text-gray-700 text-justify">
          A circle is a shape consisting of all points in a plane that are at a
          given distance from a given point, the centre. The distance between
          any point of the circle and the centre is called the radius. The
          circle has been known since before the beginning of recorded history.
          Natural circles are common, such as the full moon or a slice of round
          fruit. The circle is the basis for the wheel, which, with related
          inventions such as gears, makes much of modern machinery possible. In
          mathematics, the study of the circle has helped inspire the
          development of geometry, astronomy and calculus.
        </p>
        {/* Add more description if needed */}
      </div>
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Circle Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Radius:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={radius}
              onChange={handleInputChange}
              placeholder="Enter radius"
              required
            />
          </label>
        </form>
        {circle && (
          <div>
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <section className="mb-4">
              <p className="mb-1">
                Area = π * radius
                <sup>2</sup>
              </p>
              <p className="mb-1">
                Area = {Math.PI.toFixed(2)} * {radius}
                <sup>2</sup> = {circle.getArea().toFixed(2)}
              </p>
              <p>
                Area = <b>{circle.getArea().toFixed(2)}</b>
              </p>
            </section>
            <section className="mb-4">
              <p className="mb-1">Perimeter = 2 * π * radius</p>
              <p className="mb-1">Perimeter = 2 * π * {radius}</p>
              <p>
                Perimeter = <b>{circle.getPerimeter().toFixed(2)}</b>
              </p>
            </section>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={saveResult}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircleComponent;
