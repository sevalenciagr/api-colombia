import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Departments from "./components/deparments";
import Tourists from "./components/Tourists";
import Presidents from "./components/presidents";
import Colombia from "./components/colombia";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <HashRouter>
    <Home></Home>

        <Routes>

        | <Route path="*" element={<Colombia />}>
            <Route path=":slug" element={<Colombia />} />
          </Route>
          <Route path="/departments" element={<Departments />}>
            <Route path=":slug" element={<Departments />} />
          </Route>
          <Route path="/tourists" element={<Tourists />}>
            <Route path=":slug" element={<Tourists />} />
          </Route>
          <Route path="/presidents" element={<Presidents />}>
            <Route path=":slug" element={<Presidents />} />
          </Route>
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
