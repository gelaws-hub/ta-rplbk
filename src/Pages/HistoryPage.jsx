import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("https://shape-calculator-be.vercel.app/history");
      setCalculations(response.data);
    } catch (error) {
      console.error("There was an error fetching the history!", error);
    }
  };

  const deleteCalculation = async (id) => {
    try {
      await axios.delete(`https://shape-calculator-be.vercel.app/delete/${id}`);
      fetchHistory(); // Refresh history after deletion
    } catch (error) {
      console.error("There was an error deleting the calculation!", error);
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
    return formattedDate;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Calculation History</h2>
      {calculations.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {calculations.map((calculation) => (
            <div
              key={calculation._id}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              <p>
                Shape : <strong>{calculation.shape}</strong>
              </p>
              <div>
                {Object.entries(calculation.parameters).map(([key, value]) => (
                  <p key={key}>
                    {key} : <strong>{value}</strong>
                  </p>
                ))}
              </div>
              <p>
                Area : <strong> {calculation.area.toFixed(2)}</strong>
              </p>
              <p>
                Perimeter :{" "}
                <strong> {calculation.perimeter.toFixed(2)}</strong>
              </p>
              <p>
                Date : <strong> {formatDate(calculation.date)}</strong>
              </p>
              <button
                className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                onClick={() => deleteCalculation(calculation._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No calculations found</p>
      )}
    </div>
  );
};

export default History;
