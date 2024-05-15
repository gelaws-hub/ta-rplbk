import React, { useState, useEffect } from "react";
import axios from "axios";

const Ellipse = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  useEffect(() => {
    if (a && b) {
      setArea(Math.PI * a * b);
      setPerimeter(
        Math.PI *
          (3 * (parseFloat(a) + parseFloat(b)) -
            Math.sqrt((3 * a + b) * (a + 3 * b)))
      );
    }
  }, [a, b]);

  const saveResult = () => {
    const shapeData = {
      shape: "ellipse",
      parameters: { a, b },
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
      <h2>Ellipse Calculator</h2>
      <form>
        <label>
          Semi-major axis (a):
          <input
            min={0}
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Enter semi-major axis"
            required
          />
        </label>
        <label>
          Semi-minor axis (b):
          <input
            min={0}
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Enter semi-minor axis"
            required
          />
        </label>
      </form>
      {area !== null && perimeter !== null && (
        <div>
          <h3 className="result">Calculations:</h3>
          <section className="result-area">
            <p>Area = π * a * b</p>
            <p>
              Area = π * {a} * {b} = {area}
            </p>
            <p>
              Area = <b>{area}</b>
            </p>
          </section>
          <section className="result-perimeter">
            <p>Perimeter ≈ π * (3 * (a + b) - sqrt((3a + b) * (a + 3b)))</p>
            <p>
              Perimeter ≈ π * (3 * ({a} + {b}) - sqrt((3{a} + {b}) * ({a} + 3{b}
              )))
            </p>
            <p>
              Perimeter ≈ <b>{perimeter}</b>
            </p>
          </section>
          <button onClick={saveResult}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Ellipse;
