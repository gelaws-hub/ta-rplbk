import React, { useState, useEffect } from "react";
import axios from "axios";
import { Circle } from "../design_patterns/shape_factory/shapes/Circle";
import InfoShapeCard from "../components/InfoShapeCard";

const CircleComponent = () => {
  const [radius, setRadius] = useState("");
  const [circle, setCircle] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

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
        setPopupType("success");
        console.log(response.data);
      })
      .catch((error) => {
        setPopupMessage("Error! Failed to save calculation.");
        setPopupType("error");
        console.error("There was an error!", error);
      });

    // Reset the popup message after a certain time
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };

  const renderCalculations = () => {
    if (!circle) return null;

    const area = circle.getArea();
    const perimeter = circle.getPerimeter();

    return (
      <>
        {radius && (
          <section className="mb-4">
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <p className="mb-1">
              Area = π * radius<sup>2</sup>
            </p>
            <p className="mb-1">
              Area = {Math.PI.toFixed(2)} * {radius}
              <sup>2</sup> = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
        )}
        {radius && (
          <section className="mb-4">
            <p className="mb-1">Perimeter = 2 * π * radius</p>
            <p className="mb-1">Perimeter = 2 * π * {radius}</p>
            <p>
              Perimeter = <b>{perimeter.toFixed(2)}</b>
            </p>
          </section>
        )}
      </>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 relative pb-20 mb-auto">
      {popupMessage && (
        <div
          className={`fixed bottom-auto left-auto mt-2 mr-2 px-4 py-2 text-white rounded-md ${
            popupType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popupMessage}
        </div>
      )}
      {/* Shape Card */}
      <InfoShapeCard
        title="Circle Description"
        description="A circle is a shape consisting of all points in a plane that are at a
          given distance from a given point, the centre. The distance between
          any point of the circle and the centre is called the radius. The
          circle has been known since before the beginning of recorded history.
          Natural circles are common, such as the full moon or a slice of round
          fruit. The circle is the basis for the wheel, which, with related
          inventions such as gears, makes much of modern machinery possible. In
          mathematics, the study of the circle has helped inspire the
          development of geometry, astronomy and calculus."
        imageSrc={require("./img/Circle.png")}
      />

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
        {renderCalculations()}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          onClick={saveResult}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CircleComponent;
