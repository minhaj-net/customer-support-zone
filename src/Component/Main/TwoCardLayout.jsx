import React from "react";
import VectorImg from "../../assets/vector1.png";

const TwoCardLayout = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-[40px] ">
      <div
        className=" relative rounded-md p-7 flex flex-col items-center justify-center
 text-white h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center"
      >
        <div>
          <img
            src={VectorImg}
            alt=""
            className="w-auto h-auto absolute top-0 left-0"
          />
          <h2 className="text-2xl font ">In-Progress</h2>
          <p className="text-4xl font-bold">{inProgressCount}</p>
          <img
            src={VectorImg}
            alt=""
            className="w-auto h-auto absolute bottom-0 right-0 transform scale-x-[-1]"
          />
        </div>
      </div>
      <div className="relative  w-full h-[250px] mx-auto  !bg-gradient-to-r from-[#54CF68] to-[#00827A]  flex justify-center items-center text-center text-white rounded-xl">
        <div>
          <img
            src={VectorImg}
            alt=""
            className="w-auto h-auto absolute top-0 left-0"
          />
          <h2 className="text-2xl font ">Resolved</h2>
          <p className="text-4xl font-bold">{resolvedCount}</p>
          <img
            src={VectorImg}
            alt=""
            className="w-auto h-auto absolute bottom-0 right-0 transform scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoCardLayout;
