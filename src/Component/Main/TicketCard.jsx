import React, { Suspense } from "react";
import Card from "./Card";
import Task from "./task";
import { useState } from "react";

const TicketCard = ({
  fetchData,
  handleAddToProgress,
  handleAddToResolved,
}) => {
  const [tickets, setTickets] = useState(fetchData);
  const [selected, setSelected] = useState([]);
  const showSameTicket = (fetchData) =>
    setSelected((prev) => {
      // duplicate avoid
      if (prev.find((t) => t.id === fetchData.id)) return prev;
      return [...prev, fetchData];
    });
  const clearTask = (id) => {
    setSelected((prev) => prev.filter((t) => t.id !== id));
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <div className="max-w-[1280px] mx-auto grid   grid-cols-12 gap-6 mt-12">
      <div className="col-span-12 lg:col-span-9">
        <Suspense>
          <Card
            fetchData={tickets}
            handleAddToProgress={handleAddToProgress}
            showSameTicket={showSameTicket}
          ></Card>
        </Suspense>
      </div>
      <div className="col-span-12 lg:col-span-3 ">
        <h2 className="text-[#34485A] font-bold text-2xl ">Task Status</h2>
        <Task
          clearTask={clearTask}
          handleAddToResolved={handleAddToResolved}
          selected={selected}
        ></Task>
      </div>
    </div>
  );
};

export default TicketCard;
