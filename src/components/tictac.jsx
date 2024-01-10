import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);
  return (
    <>
      <div className="">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={Square[2]} />
      </div>
      <div className="">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}
