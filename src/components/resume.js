import React,{useContext} from "react";
import ThemeContext from "./context";

export default function Resume() {
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
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>

        <span className="tracking-widest text-xs">Resume</span>
      </div>
      <div>
        <span className="experience_text text-white">
          Education & <span className={theme.currenttheme}>Experience</span>
        </span>
        <ul className="text-white font-light ">
          <li className="pb-3 list_item">
            <span className="pointer"></span>
            <p className={`text-base mb-5 cursor-pointer`}>2020-Present</p>
            <p className="text-2xl">Framer Designer & Developer</p>
            <p className="text-sm mb-3">Brunodee Agency</p>
            <p className="text-2xl">Framer Designer & Developer</p>
            <p className="text-sm">Brunodee Agency</p>
          </li>
          <li className="pb-3 list_item">
            <span className="pointer"></span>
            <p className="text-base mb-3">2013-2019</p>
            <p className="text-2xl">Webflow Developer & Co-Founder</p>
            <p className="text-sm mb-3">Designflow Studio</p>
            <p className="text-2xl">Web Designer</p>
            <p className="text-sm">Freelance</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
