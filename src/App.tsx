import "./App.css";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import Calcualtor from "./components/Calculator";
import { Title } from "./components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const App: () => JSX.Element = () => {
  return (
    <>
      <div className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <Title name="React Calc" />
      <p className="description">
        This calculator was powered by the <span>useReducer()</span> react hook.
      </p>
      <div className="info">
        <FontAwesomeIcon icon={faCircleInfo} />
        You can use keyboard numpad keys as inputs.
      </div>
      <Calcualtor />
    </>
  );
};

export default App;
