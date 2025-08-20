import React from "react";

const Title = ({ children, ...props }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-100 py-1" {...props}>
        {children}
      </h1>
    </div>
  );
};

export default Title;
