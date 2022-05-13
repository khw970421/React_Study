import React from "react";
import { useRouter } from "next/dist/client/router";

const About = () => {
  const router = useRouter();
  return <div>About {router.query.id}</div>;
};

export default About;
