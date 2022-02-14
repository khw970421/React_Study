import Parent from "./Parent";
import { memo } from "react";

const GrandParent = memo(() => {
  console.log("GrandParent Rendering");
  return (
    <div>
      GrandParent
      <Parent />
    </div>
  );
});

export default GrandParent;