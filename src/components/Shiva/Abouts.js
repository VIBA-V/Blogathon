import React from "react";
import Services from "./Services";
import Startup from "./Startup";
import Viba from "./Viba";
import Video from "./Video";
import Team from "./Team";

export default function Abouts() {
  return (
    <div>
      <Video />
      <Viba />
      <Services />
      <Team />
      <Startup />
    </div>
  );
}
