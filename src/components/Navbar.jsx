import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto container text-white px-6 py-3 md:px-40 shadow-lg bg-slate-800 fixed">
      <div className="flex justify-between">
        <h1 className="text-2xl cursor-pointer font-bold">
          Word<span className="text-3xl text-green-500">To</span>PDF
        </h1>
        <h1 className="text-2xl cursor-pointer font-bold hover:scale-125 duration-300">
          Home
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
