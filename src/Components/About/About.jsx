import style from "./About.module.css";
import Hedding from "../CommonComponent/Hedding";
import EducationAndCertifications from "./EducationAndCertifications";
import Divider from "../CommonComponent/Divider";

// import profilePic from "../../assets/ayan-profile-pic.png";
import profilePic2 from "../../assets/ayan-profile-pic-2.png";
import { useTheme } from "../../ContextStore/ContextStore";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";

const About = () => {
  const { darkMode } = useTheme();

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section
        id="about"
        className="my-4  pt-2 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container-fluid">
          <div className="container">
            <Hedding hds={"About Me"} cursor={"_"} />
            <div>
              <div className="row mt-4 pt-2 align-items-center justify-content-center ">
                <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
                  {/* <div className="d-flex my-3 justify-content-center justify-content-lg-start">
                  <div className={style.profilePicCont}>
                    <img
                      src={profilePic}
                      className={`${style.profilePic} ${
                        !darkMode && style.profileLight
                      }`}
                      alt=""
                    />
                  </div>
                </div> */}
                  <div
                    className={`${style.circle} ${
                      !darkMode && style.circleLgt
                    }`}
                  >
                    <img
                      src={profilePic2}
                      className={style.picProfile}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <header>
                    <h1 className={style.AboutHds}>
                      👋 Hey there! I’m{" "}
                      <span>
                        {" "}
                        <strong style={{ color: "var(--accent-primary)" }}>
                          Ayan
                        </strong>{" "}
                      </span>
                    </h1>
                    <p className="subtitle">
                      A passionate <strong>Frontend Web Developer</strong>{" "}
                      currently pursuing my{" "}
                      <strong>Diploma in Computer Science Engineering</strong>{" "}
                      (5th Semester) .
                    </p>
                  </header>

                  <article className="about-content space-y-4">
                    <p className="d-flex">
                      <span>
                        <FaLaptopCode
                          style={{
                            color: "var(--accent-primary)",
                            fontSize: "20px",
                          }}
                        />
                      </span>{" "}
                      <span className="ms-1 ps-1">
                        I specialize in crafting{" "}
                        <strong>
                          responsive, scalable, and performance-driven user
                          interfaces
                        </strong>{" "}
                        with clean design, smooth interactions, and efficient
                        state management. My development approach focuses on
                        creating engaging frontend experiences while ensuring
                        seamless integration with backend systems.
                      </span>
                    </p>

                    <ul className={style.stackList}>
                      <div className={style.stackListCont}>
                        <li>
                          <strong>Frontend</strong> :{" "}
                          <span>React, Tailwind CSS</span>
                        </li>
                        <li className="mt-lg-2">
                          <strong>Backend</strong> :{" "}
                          <span>Java, REST APIs, MySQL</span>
                        </li>
                      </div>
                      <li>
                        <strong>Tools</strong> : Git & GitHub for version
                        control
                      </li>
                    </ul>

                    <p className="d-flex">
                      <span>
                        <FaLightbulb style={{ color: "yellow" }} />
                      </span>{" "}
                      <span className="ms-1 ps-1">
                        I’m driven by <strong>curiosity and creativity</strong>
                        —transforming complex ideas into clean, functional, and
                        visually appealing web interfaces that users enjoy
                        interacting with.
                      </span>
                    </p>
                    <p className="d-flex">
                      <span>
                        <FaCogs />
                      </span>
                      <span className="ms-1 ps-1">
                        With strong fundamentals in{" "}
                        <strong>
                          JavaScript, React architecture, component-based
                          design, and modern UI/UX principles
                        </strong>
                        , I build{" "}
                        <strong>
                          maintainable, scalable, and user-focused frontend
                          applications
                        </strong>
                        .
                      </span>
                    </p>
                    <p className="d-flex">
                      <span>
                        <FaSeedling style={{ color: "#28A745" }} />
                      </span>{" "}
                      <span className="ms-1 ps-1">
                        I’m constantly learning and refining my skills—exploring
                        new frontend tools, improving performance, contributing
                        to projects, and writing clean, purposeful code.{" "}
                        <span
                          className={`${showMore && "d-none"} ${
                            style.extendContent
                          }`}
                          onClick={() => setShowMore(!showMore)}
                        >
                          {" "}
                          <br />
                          View More
                        </span>
                      </span>
                    </p>
                  </article>
                </div>
                <p
                  className={`px-lg-4 ${style.extraContent} ${
                    showMore ? style.show : style.hide
                  }`}
                >
                  <span>
                    I’m deeply passionate about frontend development and
                    motivated by continuous growth. My goal is to become a{" "}
                    <strong>versatile Frontend Developer</strong> who builds
                    high-quality digital experiences and contributes to
                    innovative products that solve real-world problems and
                    enhance user interaction.{" "}
                    <span
                      className={` ${style.extendContent}`}
                      onClick={() => setShowMore(!showMore)}
                    >
                      View Less
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <EducationAndCertifications />
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};
export default About;
