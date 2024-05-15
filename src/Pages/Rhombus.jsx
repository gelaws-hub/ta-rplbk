import React, { useState, useEffect } from "react";
import axios from "axios";

const Rhombus = () => {
  const [diagonal1, setDiagonal1] = useState("");
  const [diagonal2, setDiagonal2] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  useEffect(() => {
    if (diagonal1 && diagonal2) {
      const areaValue = (parseFloat(diagonal1) * parseFloat(diagonal2)) / 2;
      const perimeterValue =
        4 * Math.sqrt((diagonal1 / 2) ** 2 + (diagonal2 / 2) ** 2);
      setArea(areaValue);
      setPerimeter(perimeterValue);
    }
  }, [diagonal1, diagonal2]);

  const saveResult = () => {
    const shapeData = {
      shape: "rhombus",
      parameters: { diagonal1, diagonal2 },
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
      <h2>Rhombus Calculator</h2>
      <form>
        <label>
          Diagonal 1:
          <input
            type="number"
            value={diagonal1}
            onChange={(e) => setDiagonal1(e.target.value)}
            placeholder="Enter diagonal 1"
            required
          />
        </label>
        <label>
          Diagonal 2:
          <input
            min={0}
            type="number"
            value={diagonal2}
            onChange={(e) => setDiagonal2(e.target.value)}
            placeholder="Enter diagonal 2"
            required
          />
        </label>
      </form>
      {area !== null && perimeter !== null && (
        <div>
          <h3 className="result">Calculations:</h3>
          <section className="result-area">
            <p>Area = (diagonal1 * diagonal2) / 2</p>
            <p>
              Area = ({diagonal1} * {diagonal2}) / 2 = {area}
            </p>
            <p>
              Area = <b>{area}</b>
            </p>
          </section>
          <section className="result-perimeter">
            <p>Perimeter = 4 * √((diagonal1 / 2)² + (diagonal2 / 2)²)</p>
            <p>
              Perimeter = 4 * √(({diagonal1} / 2)² + ({diagonal2} / 2)²) ={" "}
              {perimeter}
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

export default Rhombus;
