import React from "react";
import Card from "./Card";
import Task from "./task";
import { useState } from "react";

const TicketCard = ({ fetchData }) => {
  const prop = (id) => {
    console.log(id);
  };
  const [selected, setSelected] = useState(null);
  const showSameTicket = () => {
    setSelected({ ...selected }); // শুধু আগের selected ticket
  };
  return (
    <div className="max-w-[1280px] mx-auto grid   grid-cols-12 gap-6 mt-12">
      <div className="col-span-12 lg:col-span-9">
        <Card
          prop={prop}
          fetchData={fetchData}
          setSelected={setSelected}
        ></Card>
      </div>
      <div className="col-span-12 lg:col-span-3 ">
        <Task showSameTicket={showSameTicket} selected={selected}></Task>
      </div>
    </div>
  );
};

export default TicketCard;
