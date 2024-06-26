import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parallelogram } from "../design_patterns/shape_factory/shapes/Parallelogram";
import InfoShapeCard from "../components/InfoShapeCard";

const ParallelogramComponent = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [side, setSide] = useState("");
  const [parallelogram, setParallelogram] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    if (base && height && side) {
      const newParallelogram = new Parallelogram(base, height, side);
      setParallelogram(newParallelogram);
    } else {
      setParallelogram(null);
    }
  }, [base, height, side]);

  const saveResult = () => {
    if (!parallelogram) return;

    const shapeData = {
      shape: "parallelogram",
      parameters: { base, height, side },
      area: parallelogram.getArea(),
      perimeter: parallelogram.getPerimeter(),
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
    if (!parallelogram) return null;

    const area = parallelogram.getArea();
    const perimeter = parallelogram.getPerimeter();

    return (
      <>
        {base && height && (
          <section className="mb-4">
            <h3 className="text-xl font-bold mb-2">Calculations:</h3>
            <p className="mb-1">Area = base * height</p>
            <p className="mb-1">
              Area = {base} * {height} = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
        )}
        {base && side && (
          <section className="mb-4">
            <p className="mb-1">Perimeter = 2 * (base + side)</p>
            <p className="mb-1">
              Perimeter = 2 * ({base} + {side})
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
        title="Parallelogram Description"
        description="A parallelogram is a quadrilateral with opposite sides parallel and
        equal in length. The base of a parallelogram is any one of its sides,
        and the height is the perpendicular distance between the base and its
        opposite side. The area of a parallelogram can be calculated by
        multiplying the length of the base by the height. The perimeter of a
        parallelogram is the sum of all its side lengths."
        imageSrc={require("./img/Parallelogram.png")}
      />

      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        {/* Calculator */}
        <h2 className="text-2xl font-bold mb-4">Parallelogram Calculator</h2>
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
            Side:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={side}
              onChange={(e) => setSide(e.target.value)}
              placeholder="Enter side"
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

export default ParallelogramComponent;
