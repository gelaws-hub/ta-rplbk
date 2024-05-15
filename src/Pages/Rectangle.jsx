import React, { useState, useEffect } from "react";
import axios from "axios";

const Rectangle = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  useEffect(() => {
    if (length && width) {
      setArea(length * width);
      setPerimeter(2 * (parseFloat(length) + parseFloat(width)));
    }
  }, [length, width]);

  const saveResult = () => {
    const shapeData = {
      shape: "rectangle",
      parameters: { length, width },
      area,
      perimeter,
    };
    axios
      .post("https://shape-calculator-be.vercel.app/save", shapeData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div>
      <h2>Rectangle Calculator</h2>
      <form>
        <label>
          Length:
          <input
            min={0}
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Enter length"
            required
          />
        </label>
        <label>
          Width:
          <input
            min={0}
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width"
            required
          />
        </label>
      </form>
      {area !== null && perimeter !== null && (
        <div>
          <h3 className="result">Calculations:</h3>
          <section className="result-area">
            <p>Area = length * width</p>
            <p>
              Area = {length} * {width} = {area}
            </p>
            <p>
              Area = <b>{area}</b>
            </p>
          </section>
          <section className="result-perimeter">
            <p>Perimeter = 2 * (length + width)</p>
            <p>
              Perimeter = 2 * ({length} + {width}) = {perimeter}
            </p>
            <p>
              Perimeter = <b>{perimeter}</b>
            </p>
          </section>
          <button onClick={saveResult}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Rectangle;
