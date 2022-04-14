import Grade from "./Grade";
import { useState } from "react";
function App() {
  const [star, setStar] = useState([]);
  return (
    <div className="App">
      <Grade
        clicked={star}
        clickGrade={(el) => {
          setStar(Array.from({ length: el + 1 }, (_, i) => i + 1));
        }}
        size={50}
        onClickCheck={true}
      />
    </div>
  );
}

export default App;
