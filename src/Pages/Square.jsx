import React, { useState, useEffect } from "react";
import axios from "axios";
import { Square } from "../design_patterns/shape_factory/shapes/Square";

const SquareComponent = () => {
  const [sideLength, setSideLength] = useState("");
  const [square, setSquare] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSideLength(value >= 0 ? value : "");
  };

  useEffect(() => {
    if (sideLength) {
      const newSquare = new Square(sideLength);
      setSquare(newSquare);
    }
  }, [sideLength]);

  const saveResult = () => {
    if (!square) return;

    const shapeData = {
      shape: "square",
      parameters: { sideLength },
      area: square.getArea(),
      perimeter: square.getPerimeter(),
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
        <h2 className="text-2xl font-bold mb-4">Square Description</h2>
        <img
          src={require("./img/Square.gif")}
          alt="Square"
          className="mb-4 w-48 m-auto"
        />
        <p className="text-gray-700 text-justify">
          In Euclidean geometry, a square is a regular quadrilateral, which
          means that it has four sides of equal length and four equal angles
          (90-degree angles, π/2 radian angles, or right angles). It can also be
          defined as a rectangle with two equal-length adjacent sides. It is the
          only regular polygon whose internal angle, central angle, and external
          angle are all equal (90°), and whose diagonals are all equal in
          length. A square with vertices ABCD would be denoted
        </p>
        {/* Add more description if needed */}
      </div>
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Square Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Side Length:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={sideLength}
              onChange={handleInputChange}
              placeholder="Enter side length"
              required
            />
          </label>
        </form>
        {square && (
          <div>
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <section className="mb-4">
              <p className="mb-1">
                Area = sideLength<sup>2</sup>
              </p>
              <p className="mb-1">
                Area = {sideLength}
                <sup>2</sup> = {square.getArea().toFixed(2)}
              </p>
              <p>
                Area = <b>{square.getArea().toFixed(2)}</b>
              </p>
            </section>
            <section className="mb-4">
              <p className="mb-1">Perimeter = 4 * sideLength</p>
              <p className="mb-1">Perimeter = 4 * {sideLength}</p>
              <p>
                Perimeter = <b>{square.getPerimeter().toFixed(2)}</b>
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

export default SquareComponent;
