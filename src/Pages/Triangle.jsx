import React, { useState, useEffect } from "react";
import axios from "axios";

const Triangle = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  useEffect(() => {
    if (base && height) {
      const areaValue = (base * height) / 2;
      const side1 = Math.sqrt(height ** 2 + (base / 2) ** 2);
      const perimeterValue = parseFloat(base) + 2 * side1;
      setArea(areaValue);
      setPerimeter(perimeterValue);
    }
  }, [base, height]);

  const saveResult = () => {
    const shapeData = {
      shape: "triangle",
      parameters: { base, height },
      area,
      perimeter,
    };
    axios
      .post("http://localhost:5000/save", shapeData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div>
      <h2>Triangle Calculator</h2>
      <form>
        <label>
          Base:
          <input
            min={0}
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Enter base"
            required
          />
        </label>
        <label>
          Height:
          <input
            min={0}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
            required
          />
        </label>
      </form>
      {area !== null && perimeter !== null && (
        <div>
          <h3 className="result">Calculations:</h3>
          <section className="result-area">
            <p>Area = (base * height) / 2</p>
            <p>
              Area = ({base} * {height}) / 2 = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
          <section className="result-perimeter">
            <p>Perimeter = base + 2 * side</p>
            <p>
              Perimeter = {base} + 2 *{" "}
              {Math.sqrt(height ** 2 + (base / 2) ** 2).toFixed(2)}
            </p>
            <p>
              Perimeter = <b>{perimeter.toFixed(2)}</b>
            </p>
          </section>
          <button onClick={saveResult}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Triangle;
