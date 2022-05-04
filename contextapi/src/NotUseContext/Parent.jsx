import Child from "./Child";
import { memo } from "react";
const Parent = memo(({ name }) => {
  console.log("Parent Rendering");
  return (
    <div>
      Parent
      <Child name={name} />
    </div>
  );
});

export default Parent;