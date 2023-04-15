import "./App.css";
import Content from "./components/content";
import Menu from "./components/menu";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import ThemeContext from "./components/context";

function App() {
  const textColors = [
    "text-green-500",
    "text-sky-500",
    "text-rose-500",
    "text-yellow-500",
    "text-pink-500",
  ];
  const bgColors = [
     "bg-green-500",
    "bg-sky-500",
    "bg-rose-500",
    "bg-yellow-500",
    "bg-pink-500",
  ]
  const [currenttheme, setTheme] = useState([textColors[0],bgColors[0]]);

  return (
    <div className="Application">
      <ThemeContext.Provider value={{ currenttheme, setTheme, textColors,bgColors }}>
        <Sidebar />
        <Content />
        <Menu />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
