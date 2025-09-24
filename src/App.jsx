import "./App.css";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar";

// const fetchData = async () => {
//   const response = await fetch("/fetchData.json");
//   const data = await response.json();
// };
const fetchData = () => {
  return fetch("/fetchData.json").then((res) => res.json());
};
const PromiseData = fetchData();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main PromiseData={PromiseData}></Main>
    </>
  );
}

export default App;
