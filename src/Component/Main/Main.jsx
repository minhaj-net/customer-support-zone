import React, { use } from "react";
import TwoCardLayout from "./TwoCardLayout";
import TicketCard from "./TicketCard";

const Main = ({ PromiseData }) => {
  const fetchData = use(PromiseData);
  // const data = use(PromiseData);
  // console.log(data);
  return (
    <div className="max-w-[1280px] mx-auto">
      <TwoCardLayout></TwoCardLayout>
      <TicketCard fetchData={fetchData}></TicketCard>
    </div>
  );
};

export default Main;
