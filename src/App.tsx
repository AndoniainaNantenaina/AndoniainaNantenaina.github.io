import { TypeAnimation } from "react-type-animation";
import "./App.css";

// Logo files
import CPlusPlusLogo from "./assets/c.svg";
import FacebookLogo from "./assets/icons8-facebook-nouveau.svg";
import WhatsAppLogo from "./assets/icons8-whatsapp.svg";
import FirebaseLogo from "./assets/Logomark_Full Color.svg";
import PythonLogo from "./assets/python-5.svg";
import ReactLogo from "./assets/react-2.svg";
import StreamlitLogo from "./assets/streamlit-mark-color.svg";
import TailwindcssLogo from "./assets/tailwind-css-2.svg";

import { motion } from "framer-motion";

import AnimatedText from "./components/animatedText";

function App() {
  return (
    <>
      <div
        id="home-view"
        className="flex flex-col items-center justify-center h-screen bg-black text-white"
      >
        <div id="name" className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            Hello! I am
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl md:text-3xl font-bold font-funnel-display"
          >
            Andoniaina N.
          </motion.p>
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
            className="text-sm uppercase"
          />

          <motion.button
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white text-black font-bold mt-3 px-2 w-1/2 rounded-md"
          >
            Show More
          </motion.button>
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
          className="text-3xl font-bold text-center font-funnel-display"
          text="Who am I?"
        />
        <span className="w-1/4 h-0.5 bg-white" />
        <p className="text-justify md:w-1/2 text-lg px-4 font-funnel-display">
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
          className="text-3xl font-bold text-center font-funnel-display"
          text="Experiences"
        />
        <span className="w-1/4 h-0.5 bg-black" />
        {[
          {
            title: "Mid-Level Software Engineer",
            date: "Nov 2023 - Present",
            company: "Size+",
            description:
              "As a software engineer, I am responsible for developing and maintaining automation tools for internal and external clients.",
          },
          {
            title: "Python & C++ Developer",
            date: "2021 - 2024",
            company: "Futurmap Data",
            description:
              "I was responsible for developing and maintaining CAD software automation tools for internal collaborators.",
          },
        ].map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 * index }}
            viewport={{ once: false, amount: 0.8 }}
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-black text-white p-2 w-full md:w-3/4 text-center text-lg font-funnel-display"
          >
            <p className="font-bold">{experience.title.toUpperCase()}</p>
            <span className="flex flex-row gap-2 justify-center items-center">
              <p className="text-sm">{experience.date}</p>
              {" | "}
              <p className="text-sm">{experience.company}</p>
            </span>
            <p className="text-justify md:w-1/2">{experience.description}</p>
          </motion.div>
        ))}
      </div>

      <div
        id="skills"
        className="flex flex-col gap-2 h-screen justify-center items-center bg-black text-white p-2 font-funnel-display"
      >
        <AnimatedText
          className="text-3xl font-bold text-center"
          text="What Can I Do ?"
        />
        <span className="w-1/4 h-0.5 bg-white" />
        {[
          {
            title: "Digital Product Development",
            keys: ["IDEATION", "DEVELOPMENT", "MAINTAIN"],
            description:
              "I can help you build your digital product from scratch to production.",
          },
          {
            title: "App Development",
            keys: ["WEB", "MOBILE", "DESKTOP"],
            description:
              "I can help you build your app for any platform you want.",
          },
          {
            title: "IT Project Management",
            keys: ["PLANNING", "EXECUTION", "DELIVERY"],
            description:
              "I can help you manage your IT project from start to finish.",
          },
        ].map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 * index }}
            viewport={{ once: false, amount: 0.8 }}
            key={index}
            className="bg-white text-black p-2 w-full md:w-1/2 text-center text-lg"
          >
            <p className="font-bold">{skill.title.toUpperCase()}</p>
            <ul className="flex flex-row text-xs gap-3 w-full justify-center font-bold">
              {skill.keys.map((key, index) => (
                <li key={index}>{key}</li>
              ))}
            </ul>
            <p className="text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      <div
        id="used-tools"
        className="h-screen flex flex-col gap-2 justify-center items-center font-funnel-display"
      >
        <AnimatedText
          className="text-3xl font-bold"
          text="Main Technical Tools"
        />
        <span className="w-1/4 h-0.5 bg-black" />
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 mt-3">
          {[
            { src: ReactLogo, alt: "React" },
            { src: FirebaseLogo, alt: "Firebase" },
            { src: PythonLogo, alt: "Python" },
            { src: TailwindcssLogo, alt: "TailwindCSS" },
            { src: CPlusPlusLogo, alt: "C++" },
            { src: StreamlitLogo, alt: "Streamlit" },
          ].map((logo, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 25 : -25 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="p-2 bg-slate-800 rounded-md sm:hover:bg-slate-900 flex flex-col gap-1 justify-center items-center text-white"
            >
              <img src={logo.src} alt={logo.alt} className="size-15" />
              <p>{logo.alt}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[50svh] flex flex-col gap-2 justify-center items-center bg-slate-800 text-white p-2 font-funnel-display">
        <AnimatedText
          className="text-3xl font-bold text-center"
          text="Let's Work Together"
        />
        <span className="w-1/4 h-0.5 bg-white" />
        <p className="text-center text-lg">
          I am currently available for freelance projects. If you have a project
          that you want to get started, think you need my help with something or
          just fancy saying hey, then get in touch.
        </p>
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white text-black font-bold w-1/2 p-2"
        >
          Contact Me
        </motion.button>
      </div>

      <div
        id="contacts"
        className="h-[30svh] flex flex-col bg-black text-white justify-center items-center font-funnel-display"
      >
        <p className="text-3xl font-bold text-center">Contacts</p>
        <span className="bg-white h-0.5 w-[25svw] my-2" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center"
        >
          <p className="text-lg">Andoniaina N.</p>
          <p className="text-sm">ando01niaina@gmail.com</p>
          <p className="text-sm">Tel: +261 33 30 086 51</p>
        </motion.div>

        <div id="socials-logo" className="flex flex-row gap-2 p-2">
          <a
            href="https://www.facebook.com/Andoniaina01Nomenjanahary"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={FacebookLogo}
              alt="Facebook"
              className="size-8 md:size-10 invert"
            />
          </a>
          <a href="https://wa.me/261325512897" target="_blank" rel="noreferrer">
            <img
              src={WhatsAppLogo}
              alt="WhatsApp"
              className="size-8 md:size-10 invert"
            />
          </a>
        </div>
      </div>

      <div
        id="copyright"
        className="h-[10svh] flex flex-col justify-center items-center"
      >
        <p className="text-center text-sm text-gray-500">
          &copy; 2025 Andoniaina N. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
