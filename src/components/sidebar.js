import React, { useContext, useState } from "react";
import ThemeContext from "./context";
export default function () {
  const theme = useContext(ThemeContext);
  const textColors = theme.textColors
  const bgColors = theme.bgColors
  const [sidebar, setSidebar] = useState();
  return (
    <div className="border-slate-100 border-solid border z-10 rounded-3xl p-5 inline-flex items-center flex-col fixed translate-y-[-50%] top-[50%] left-4  ">
      <button
        onClick={() => setSidebar(!sidebar)}
        className="absolute top-[-4px] left-[-4px] bg-gray-800 p-2 rounded" 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 App-logo text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <img
        src="/images/sidebarimage.jpg"
        className="w-52 object-cover h-36 rounded-2xl"
      />
      <div className="flex items-center gap-3 text-white">
        <span className="text-2xl font-semibold">ORGANI</span>
        <span>DESIGN AND DEVELOPMENT</span>
      </div>
      <div>
        <h2>email@org.com</h2>
        <h2>GET YOUR PRODUCT CREATED TODAY</h2>
      </div>
      <div>
        <ul>
          <li>SOCIAL</li>
          <li>SOCIAL</li>
          <li>SOCIAL</li>
          <li>SOCIAL</li>
        </ul>
      </div>
      <button className={` rounded-[40px] ${theme.currenttheme[1]}  w-[100%] h-[50px]`}>HIRE US</button>
      {sidebar && (
        <div className="fixed top-0 right-0 border z-10 bg-black text-white">
          <ul className="cursor-pointer">
            <li onClick={() => theme.setTheme([textColors[2],bgColors[2]])}>RED</li>
            <li onClick={() => theme.setTheme([textColors[0],bgColors[0]])}>GREEN</li>
            <li onClick={() => theme.setTheme([textColors[1],bgColors[1]])}>SKY</li>
            <li onClick={() => theme.setTheme([textColors[3],bgColors[3]])}>YELLOW</li>
            <li onClick={() => theme.setTheme([textColors[4],bgColors[4]])}>PINK</li>{" "}
          </ul>
        </div>
      )}
    </div>
  );
}
