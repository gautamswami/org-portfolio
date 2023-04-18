import React, { useContext } from "react";
import ThemeContext from "./context";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function About({ pagedata }) {
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
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <span className="tracking-widest text-xs">About</span>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000">
        <p className="experience_text text-white">
          {pagedata?.aboutheadingtext}{" "}
          <span className={theme.currenttheme[0]}>{pagedata?.aboutheadingbold}</span>
        </p>
        <p className="text-slate-300 font-light text-[1.2rem] w-[60%]">
          {pagedata?.abouttext}
        </p>
      </div>
    </div>
  );
}
