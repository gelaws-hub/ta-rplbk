import React, { useState, useEffect } from "react";
import axios from "axios";
import { Square } from "../design_patterns/shape_factory/shapes/Square";
import InfoShapeCard from "../components/InfoShapeCard";

const SquareComponent = () => {
  const [sideLength, setSideLength] = useState("");
  const [square, setSquare] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

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
    if (!square) return null;

    const area = square.getArea();
    const perimeter = square.getPerimeter();

    return (
      <>
        {sideLength && (
          <section className="mb-4">
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <p className="mb-1">
              Area = sideLength<sup>2</sup>
            </p>
            <p className="mb-1">
              Area = {sideLength}<sup>2</sup> = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
        )}
        {sideLength && (
          <section className="mb-4">
            <p className="mb-1">Perimeter = 4 * sideLength</p>
            <p className="mb-1">Perimeter = 4 * {sideLength}</p>
            <p>
              Perimeter = <b>{perimeter.toFixed(2)}</b>
            </p>
          </section>
        )}
      </>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 pb-20 relative mb-auto">
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
        title="Square Description"
        description="In Euclidean geometry, a square is a regular quadrilateral, which means that it has four sides of equal length and four equal angles (90-degree angles, π/2 radian angles, or right angles). It can also be defined as a rectangle with two equal-length adjacent sides. It is the only regular polygon whose internal angle, central angle, and external angle are all equal (90°), and whose diagonals are all equal in length. A square with vertices ABCD would be denoted."
        imageSrc={require("./img/Square.gif")}
      />

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

export default SquareComponent;
