import React, { useContext } from "react";
import "./content.css";
import ThemeContext from "./context";
export default function Home({ pagedata }) {
  const theme = useContext(ThemeContext);
  const refs = theme.refs;

  return (
    <div className="p-32" ref={refs.homeref}>
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
          {pagedata?.greetline}{" "}
          <span className={theme.currenttheme[0]}>{pagedata?.showname} </span>
          {pagedata?.jotitle}
        </span>
      </div>
      <p className="text-slate-300 font-light text-[1.2rem] w-[60%] mb-4">
        {pagedata?.tagline1}
        <br /> {pagedata?.tagline2}
      </p>
      <div className="relative">
        <div className="App-logo text-white relative left-[80%] border inline-flex items-center place-content-center rounded-full w-[150px] h-[150px]">
          <img src="/images/round-text.png" className="w-[90%]" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 absolute right-[8.4%] top-[41%] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <div className="mt-5 flex">
        {pagedata?.achievements.map((values) => {
          return (
            <>
              <div className="inline-block p-4 mr-3">
                <p
                  className={`${theme.currenttheme[0]} text-7xl font-light mb-3`}
                >
                  {values.years}
                </p>
                <br />
                <span className="text-slate-300 font-light text-base w-[180px] block">
                  {values.title}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
