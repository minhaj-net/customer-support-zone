import React from "react";
import "../../assets/vector1.png";

const TwoCardLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-[40px] ">
      <div className="max-w-[1280px] w-[600px] h-[230px] mx-auto  !bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  flex justify-center items-center text-center text-white rounded-xl">
        <div>
          <h2 className="text-2xl font ">In-Progress</h2>
          <p className="text-4xl">0</p>
        </div>
      </div>
      <div className="max-w-[1280px] w-[600px] h-[230px] mx-auto  !bg-gradient-to-r from-[#54CF68] to-[#00827A]  flex justify-center items-center text-center text-white rounded-xl">
        <div>
          <h2 className="text-2xl font ">Resolved</h2>
          <p className="text-4xl">0</p>
        </div>
      </div>
    </div>
  );
};

export default TwoCardLayout;
