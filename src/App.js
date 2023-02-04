// App.js
import { BrowserRouter } from "react-router-dom";
import Adapter from "./Adapter";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Adapter />
    </BrowserRouter>
  );
};

export default App;
