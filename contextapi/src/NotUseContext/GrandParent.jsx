import Parent from "./Parent";
import { memo } from "react";

const GrandParent = memo(({ name }) => {
  console.log("GrandParent Rendering");
  return (
    <div>
      GrandParent
      <Parent name={name} />
    </div>
  );
});

export default GrandParent;