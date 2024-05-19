import React from 'react';

const InfoShapeCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col mb-8 p-4 bg-gray-100 border border-gray-300 rounded-md">
      <h2 className="text-lg md:text-2xl font-bold mb-4">{title}</h2>
      <img
        src={imageSrc}
        alt={title}
        className="mb-4 w-48 m-auto"
      />
      <p className="text-sm text-gray-700 text-justify md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default InfoShapeCard;
