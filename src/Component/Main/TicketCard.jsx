import React from "react";
import Card from "./Card";
import Task from "./task";

const TicketCard = ({ fetchData }) => {
  return (
    <div className="max-w-[1280px] mx-auto grid   grid-cols-12 gap-6 mt-12">
      <div className="col-span-12 lg:col-span-9">
        <Card fetchData={fetchData}></Card>
      </div>
      <div className="col-span-12 lg:col-span-3 ">
        <Task></Task>
      </div>
    </div>
  );
};

export default TicketCard;
