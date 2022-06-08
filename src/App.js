import "./App.css";
import Job from "./Component/Job-Manager";
import Navbar from "./Component/Navbar";

function App() {
  document.body.style.backgroundColor = "#151021";
  return (
    <>
      <Navbar></Navbar>
      <Job></Job>
    </>
  );
}

export default App;
