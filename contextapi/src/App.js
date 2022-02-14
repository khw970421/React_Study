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