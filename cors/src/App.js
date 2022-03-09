import axios from "axios";
import { useEffect } from "react";

function App() {
  // cors 오류 해결코드
  useEffect(async () => {
    const res = await axios.get(
      "/api" + "/trafficCard.rd?apiSrvCd=0049&pageNo=2&numOfRow=1"
    );
    console.log(res);
  }, []);
  useEffect(() => {
    fetch("/api/trafficCard.rd?apiSrvCd=0049&pageNo=2&numOfRow=1")
      .then((res) => res.json())
      .then((r) => console.log(r));
  }, []);
  return <div className="App"></div>;
}

export default App;
