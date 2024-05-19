import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ellipse } from "../design_patterns/shape_factory/shapes/Ellipse";
import InfoShapeCard from "../components/InfoShapeCard";

const EllipseComponent = () => {
  const [semiMajorAxis, setSemiMajorAxis] = useState("");
  const [semiMinorAxis, setSemiMinorAxis] = useState("");
  const [ellipse, setEllipse] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    if (semiMajorAxis && semiMinorAxis) {
      const newEllipse = new Ellipse(semiMajorAxis, semiMinorAxis);
      setEllipse(newEllipse);
    }
  }, [semiMajorAxis, semiMinorAxis]);

  const saveResult = () => {
    if (!ellipse) return;

    const shapeData = {
      shape: "ellipse",
      parameters: { semiMajorAxis, semiMinorAxis },
      area: ellipse.getArea(),
      perimeter: ellipse.getPerimeter(),
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
    if (!ellipse) return null;

    const area = ellipse.getArea();
    const perimeter = ellipse.getPerimeter();

    return (
      <>
        <h3 className="text-xl font-bold mb-2">Calculations:</h3>
        <section className="mb-4">
          <p className="mb-1">Area ≈ π * semiMajorAxis * semiMinorAxis</p>
          <p className="mb-1">
            Area ≈ {Math.PI.toFixed(2)} * {semiMajorAxis} * {semiMinorAxis} ={" "}
            {area.toFixed(2)}
          </p>
          <p>
            Area ≈ <b>{area.toFixed(2)}</b>
          </p>
        </section>
        <section className="mb-4">
          <p className="mb-1">
            Perimeter (Approximate) = 2π * √((semiMajorAxis^2 + semiMinorAxis^2) / 2)
          </p>
          <p className="mb-1">
            Perimeter (Approximate) = 2π * √(({semiMajorAxis}^2 + {semiMinorAxis}^2) / 2)
          </p>
          <p>
            Perimeter (Approximate) ≈ <b>{perimeter.toFixed(2)}</b>
          </p>
        </section>
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
      <InfoShapeCard
        title="Ellipse Description"
        imageSrc={require("./img/Ellipse.png")}
        imgAlt="Ellipse"
        description="An ellipse is a curve in a plane surrounding two focal points such that the sum of the distances to the two focal points is constant for every point on the curve. The semi-major axis is the longest radius of an ellipse, and the semi-minor axis is the shortest. The area of an ellipse can be approximated using the formula π * semiMajorAxis * semiMinorAxis, and the perimeter can be approximated using a complex formula involving square roots and trigonometric functions."
      />
      <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Ellipse Calculator</h2>
        <form className="mb-4">
          <label className="block mb-2">
            Semi-Major Axis:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={semiMajorAxis}
              onChange={(e) => setSemiMajorAxis(e.target.value)}
              placeholder="Enter semi-major axis"
              required
            />
          </label>
          <label className="block mb-2">
            Semi-Minor Axis:
            <input
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              min={0}
              type="number"
              value={semiMinorAxis}
              onChange={(e) => setSemiMinorAxis(e.target.value)}
              placeholder="Enter semi-minor axis"
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

export default EllipseComponent;
