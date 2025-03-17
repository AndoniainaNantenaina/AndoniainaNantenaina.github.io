import { TypeAnimation } from "react-type-animation";
import "./App.css";

// Logo files
import CPlusPlusLogo from "./assets/c.svg";
import FirebaseLogo from "./assets/Primary_Vertical_Lockup_Full_Color_Inverted.svg";
import PythonLogo from "./assets/python-5.svg";
import ReactLogo from "./assets/react-2.svg";
import TailwindcssLogo from "./assets/tailwind-css-2.svg";

import AnimatedText from "./components/animatedText";

function App() {
  return (
    <>
      <div
        id="home-view"
        className="flex flex-col items-center justify-center h-screen bg-black text-white"
      >
        <div id="name" className="flex flex-col">
          <p>Hello! I am</p>
          <p className="text-3xl font-bold">Andoniaina N.</p>
          <TypeAnimation
            sequence={[
              "Digital Product Creator",
              1000,
              "Software Engineer",
              1000,
              "Web & Mobile Developer",
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-sm"
          />

          <button className="bg-white text-black text-sm font-bold mt-3 px-2 w-1/2 rounded-md">
            Show More
          </button>
        </div>
      </div>

      <div
        id="hello-world"
        className="h-screen flex flex-col justify-center items-center"
      >
        <AnimatedText
          className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 bg-clip-text text-transparent"
          text="Hello, World!"
        />
      </div>

      <div
        id="whoami"
        className="h-screen flex flex-col gap-2 justify-center items-center bg-black text-white"
      >
        <AnimatedText
          className="text-3xl font-bold text-center"
          text="Who am I?"
        />
        <span className="w-1/4 h-0.5 bg-white" />
        <p className="text-justify md:w-1/2 text-lg px-4">
          Driven by innovation and collaboration, I thrive in crafting impactful
          software solutions while actively engaging in tech communities. A
          strong team player with a problem-solving mindset, always eager to
          learn and share knowledge.
        </p>
      </div>

      <div
        id="experiences"
        className="h-screen flex flex-col gap-4 justify-center items-center bg-white text-black p-2"
      >
        <AnimatedText
          className="text-3xl font-bold text-center"
          text="Experiences"
        />
        <span className="w-1/4 h-0.5 bg-black" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">Mid-Level Software Engineer</p>
            <p className="text-sm">2024 - Present</p>
            <p className="text-sm">Size+</p>
            <p className="text-justify md:w-1/2 text-lg">
              As a software engineer, I am responsible for developing and
              maintaining automation tools for internal and external clients.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">Python & C++ Developer</p>
            <p className="text-sm">2021 - 2024</p>
            <p className="text-sm">Futurmap Data</p>
            <p className="text-justify md:w-1/2 text-lg">
              I was responsible for developing and maintaining CAD software
              automation tools for internal collaborators.
            </p>
          </div>
        </div>
      </div>

      <div
        id="skills"
        className="flex flex-col gap-2 h-screen justify-center items-center bg-black text-white p-2"
      >
        <AnimatedText
          className="text-3xl font-bold text-center"
          text="What Can I Do ?"
        />
        <span className="w-1/4 h-0.5 bg-white" />
        <div className="bg-white text-black p-2 w-full md:w-1/2 text-center text-lg">
          Digital Product Development
          <ul className="flex flex-row text-xs gap-3 w-full justify-center font-bold">
            <li>IDEATION</li>
            <li>DEVELOPMENT</li>
            <li>MAINTAIN</li>
          </ul>
        </div>
        <div className="bg-white text-black p-2 w-full md:w-1/2 text-center">
          Digital Product Development
        </div>
        <div className="bg-white text-black p-2 w-full md:w-1/2 text-center">
          Digital Product Development
        </div>
      </div>

      <div
        id="used-tools"
        className="h-screen flex flex-col gap-2 justify-center items-center"
      >
        <AnimatedText
          className="text-3xl font-bold"
          text="Main Technical Tools"
        />
        <span className="w-1/4 h-0.5 bg-black" />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mt-3">
          <p className="p-2 bg-slate-800 rounded-md sm:hover:bg-slate-900">
            <img src={ReactLogo} alt="Python" className="size-15" />
          </p>
          <p className="p-2 bg-slate-800 rounded-md sm:hover:bg-slate-900">
            <img src={FirebaseLogo} alt="C++" className="size-15" />
          </p>
          <p className="p-2 bg-slate-800 rounded-md sm:hover:bg-slate-900">
            <img src={PythonLogo} alt="Python" className="size-15" />
          </p>
          <p className="p-2 bg-slate-800 rounded-md sm:hover:bg-slate-900">
            <img src={TailwindcssLogo} alt="TailwindCSS" className="size-15" />
          </p>
          <p className="p-2 bg-slate-800 rounded-md sm:hover:bg-slate-900">
            <img src={CPlusPlusLogo} alt="C++" className="size-15" />
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
