import React from "react";

function Form() {
  return (
    <form className="text-center py-6 m-4">
      <input
        type="text"
        placeholder="Enter notes"
        className="border-2 p-3 rounded-full  text-sm w-[500px] border-stone-200"
      />
      <button
        className="bg-red-300 p-2 w-[180px] h-[45px] ml-2 rounded-full text-stone-500"
        onClick={(e) => {
          e.preventDefault();
          console.log("hello world");
        }}
      >
        Click
      </button>
    </form>
  );
}

export default Form;
