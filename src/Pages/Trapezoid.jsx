import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trapezoid } from "../design_patterns/shape_factory/shapes/Trapezoid";

const TrapezoidComponent = () => {
  const [base1, setBase1] = useState("");
  const [base2, setBase2] = useState("");
  const [height, setHeight] = useState("");
  const [trapezoid, setTrapezoid] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    if (base1 && base2 && height) {
      const newTrapezoid = new Trapezoid(base1, base2, height);
      setTrapezoid(newTrapezoid);
    }
  }, [base1, base2, height]);

  const saveResult = () => {
    if (!trapezoid) return;

    const shapeData = {
      shape: "trapezoid",
      parameters: { base1, base2, height },
      area: trapezoid.getArea(),
      perimeter: trapezoid.getPerimeter(),
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
    if (!trapezoid) return null;

    const area = trapezoid.getArea();
    const perimeter = trapezoid.getPerimeter();

    return (
      <>
        {base1 && base2 && height && (
          <section className="mb-4">
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <p className="mb-1">Area = ((base1 + base2) / 2) * height</p>
            <p className="mb-1">
              Area = (({base1} + {base2}) / 2) * {height} = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
        )}
        {base1 && base2 && height && (
          <section className="mb-4">
            <p className="mb-1">
              Perimeter = base1 + base2 + 2 * sqrt(height^2 + ((base2 - base1) /
              2)^2)
            </p>
            <p className="mb-1">
              Perimeter = {base1} + {base2} + 2 * sqrt({height}^2 + (({base2} -{" "}
              {base1}) / 2)^2)
            </p>
            <p>
              Perimeter = <b>{perimeter.toFixed(2)}</b>
            </p>
          </section>
        )}
      </>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 relative">
      {popupMessage && (
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white ${
            popupType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popupMessage}
        </div>
      )}
      <div className="flex flex-col mb-8 p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Description */}
        <h2 className="text-2xl font-bold mb-4">Trapezoid Description</h2>
        <img
          src={require("./img/Trapezoid.png")}
          alt="Trapezoid"
          className="mb-4 w-48 m-auto"
        />
        <p className="text-gray-700 text-justify">
          A trapezoid is a quadrilateral with at least one pair of parallel
          sides. The parallel sides are called the bases, and the other two
          sides are called the legs (or lateral sides if they are not parallel).
          The height (or altitude) of a trapezoid is the perpendicular distance
          between its bases. The area of a trapezoid can be calculated using the
          formula: Area = ((base1 + base2) / 2) * height. The perimeter of a
          trapezoid can be calculated using the formula: Perimeter = base1 +
          base2 + 2 * h, where h = √(height^2 + ((base2 - base1) / 2)^2).
        </p>
      </div>
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Trapezoid Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Base 1:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={base1}
              onChange={(e) => setBase1(e.target.value)}
              placeholder="Enter base1"
            />
          </label>
          <label className="block mb-2">
            Base 2:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={base2}
              onChange={(e) => setBase2(e.target.value)}
              placeholder="Enter base2"
            />
          </label>
          <label className="block mb-2">
            Height:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
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

export default TrapezoidComponent;
