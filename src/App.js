import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };

  const handleSub = () => {
    setValue(value - 1);
  };

  const handleMul = () => {
    setValue(value * 2);
  };

  return (
    <div className="w-full h-[100vh] App flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-8">
        <button
          id="add"
          onClick={handleAdd}
          className="w-12 h-12 bg-red-600 text-white p-2 rounded-full border border-black cursor-pointer"
        >
          +1
        </button>
        <button
          id="sub"
          onClick={handleSub}
          className="w-12 h-12 bg-red-600 text-white p-2 rounded-full border border-black cursor-pointer"
        >
          -1
        </button>
        <button
          id="mul"
          onClick={handleMul}
          className="w-12 h-12 bg-red-600 text-white p-2 rounded-full border border-black cursor-pointer"
        >
          *2
        </button>
      </div>
      <div
        id="display"
        className="w-24 h-12 flex items-center justify-center text-xl border border-black"
      >
        {value}
      </div>
    </div>
  );
}

export default App;
