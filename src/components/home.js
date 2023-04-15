import React, { useContext } from "react";
import "./content.css";
import ThemeContext from "./context";
export default function Home() {
  const theme = useContext(ThemeContext);
  return (
    <div className="p-32">
      <div className="border-solid mb-8 rounded-2xl border-white border inline-flex items-center text-white p-1 w-32 place-content-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <span className="tracking-widest text-xs">INTRODUCE</span>
      </div>
      <div className="mb-5">
        <span className="about_text text-white">
          Say Hi from <span className={theme.currenttheme[0]}>Drake</span>, Webflow
          Designer and Developer
        </span>
      </div>
      <p className="text-slate-300 font-light text-[1.2rem] w-[60%] mb-4">
        I design and code beautifully simple things and i love what i do.
        <br /> Just simple like that!
      </p>
      <div className="App-logo text-white relative left-[80%] border inline-flex items-center place-content-center rounded-full w-[150px] h-[150px]">
        <img src="/images/round-text.png" className="w-[90%]" />
      </div>
      <div className="mt-5">
        <div className="inline-block p-4 mr-3">
          <p className={`${theme.currenttheme[0]} text-7xl font-light mb-3`}>
            10+
          </p>
          <br />
          <span className="text-slate-300 font-light text-base">
            YEARS OF
            <br /> EXPERIENCE
          </span>
        </div>
        <div className="inline-block p-4">
          <p className={`${theme.currenttheme[0]} text-7xl font-light mb-3`}>
            130+
          </p>
          <br />
          <span className="text-slate-300 font-light text-base">
            PROJECTS COMPLETED
            <br /> ON 15 COUNTRIES
          </span>
        </div>
      </div>
    </div>
  );
}
