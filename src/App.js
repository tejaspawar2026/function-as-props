import "./App.css";
import FuncProp from "./components/FuncProp";

function App() {
  function getData() {
    alert("function called from App => getData()");
  }

  return (
    <div>
      <FuncProp data={getData} />
    </div>
  );
}

export default App;
