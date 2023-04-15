import React,{useContext} from "react";
import ThemeContext from "./context";

export default function About() {
  const theme = useContext(ThemeContext)
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
      <div>
        <span>Every great design begin with an even <span className={theme.currenttheme}>better story</span></span>
        <span>
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </span>
      </div>
    </div>
  );
}
