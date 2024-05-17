import React, { useState, useEffect } from "react";
import axios from "axios";
import { Triangle } from "../design_patterns/shape_factory/shapes/Triangle";

const TriangleComponent = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");
  const [triangle, setTriangle] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  useEffect(() => {
    const newTriangle = new Triangle(base, height, side1, side2, side3);
    setTriangle(newTriangle);
  }, [base, height, side1, side2, side3]);

  const saveResult = () => {
    if (!triangle) return;

    const shapeData = {
      shape: "triangle",
      parameters: { base, height, side1, side2, side3 },
      area: triangle.getArea(),
      perimeter: triangle.getPerimeter(),
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

    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };

  const renderCalculations = () => {
    if (!triangle) return null;

    const area = triangle.getArea();
    const perimeter = triangle.getPerimeter();

    return (
      <>
        {base && height && (
          <section className="mb-4">
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <p className="mb-1">Area = 0.5 * base * height</p>
            <p className="mb-1">
              Area = 0.5 * {base} * {height} = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
        )}
        {side1 && side2 && side3 && (
          <section className="mb-4">
            <p className="mb-1">Perimeter = side1 + side2 + side3</p>
            <p className="mb-1">
              Perimeter = {side1} + {side2} + {side3}
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
    <div className="max-w-screen-xl mx-auto mt-8 p-4">
      {popupMessage && (
        <div className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md">
          {popupMessage}
        </div>
      )}
      <div className="flex flex-col mb-8 p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Description */}
        <h2 className="text-2xl font-bold mb-4">Triangle Description</h2>
        <img
          src=""
          alt="Triangle"
          className="mb-4 w-48 m-auto"
        />
        <p className="text-gray-700 text-justify">
          A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry. Triangles can be classified based on the lengths of their sides and the internal angles. The properties of triangles and their relations to each other make them fundamental in many areas of mathematics and science.
        </p>
      </div>
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Triangle Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Base:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="Enter base"
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
          <label className="block mb-2">
            Side 1:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={side1}
              onChange={(e) => setSide1(e.target.value)}
              placeholder="Enter side 1"
            />
          </label>
          <label className="block mb-2">
            Side 2:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={side2}
              onChange={(e) => setSide2(e.target.value)}
              placeholder="Enter side 2"
            />
          </label>
          <label className="block mb-2">
            Side 3:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={side3}
              onChange={(e) => setSide3(e.target.value)}
              placeholder="Enter side 3"
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

export default TriangleComponent;
