import style from "./Home.module.css";

import { useTheme } from "../../ContextStore/ContextStore";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import Divider from "../CommonComponent/Divider";

import logo from "../../assets/ayan-full-stack-web-developer-illustration.webp";

const Home = () => {
  const { darkMode } = useTheme();

  const socials = [
    {
      id: 1,
      icon: <FaGithub />,
      name: "GitHub",
      handleClick: () =>
        window.open(
          "https://github.com/Ayan-Frontend?tab=repositories",
          "_blank"
        ),
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      name: "LinkedIn",
      handleClick: () =>
        window.open("https://www.linkedin.com/in/ayan-alam-dev", "_blank"),
    },
    {
      id: 3,
      icon: <MdEmail />,
      name: "Email",
      handleClick: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=ayanalamdev@gmail.com",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <section id="home" className="mb-2 mb-sm-5 mb-lg-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-7">
                <div className={style.homeContentContainer}>
                  <h1 className={style.homeContHds1}>Hi 👋, I’m Ayan Alam</h1>
                  <h2 className={style.homeContHds2}>
                    Frontend Developer (React | Redux) <br />{" "}
                    <span
                      className="d-block mt-1"
                      style={{ color: darkMode ? "#fff" : "#000" }}
                    >
                      <Typewriter
                        options={{
                          strings: [
                            `<span style="color:var(--accent-secondary)">Performance-Driven UI</span>`,
                            `<span style="color:var(--accent-secondary)">Java Backend Exposure</span>`,
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 80, // typing speed
                          deleteSpeed: 55, // backspace speed
                          pauseFor: 2500, // pause before deleting
                        }}
                      />
                    </span>
                  </h2>
                  <p className={style.homeContPara}>
                    A Frontend Developer passionate about building scalable,
                    responsive, and high-performance web applications using
                    <FaReact
                      className={`${
                        darkMode ? style.reactIcon : style.reactIconLght
                      }`}
                    />
                    React and Redux. I combine clean UI design with efficient
                    state management and backend exposure in
                    <RiJavaLine className={style.javaIcon} />
                    Java for seamless API integration.
                  </p>
                  <div className={style.buttonCont}>
                    <a
                      href="#projects"
                      className={`${style.projectsBtn} ${
                        !darkMode && style.btnsLight
                      }`}
                    >
                      View Projects
                    </a>
                    <button
                      className={`${style.resumeBtn} ${
                        !darkMode && style.btnsLight
                      }`}
                    >
                      Download Resume
                    </button>
                  </div>
                  <div className={style.socialsCont}>
                    {socials.map((social) => (
                      <a
                        key={social.id}
                        className={style.socials}
                        onClick={social.handleClick}
                      >
                        <span className="d-inline-block me-1">
                          {social.icon}
                        </span>{" "}
                        <span className={style.socialsName}>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center col-12 col-lg-5 px-lg-0">
                <div className={style.homeIllustrationCont}>
                  <img
                    src={logo}
                    className={`${style.homeIllustration} ${
                      !darkMode && style.homelightIllustration
                    }`}
                    alt="Ayan – Full Stack Web Developer working on code illustration for personal portfolio"
                    title="Ayan – Front-End Web Developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};
export default Home;
