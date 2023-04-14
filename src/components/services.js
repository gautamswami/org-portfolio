import React from "react";

export default function Services() {
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <span className="tracking-widest text-xs">SERVICES</span>
      </div>
      <div>
        <p>My Specializations</p>
        <div>
            <div>
                <div>
            <span>Website Design</span>
            <span>I created digital products with unique ideas use Figma & Framer</span>
            </div>
            <div>
                <img />
            </div>
            </div>
            <div>
                24 PROJECTS
            </div>
        </div>
      </div>
    </div>
  );
}
