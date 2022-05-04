import { memo } from "react";

const Button = memo(({ clickEvent }) => {
  return <button onClick={clickEvent}>button</button>;
});

export default Button;