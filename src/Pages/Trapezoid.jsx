import React, { useState, useEffect } from "react";
import axios from "axios";

const Trapezoid = () => {
  const [base1, setBase1] = useState("");
  const [base2, setBase2] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  useEffect(() => {
    if (base1 && base2 && height) {
      const areaValue =
        ((parseFloat(base1) + parseFloat(base2)) / 2) * parseFloat(height);
      const perimeterValue =
        parseFloat(base1) +
        parseFloat(base2) +
        2 * Math.sqrt((height ** 2 + (base2 - base1) ** 2) / 4);
      setArea(areaValue);
      setPerimeter(perimeterValue);
    }
  }, [base1, base2, height]);

  const saveResult = () => {
    const shapeData = {
      shape: "trapezoid",
      parameters: { base1, base2, height },
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
      <h2>Trapezoid Calculator</h2>
      <form>
        <label>
          Base 1:
          <input
            min={0}
            type="number"
            value={base1}
            onChange={(e) => setBase1(e.target.value)}
            placeholder="Enter base 1"
            required
          />
        </label>
        <label>
          Base 2:
          <input
            min={0}
            type="number"
            value={base2}
            onChange={(e) => setBase2(e.target.value)}
            placeholder="Enter base 2"
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
            <p>Area = ((base1 + base2) / 2) * height</p>
            <p>
              Area = (({base1} + {base2}) / 2) * {height} = {area.toFixed(2)}
            </p>
            <p>
              Area = <b>{area.toFixed(2)}</b>
            </p>
          </section>
          <section className="result-perimeter">
            <p>
              Perimeter = base1 + base2 + 2 * √((height² + ((base2 - base1)²) /
              4))
            </p>
            <p>
              Perimeter = {base1} + {base2} + 2 * √(({height}² + (({base2} -{" "}
              {base1})²) / 4)) = {perimeter.toFixed(2)}
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

export default Trapezoid;
