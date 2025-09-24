import React from "react";

const task = ({ selected, showSameTicket }) => {
  console.log(selected);
  return (
    <div>
      <h3 className="text-[#34485A] font-semibold text-2xl">Task Status</h3>
      <div className="p-5 bg-[#FFFFFF] shadow-2xl rounded-xl mt-6">
        <h2 className="mb-3 text-[#001931] font-medium text-lg">
          {selected ? selected.title : "No Task Selected"}
        </h2>
        <button
          onClick={showSameTicket}
          className="btn btn-block !bg-[#02A53B] text-white"
        >
          Complete
        </button>
      </div>
      <div className="mt-16">
        <h2 className="mb-3 text-[#001931] font-medium text-2xl">
          Resolved Task
        </h2>
        <div className="p-5 bg-[#e0e7ff] bg-opacity-30 shadow-2xl rounded-xl mt-6">
          <p> {selected ? selected.title : "No Task Selected"}</p>
        </div>
      </div>
    </div>
  );
};

export default task;
