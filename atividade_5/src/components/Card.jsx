import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-700 p-4 min-h-48 max-w-90 p-4 rounded-xl border-2 border-slate-600 text-slate-300 lg:min-h-62 lg:max-w-96 lg:p-6">
      {children}
    </div>
  );
};

export default Card;
