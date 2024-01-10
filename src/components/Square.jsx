import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState("0");

  const handleClick = () => {
    setValue(value === "X" ? "0" : "X");
  };

  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        color: value === "X" ? "red" : "green",
      }}
      className=""
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
