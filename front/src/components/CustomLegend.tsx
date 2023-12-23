import React from "react";

interface LegendProps {
  data: { color: string; name: string }[];
}

const Legend: React.FC<LegendProps> = ({ data }) => {
  return (
    <div className="flex">
      {data.map((item, index) => (
        <div key={index} className="flex items-center mr-4">
          <span
            className={`inline-block mr-2 rounded-full ${
              item.color === "#282D30" ? "bg-gray-800" : "bg-red-600"
            }`}></span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
