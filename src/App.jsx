import { Suspense } from "react";
import "./App.css";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar";
import React from "react";
import Footer from "./Component/footer";
import { ToastContainer } from "react-toastify";

const fetchData = () => {
  return fetch("/fetchData.json").then((res) => res.json());
};
const PromiseData = fetchData();

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar></Navbar>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen gap-4">
            <div className="w-64 h-40 p-4  rounded-lg shadow animate-pulse ">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="w-64 h-40 p-4  rounded-lg shadow animate-pulse ">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="w-64 h-40 p-4  rounded-lg shadow animate-pulse ">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        }
      >
        <Main PromiseData={PromiseData}></Main>
      </Suspense>

      <div className="w-full bg-black mt-10 md:mt-16">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
