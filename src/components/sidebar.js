import React from "react";

export default function () {
  return (
    <div className="border-slate-100 border-solid border   rounded-3xl p-5 inline-flex items-center flex-col fixed">
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
      <button>
        HIRE US
      </button>
    </div>
  );
}
