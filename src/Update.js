import React, { useState } from "react";
import { pagedata } from "./App";
const Update = () => {
  const [valid, setValid] = useState();
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const handleValid = () => {
    if (pass === "GET" && pass2 === "GET2") {
      setValid(true);
    } else {
      window.alert("UNAUTHORISED");
    }
  };
  return (
    <div className="grid place-content-center min-h-[100vh] p-4">
      {valid ? (
        <form className="flex flex-col gap-4 w-[100%]">
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.greetline}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.showname}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.jotitle}
          />
          <textarea
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.tagline1}
          />
          <textarea
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.tagline2}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.aboutheadingtext}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.aboutheadingbold}
          />
          <textarea
            className="outline min-w-[280px] "
            placeholder="name"
            value={pagedata?.abouttext}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.resumeheadingtext}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.resumeheadingbold}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.serviceheadingtext}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.serviceheadingbold}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.skillheadingtext}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.skillheadingbold}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.portfolioheadingtext}
          />
          <input
            className="outline min-w-[280px]"
            placeholder="name"
            value={pagedata?.portfolioheadingbold}
          />
          {pagedata?.achievements?.map((data, index) => {
            return (
              <>
                {index + 1}
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.title}
                  value={data.title}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.years}
                  value={data.years}
                />
              </>
            );
          })}
          {pagedata?.resume?.map((data, index) => {
            return (
              <>
                {index + 1}
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.startyear}
                  value={data.startyear}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.endyear}
                  value={data.endyear}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.heading}
                  value={data.heading}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.detail}
                  value={data.detail}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.points}
                  value={data.points}
                />
              </>
            );
          })}
          {pagedata?.servicecard?.map((data, index) => {
            return (
              <>
                {index + 1}
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.heading}
                  value={data.heading}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.detail}
                  value={data.detail}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.subtext}
                  value={data.subtext}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.icon}
                  value={data.icon}
                />
              </>
            );
          })}
          {pagedata?.skills?.map((data, index) => {
            return (
              <>
                {index + 1}
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.title}
                  value={data.title}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.percent}
                  value={data.percent}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.icon}
                  value={data.icon}
                />
              </>
            );
          })}
          {pagedata?.portfolios?.map((data, index) => {
            return (
              <>
                {index + 1}
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.link}
                  value={data.link}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.image}
                  value={data.image}
                />
                <input
                  className="outline min-w-[280px]"
                  placeholder={data.title}
                  value={data.title}
                />
              </>
            );
          })}
          <button className="border bg-zinc-950 text-white p-2 ">SUBMIT</button>
        </form>
      ) : (
        <>
          <input
            className="outline min-w-[280px] mb-8"
            placeholder="Pass 1"
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            className="outline min-w-[280px] mb-8 "
            placeholder="Pass 2"
            onChange={(e) => setPass2(e.target.value)}
          />
          <button
            className="border bg-zinc-950 text-white p-2 "
            onClick={() => handleValid()}
          >
            CHECK
          </button>
        </>
      )}
    </div>
  );
};

export default Update;
