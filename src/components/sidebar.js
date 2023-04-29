import React, { useContext, useState } from "react";
import ThemeContext from "./context";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function ({ handleVideo, pagedata }) {
  const theme = useContext(ThemeContext);
  const textColors = theme.textColors;
  const bgColors = theme.bgColors;
  const [sidebar, setSidebar] = useState();
  const data = ["1", "2", "3", "4", "5"];
  const videdata = [
    { name: "Earth Lines Sphere", video: "/videos/video2.mp4" },
    {
      name: "3D Abstract Ball",
      video: "/videos/video5.mp4",
    },
  ];
  return (
    <>
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
          src="/images/logo.png"
          className="w-52 object-cover h-36 rounded-2xl mb-4"
        />
        <div className="text-white mb-4 text-center">
          <p className="text-3xl font-semibold mb-4 mt-2">Software Product Studio</p>
          <p className="text-xl font-semibold mb-6 mt-2">DESIGN AND DEVELOPMENT</p>
          <p className="text-sm font-semibold mb-4 ">softwareproductstudio@gmail.com</p>
        </div>
        
          <ul className="flex gap-3 mb-5">
            <a href="https://linkedin.com/in/gautamswami" className="border rounded-[5px] w-10 h-10 flex items-center justify-center"><img src='/images/linkedin.svg' /></a>
            <a href="https://github.com/gautamswami" className="border rounded-[5px] w-10 h-10 flex items-center justify-center"><img src='/images/github.svg' /></a>
          </ul>
        <button
          className={` rounded-[40px] ${theme.currenttheme[1]}  w-[100%] h-[50px]`}
        >
          HIRE US
        </button>
      </div>
      {sidebar && (
        <div className="z-[1] h-[100%] fixed right-0 w-[100%] ">
          <div
            className="bg-[#262626c7] w-[100%] h-[100%] z-[-1] absolute"
            onClick={() => setSidebar(!sidebar)}
          ></div>
          <div
            className=" z-10 bg-black text-white  right-0 absolute p-6 w-[50%] h-[100%] ease-in-out  pt-[8%] pl-[4%]"
            data-aos="fade-left"
          >
            <button
              className="absolute top-10 right-10"
              onClick={() => setSidebar(!sidebar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mb-[8%]">
              <h2 className="text-3xl font-light">Configuration</h2>
            </div>
            <p className="mb-4">COLOURS</p>
            <ul className="cursor-pointer flex gap-3">
              {data?.map((values, index) => {
                return (
                  <li
                    onClick={() =>
                      theme.setTheme([textColors[index], bgColors[index]])
                    }
                    className={`w-fit h-fit relative ${
                      textColors[index] == theme.currenttheme[0]
                        ? "border rounded-[50%] p-1"
                        : "p-1"
                    } `}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <span
                      className={`rounded-[50%] w-6 h-6 block ${bgColors[index]}`}
                    ></span>
                    {textColors[index] == theme.currenttheme[0] && (
                      <span
                        className="w-1 h-1 bg-white block absolute  top-[45%] left-[44%] rounded"
                        data-aos="zoom-in"
                      ></span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mb-4 mt-12">THREE DIMENSIONAL SHAPES</p>
            <div>
              {videdata.map((data) => {
                return (
                  <button
                    className="m-4  ease-in-out focus:line-through"
                    onClick={() => handleVideo(data.video)}
                  >
                    {data.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
