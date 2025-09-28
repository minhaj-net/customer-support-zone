import React from "react";
import { useState } from "react";

const Task = ({ selected, clearTask }) => {
  const [movedTasks, setMovedTasks] = useState([]);
  const handleMove = () => {
    if (selected) {
      setMovedTasks([...movedTasks, selected]); // আগেরগুলো রেখে নতুনটা add
      clearTask(); // selected টাস্ক ক্লিয়ার কর
    }
  };
  if (!selected || selected.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {selected ? (
        <>
          {selected.map((ticket, index) => (
            <div
              key={index}
              className="p-4   shadow-lg bg-white rounded-2xl mt-3"
            >
              <h3 className="text-[#001931] text-lg">{ticket.title}</h3>
              <button
                onClick={handleMove}
                className="btn btn-wide mt-3 !rounded-lg !bg-[#02A53B] text-white"
              >
                Complete
              </button>
            </div>
          ))}
        </>
      ) : (
        <p>No task selected</p>
      )}
      {movedTasks.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Moved Tasks</h3>
          <ul className="space-y-2">
            {movedTasks.map((task, index) => (
              <li
                key={index}
                className="p-3 border rounded bg-gray-50 shadow-sm"
              >
                <h4 className="font-bold">{task.title}</h4>
                <p className="text-sm">{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    //retunrn end
  );
};
export default Task;
