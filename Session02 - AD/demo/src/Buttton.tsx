import React from "react";

type ButttonProps = {
  color?: string;
  backgroundColor?: string;
  fontSize?: string | number;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
};

const Buttton: React.FC<ButttonProps> = ({
  color = "#fff",
  backgroundColor = "#1976d2",
  fontSize = "1rem",
  width = "120px",
  height = "40px",
  children = "Button",
  ...rest
}) => {
  return (
    <button
      style={{
        color,
        backgroundColor,
        fontSize,
        width,
        height,
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "8px",
        boxShadow: "0 2px 8px rgba(44,22,60,0.07)",
        fontWeight: 500,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Buttton;

