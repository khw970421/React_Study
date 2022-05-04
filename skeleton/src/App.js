import "./App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

import WithoutSkeleton from "./components/WithoutSkeleton";
import WithSkeleton from "./components/WithSkeleton";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    setIsLoading(true);

    await axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setData(res.data.data);
    });

    setIsLoading(false);
  };

  return (
    <div className="App">
      <ul className="contentWrapper">
        <WithoutSkeleton isLoading={isLoading} data={data} />
      </ul>
      <ul className="contentWrapper">
        <WithSkeleton isLoading={isLoading} data={data} />
      </ul>
    </div>
  );
}

export default App;
