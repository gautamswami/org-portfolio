import React,{useContext} from "react";
import "./content.css";
import ThemeContext from "./context";
export default function Home() {
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
      <div>
        <span className="about_text text-white">
          Say Hi from <span className={theme.currenttheme}>Drake</span>, Webflow
          Designer and Developer
        </span>
      </div>
      <span>
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </span>
      <div>MY PROJECTS</div>
      <div>
        <div>
          <span className={theme.currenttheme}>10+</span>
          <span>YEARS OF EXPERIENCE</span>
        </div>
        <div>
          <span className={theme.currenttheme}>130+</span>
          <span>PROJECTS COMPLETED ON 15 COUNTRIES</span>
        </div>
      </div>
    </div>
  );
}
