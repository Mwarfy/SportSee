import React from "react";

export const Icon: React.FC<{
  icon: string;
  keyData: string;
  color: string;
  text: string;
}> = ({ icon, keyData, color, text }) => {
  return (
    <div className="w-full h-full bg-gray-50 rounded-lg flex justify-around px-10 items-center">
      <div
        className={`w-[60px] h-[60px] rounded-lg flex justify-center items-center ${color}`}>
        <img src={icon} className="w-6" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{keyData}</span>
        <span className="text-sm text-slate-400">{text}</span>
      </div>
    </div>
  );
};
