import { memo } from "react";
const Child = memo(({ name }) => {
  console.log("Child rendering");
  return <div> Child name is {name}</div>;
});

export default Child;