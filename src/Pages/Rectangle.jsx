import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rectangle } from "../design_patterns/shape_factory/shapes/Rectangle";
import InfoShapeCard from "../components/InfoShapeCard";

const RectangleComponent = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [rectangle, setRectangle] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    if (length && width) {
      const newRectangle = new Rectangle(length, width);
      setRectangle(newRectangle);
    } else {
      setRectangle(null);
    }
  }, [length, width]);

  const saveResult = () => {
    if (!rectangle) return;

    const shapeData = {
      shape: "rectangle",
      parameters: { length, width },
      area: rectangle.getArea(),
      perimeter: rectangle.getPerimeter(),
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

    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };

  const renderCalculations = () => {
    if (!rectangle) return null;

    const area = rectangle.getArea();
    const perimeter = rectangle.getPerimeter();

    return (
      <>
        {length && width && (
          <section className="mb-4">
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <p className="mb-1">Area = length * width</p>
            <p className="mb-1">
              Area = {length} * {width} = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
        )}
        {length && width && (
          <section className="mb-4">
            <p className="mb-1">Perimeter = 2 * (length + width)</p>
            <p className="mb-1">
              Perimeter = 2 * ({length} + {width})
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
        title="Rectangle Description"
        description="A rectangle is a quadrilateral with four right angles. It can also be
        defined as an equiangular quadrilateral, since equiangular means that
        all of its angles are equal (360°/4 = 90°). It can also be defined as
        a parallelogram containing a right angle. The opposite sides of a
        rectangle are parallel and of equal length. This shape is often used
        in building and engineering because of its stability and strength."
        imageSrc={require("./img/rectangle.jpg")}
      />

      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Rectangle Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Length:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Enter length"
            />
          </label>
          <label className="block mb-2">
            Width:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Enter width"
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

export default RectangleComponent;
