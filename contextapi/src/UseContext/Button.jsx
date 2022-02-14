import { nameContext } from "../App.js";
import { useContext } from "react";
const Button = () => {
  const { clickEvent } = useContext(nameContext);
  return <button onClick={clickEvent}>button</button>;
};

export default Button;