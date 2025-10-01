import { Suspense } from "react";
import "./App.css";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar";
import React from "react";
import Footer from "./Component/footer";

const fetchData = () => {
  return fetch("/fetchData.json").then((res) => res.json());
};
const PromiseData = fetchData();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Main PromiseData={PromiseData}></Main>
      </Suspense>
      <div className="w-full bg-black">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
