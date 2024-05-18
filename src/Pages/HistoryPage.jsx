import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../components/DeleteModal";

// Import Images
import CircleImage from "./img/Circle.png"
import SquareImage from "./img/Square.gif"
import TriangleImage from "./img/triangle.png"
import RectangleImage from "./img/rectangle.jpg"
import EllipseImage from "./img/Ellipse.png"
import ParallelogramImage from "./img/Parallelogram.png"
import TrapezoidImage from "./img/Trapezoid.png"
import RhombusImage from "./img/Rhombus.png"

const History = () => {
  const [calculations, setCalculations] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "https://shape-calculator-be.vercel.app/history"
      );
      setCalculations(response.data);
    } catch (error) {
      console.error("There was an error fetching the history!", error);
    }
  };

  const confirmDeletion = (id) => {
    setCurrentId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://shape-calculator-be.vercel.app/delete/${currentId}`
      );
      fetchHistory(); // Refresh history after deletion
      setIsDeleteModalOpen(false);
      setSuccessMessage("Item successfully deleted!");

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("There was an error deleting the calculation!", error);
    }
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCurrentId(null);
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
    return formattedDate;
  };

  // Map shapes to image URLs
  const shapeImages = {
    Circle: CircleImage,
    Ellipse: EllipseImage,
    Parallelogram: ParallelogramImage,
    Rectangle: RectangleImage,
    Rhombus: RhombusImage,
    Square: SquareImage,
    Trapezoid: TrapezoidImage,
    Triangle: TriangleImage,
  };

  return (
    <div className="container mx-auto p-4 min-h-screen overflow-auto">
      <h2 className="text-2xl font-bold mb-4 p-5 bg-white rounded-lg shadow-md border border-gray-200">
        Calculation History
      </h2>
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">{successMessage}</strong>
        </div>
      )}
      <div
        className="history-container"
        style={{ maxHeight: "500px" }}
      >
        {calculations.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {calculations.map((calculation) => (
              <div
                key={calculation._id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex"
              >
                <div className="w-3/5">
                  <p>
                    Shape : <strong>{calculation.shape}</strong>
                  </p>
                  <div>
                    {Object.entries(calculation.parameters).map(
                      ([key, value]) => (
                        <p key={key}>
                          {key} : <strong>{value}</strong>
                        </p>
                      )
                    )}
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
                    onClick={() => confirmDeletion(calculation._id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="w-2/5 flex justify-center items-center">
                  <img
                    src={shapeImages[calculation.shape]}
                    alt={calculation.shape}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No calculations found</p>
        )}
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default History;
