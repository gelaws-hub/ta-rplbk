import React, { useState } from "react";

const HelpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [reportSuccess, setReportSuccess] = useState("");

  const handleReportError = (e) => {
    e.preventDefault();
    const errorReport = e.target.elements.errorReport.value;
    const phoneNumber = "+6281312023307";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Error Report: ${errorReport}`
    )}`;

    window.open(whatsappUrl, "_blank");
    setReportSuccess("Redirecting to WhatsApp...");
    e.target.reset();
  };

  return (
    <div className="container mx-auto p-4 mb-auto pb-20">
      <h2 className="text-2xl font-bold mb-4 p-5 bg-white rounded-lg shadow-md border border-gray-200">
        Help Page
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h4 className="font-bold">Q1: How do I calculate the area of a shape?</h4>
          <p>A: Select the shape you want to calculate, enter the required dimensions, and click "Calculate".</p>

          <h4 className="font-bold mt-4">Q2: What shapes can I calculate?</h4>
          <p>A: You can calculate areas and perimeters for circles, squares, triangles, rectangles, ellipses, parallelograms, trapezoids, and rhombuses.</p>

          <h4 className="font-bold mt-4">Q3: How do I delete a calculation from my history?</h4>
          <p>A: Go to the History page, find the calculation you want to delete, and click the "Delete" button.</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Tutorial</h3>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h4 className="font-bold">Step 1: Select a Shape</h4>
          <p>Choose a shape from the shape selection menu.</p>

          <h4 className="font-bold mt-4">Step 2: Enter Dimensions</h4>
          <p>Input the required dimensions for the selected shape.</p>

          <h4 className="font-bold mt-4">Step 3: Calculate</h4>
          <p>Click the "Calculate" button to see the area and perimeter of the shape.</p>

          <h4 className="font-bold mt-4">Step 4: View History</h4>
          <p>Check the History page to view all your past calculations.</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Report an Error</h3>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              <strong className="font-bold">{errorMessage}</strong>
            </div>
          )}
          {reportSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              <strong className="font-bold">{reportSuccess}</strong>
            </div>
          )}
          <form onSubmit={handleReportError}>
            <label htmlFor="errorReport" className="block font-bold mb-2">Describe the issue:</label>
            <textarea
              id="errorReport"
              name="errorReport"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
