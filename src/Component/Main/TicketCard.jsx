import React from "react";
import Card from "./Card";
import Task from "./task";
import { useState } from "react";

const TicketCard = ({ fetchData }) => {
  const [selected, setSelected] = useState([]);
  const showSameTicket = (fetchData) => {
    setSelected((prev) => [...prev, fetchData]);
  };
  const clearTask = () => setSelected(null);
  return (
    <div className="max-w-[1280px] mx-auto grid   grid-cols-12 gap-6 mt-12">
      <div className="col-span-12 lg:col-span-9">
        <Card fetchData={fetchData} showSameTicket={showSameTicket}></Card>
      </div>
      <div className="col-span-12 lg:col-span-3 ">
        <h2 className="text-[#34485A] font-bold text-2xl ">Task Status</h2>
        <Task clearTask={clearTask} selected={selected}></Task>
      </div>
    </div>
  );
};

export default TicketCard;
