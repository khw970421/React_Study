import { nameContext } from "../App.js";
import { useContext, memo } from "react";
const Child = memo(() => {
  const { name } = useContext(nameContext);
  console.log("Child rendering");
  return <div>Child name is {name}</div>;
});

export default Child;