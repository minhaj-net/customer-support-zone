import React, { Suspense, use } from "react";
import TwoCardLayout from "./TwoCardLayout";
import TicketCard from "./TicketCard";
import { useState } from "react";

const Main = ({ PromiseData }) => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleAddToProgress = () => {
    setInProgressCount((prev) => prev + 1);
  };
  const handleAddToResolved = () => {
    // setInProgressCount((prev) => prev + 1);
    setResolvedCount((prev) => prev + 1);
  };
  const fetchData = use(PromiseData);
  // const data = use(PromiseData);
  // console.log(data);
  return (
    <div className="max-w-[1280px] mx-auto">
      <TwoCardLayout
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      ></TwoCardLayout>
      <TicketCard
        handleAddToResolved={handleAddToResolved}
        fetchData={fetchData}
        handleAddToProgress={handleAddToProgress}
      ></TicketCard>
    </div>
  );
};

export default Main;
