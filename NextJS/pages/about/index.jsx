import React from "react";
import { useRouter } from "next/dist/client/router";

const Index = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
    >
      첫화면으로 가기
    </div>
  );
};

export default Index;
