import React,{useContext} from "react";
import { FaReact } from 'react-icons/fa'
import ThemeContext from "./context";
export default function Skills() {
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
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>

        <span className="tracking-widest text-xs">MY SKILLS</span>
      </div>
      <div>
        <p className="experience_text text-white">My <span className={theme.currenttheme[0]}>Advantages</span></p>
        <div className="text-center inline-block">
            <div className=" text-white  inline-flex  items-center flex-col rounded-[84px] border-2 border-gray-500 p-9 gap-4 ">
            <FaReact style={{display:"inline", fontSize:'5rem'}}/>
                <span className={`text-4xl ${theme.currenttheme[0]}`}>92%</span>
            </div>
            <p>Figma</p>
        </div>
      
        
      </div>
    </div>
  );
}
