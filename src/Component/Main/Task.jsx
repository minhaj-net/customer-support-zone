import React, { useState } from "react";

const Task = ({ selected, clearTask }) => {
  const [movedTasks, setMovedTasks] = useState([]);

  const handleMove = (ticket) => {
    setMovedTasks((prev) => [...prev, ticket]); // নিচে add হবে
    clearTask(ticket.id); // শুধু ওইটাকে remove করব
  };

  return (
    <div className="space-y-4 text-center md:text-left">
      {/* Top Section: Selected Tasks */}
      {selected.length > 0 ? (
        selected.map((ticket) => (
          <div
            key={ticket.id}
            className="p-4 shadow-lg bg-white rounded-2xl mt-3"
          >
            <h3 className="text-[#001931] text-lg">{ticket.title}</h3>

            <button
              onClick={() => handleMove(ticket)}
              className="btn btn-wide mt-3 !rounded-lg !bg-[#02A53B] text-white"
            >
              Complete
            </button>
          </div>
        ))
      ) : (
        <p className="">Select a ticket to add to Task Status</p>
      )}

      {/* Bottom Section: Completed Tasks */}
      <div className="mt-6">
        <h2 className="text-[#34485A] font-bold text-2xl mb-2">
          Completed Tasks
        </h2>
        {movedTasks.length > 0 ? (
          <ul className="space-y-2">
            {movedTasks.map((task) => (
              <li
                key={task.id}
                className="p-3  bg-[#E0E7FF] rounded-lg shadow-sm"
              >
                <h4 className="font-bold">{task.title}</h4>
              </li>
            ))}
          </ul>
        ) : (
          <p className=" text-[#627382]">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default Task;
