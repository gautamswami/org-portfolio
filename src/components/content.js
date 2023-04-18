import React from "react";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Services from "./services";
import Skills from "./skills";
import Portfolio from "./portfolio";

export default function Content({ pagedata }) {
  return (
    <div className="ml-96">
      <Home pagedata={pagedata} />
      <About pagedata={pagedata} />
      <Resume pagedata={pagedata} />
      <Services pagedata={pagedata} />
      <Skills pagedata={pagedata} />
      <Portfolio pagedata={pagedata} />
    </div>
  );
}
