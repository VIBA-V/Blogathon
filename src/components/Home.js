import React from "react";
import Theme from "./Theme";
import Win from "./Win";
import Rules from "./Rules";
import Last from "./Last";
import About from "./Shiva/About";
import Index1 from "./Shiva/Index1";
import Index from "./Shiva/Index";

export default function Home() {
  return (
    <div>
      <Index1 />
      <About />
      <Theme />
      <Rules />
      <Win />
      <Last />
      <Index />
    </div>
  );
}
