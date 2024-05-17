import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rhombus } from "../design_patterns/shape_factory/shapes/Rhombus";

const RhombusComponent = () => {
  const [diagonal1, setDiagonal1] = useState("");
  const [diagonal2, setDiagonal2] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    if (diagonal1 && diagonal2) {
      const newRhombus = new Rhombus(diagonal1, diagonal2);
      setArea(newRhombus.getArea());
      setPerimeter(newRhombus.getPerimeter());
    }
  }, [diagonal1, diagonal2]);

  const saveResult = () => {
    if (!area || !perimeter) return;

    const shapeData = {
      shape: "rhombus",
      parameters: { diagonal1, diagonal2 },
      area,
      perimeter,
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
        <h2 className="text-2xl font-bold mb-4">Rhombus Description</h2>
        <img src="" alt="Rhombus" className="mb-4 w-48 m-auto" />
        <p className="text-gray-700 text-justify">
          A rhombus is a quadrilateral with all sides of equal length. It
          differs from a square in that its angles are not right angles. The
          diagonals of a rhombus bisect each other at right angles.
        </p>
      </div>
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Rhombus Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Diagonal 1:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={diagonal1}
              onChange={(e) => setDiagonal1(e.target.value)}
              placeholder="Enter diagonal 1"
            />
          </label>
          <label className="block mb-2">
            Diagonal 2:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={diagonal2}
              onChange={(e) => setDiagonal2(e.target.value)}
              placeholder="Enter diagonal 2"
            />
          </label>
        </form>
        {area !== null && perimeter !== null && (
          <div>
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <section className="mb-4">
              <p className="mb-1">Area = (Diagonal 1 * Diagonal 2) / 2</p>
              <p className="mb-1">
                Area = {diagonal1} * {diagonal2} / 2 = {area.toFixed(2)}
              </p>
              <p>
                Area = <b>{area.toFixed(2)}</b>
              </p>
            </section>
            <section className="mb-4">
              <p className="mb-1">
                Perimeter = 4 * √(({diagonal1} / 2)² + ({diagonal2} / 2)²)
              </p>
              <p className="mb-1">
                Perimeter = 4 * √(({diagonal1} / 2)² + ({diagonal2} / 2)²) ={" "}
                {perimeter.toFixed(2)}
              </p>
              <p>
                Perimeter = <b>{perimeter.toFixed(2)}</b>
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

export default RhombusComponent;
