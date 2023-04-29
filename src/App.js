import "./App.css";
import Content from "./components/content";
import Menu from "./components/menu";
import Sidebar from "./components/sidebar";
import { useState,useRef } from "react";
import ThemeContext from "./components/context";

export const pagedata = {
  showname: "Gautam",
  greetline: "Say Hi from",
  jotitle: "Software Developer",
  tagline1: "I design and code beautifully simple things and I love what I do.",
  tagline2: "Just simple like that!",
  achievements: [
    {
      years: "2+",
      title: "YEARS OF EXPERIENCE",
    },
    {
      years: "6+",
      title: "PROJECTS COMPLETED",
    },
  ],
  aboutheadingtext: "Every great design begin with an even",
  aboutheadingbold: "better story",
  abouttext:
    "Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.",
  resumeheadingtext:"Education &",
  resumeheadingbold:"Experience",
  resume:[
    {
      startyear:"2019",
      endyear:"Present",
      heading:"Computer Science Engineering",
      detail:"Development",
      points:["Softwate Development","DSA","Databases"]
    },
    {
      startyear:"2017",
      endyear:"2018",
      heading:"Senior Secondary",
      detail:"CBSE",
      points:["9CGPA"]
    }
  ],
  serviceheadingtext:"My",
  serviceheadingbold:"Specializations",
  servicecard:[
    {
      heading:'Website Development',
      detail:'I created digital products with unique ideas',
      icon:'',
      subtext:'4 PROJECTS'
    },
    {
      heading:'Application Development',
      detail:'I created mobile application for android and ios',
      icon:'',
      subtext:'1 PROJECT'
    }
  ],
  skillheadingtext:"My",
  skillheadingbold:"Advantages",
  skills:[
    {
      title:'React JS',
      percent:'98%',
      icon:''
    },
    {
      title:'Next JS',
      percent:'95%',
      icon:''
    }, {
      title:'React Native',
      percent:'95%',
      icon:''
    },
    {
      title:'Node Js',
      percent:'95%',
      icon:''
    },
    {
      title:'MongoDB',
      percent:'95%',
      icon:''
    },
    {
      title:'PHP',
      percent:'95%',
      icon:''
    },
    {
      title:'Java',
      percent:'92%',
      icon:''
    }
  ],
  portfolioheadingtext:"Featured",
  portfolioheadingbold:"Projects",
  portfolios:[
    {
      link:"https://carrentgautam.000webhostapp.com/login.php",
      image:"",
      title:"CAR RENTAL WEBSITE"
    }
  ]
  };

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
  ];
  const homeref = useRef()
  const aboutref = useRef()
  const resumeref = useRef()
  const serviceref = useRef()
  const skillref = useRef()
  const portfolioref = useRef()

  let refs = {
    homeref:homeref,
    aboutref:aboutref,
    resumeref:resumeref,
    serviceref:serviceref,
    skillref:skillref,
    portfolioref:portfolioref

  }
  const [currenttheme, setTheme] = useState([textColors[0], bgColors[0]]);
  const [currentVideo, setVideo] = useState("");
  const handleVideo = (data) => {
    setVideo(data);
  };
  return (
    <div className="Application">
      <video className="body-overlay" autoPlay muted loop src={currentVideo} />
      <ThemeContext.Provider
        value={{ currenttheme, setTheme, textColors, bgColors ,refs}}
      >
        <Sidebar handleVideo={handleVideo} pagedata={pagedata}/>
        <Content pagedata={pagedata} />
        <Menu />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
