// Context 사용X

/*
import Button from "./NotUseContext/Button";
import GrandParent from "./NotUseContext/GrandParent";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("khw");
  return (
    <div>
      <Button
        clickEvent={() => {
          setName("Not khw");
        }}
      />
      <GrandParent name={name} />
    </div>
  );
};

export default App;

*/

// Context 사용

import Button from "./UseContext/Button";
import GrandParent from "./UseContext/GrandParent";
import { useState, createContext } from "react";
export const nameContext = createContext();
const App = () => {
  const [name, setName] = useState("khw");
  const clickEvent = () => {
    setName("Not khw");
  };
  return (
    <div>
      <nameContext.Provider value={{ name: name, clickEvent: clickEvent }}>
        <Button />
        <GrandParent />
      </nameContext.Provider>
    </div>
  );
};

export default App;