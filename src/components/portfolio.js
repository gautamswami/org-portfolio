import React, { useContext } from "react";
import ThemeContext from "./context";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Portfolio({ pagedata }) {
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
            d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>

        <span className="tracking-widest text-xs">PORTFOLIO</span>
      </div>
      <div>
        <p className="experience_text text-white">
          {pagedata?.portfolioheadingtext}{" "}
          <span className={theme.currenttheme[0]}>
            {pagedata?.portfolioheadingbold}
          </span>
        </p>
      </div>
      {pagedata?.portfolios?.map((values) => {
        return (
          <div data-aos="fade-up" data-aos-duration="1600">
            {values?.image ? (
              <img src={values.image} />
            ) : (
              <embed
                src={values?.link}
                style={{
                  width: "100%",
                  height: " 480px",
                  borderRadius: "14px",
                }}
              />
            )}
            <a href={values.link} target="blank" className="text-white font-bold text-2xl underline">
              {values?.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}
