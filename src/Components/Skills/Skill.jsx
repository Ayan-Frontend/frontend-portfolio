import style from "./Skill.module.css";
import Hedding from "../CommonComponent/Hedding";
import Divider from "../CommonComponent/Divider";
// import { useState } from "react";
import { useTheme } from "../../ContextStore/ContextStore";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaJava,
  FaGitSquare,
  FaGithub,
  FaComments,
  FaLightbulb,
  FaRegClock,
  FaLaptopCode,
  FaServer,
  FaCode,
  FaUserFriends,
} from "react-icons/fa";

import { SiRedux, SiTailwindcss, SiIntellijidea } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  MdDevices,
  MdApi,
  MdPsychology,
  MdAddCircleOutline,
} from "react-icons/md";
import { useState } from "react";

const Skills = () => {
  const { darkMode } = useTheme();

  const [hoveredItem, setHoveredItem] = useState({
    skillId: null,
    index: null,
  });

  const skills = [
    {
      id: 1,
      hedding: "Frontend Tech",
      hdsIcon: <FaLaptopCode />,
      stackList: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Tailwind",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Design",
      ],
      icons: [
        <FaHtml5 style={{ color: "#E44D26", fontSize: "21px" }} />,
        <FaCss3Alt style={{ color: "#1572B6", fontSize: "21px" }} />,
        <FaJsSquare style={{ color: "#F7DF1E", fontSize: "21px" }} />,
        <FaReact style={{ color: "#61DAFB", fontSize: "21px" }} />,
        <SiRedux style={{ color: "#764ABC", fontSize: "21px" }} />,
        <SiTailwindcss style={{ color: "#38BDF8", fontSize: "21px" }} />,
        <FaBootstrap style={{ color: "#7952B3", fontSize: "21px" }} />,
        <MdDevices style={{ color: "#00C4CC", fontSize: "21px" }} />,
        <FaFigma style={{ color: "#F24E1E", fontSize: "21px" }} />,
      ],
      description: [
        "Defines web structure using semantic tags, media support, and accessibility features, forming the backbone of responsive and modern website development.",
        "Styles web pages with colors, layouts, transitions, and animations, ensuring responsive, visually appealing, and consistent designs across all devices.",
        "Adds interactivity and logic to websites, enabling dynamic content, event handling, and smooth user experiences through modern web frameworks.",
        "JavaScript library for building fast, component-based UIs with virtual DOM for efficient updates and reusable interface elements.",
        "Simplifies React state management with minimal boilerplate, predictable data flow, and enhanced debugging for large-scale web applications.",
        "Utility-first CSS framework enabling rapid UI development, easy customization, and responsive layouts with minimal custom styling effort.",
        "Front-end framework offering responsive grids, pre-built components, and utilities to quickly design clean, consistent, and mobile-friendly websites.",
        "Ensures websites adapt fluidly to all screen sizes using flexible grids, media queries, and mobile-first design principles.",
        "Focuses on usability, accessibility, and aesthetics to create engaging, intuitive, and visually balanced user experiences across interfaces.",
      ],
    },
    {
      id: 2,
      hedding: "Backend Exposure",
      hdsIcon: <FaServer />,
      stackList: ["Java", "REST APIs", "MySQL", "PostgreSQL"],
      icons: [
        <FaJava style={{ color: "#f89820", fontSize: "21px" }} />,

        <MdApi style={{ color: "#FF6F00", fontSize: "21px" }} />,
        <GrMysql style={{ color: "#4479A1", fontSize: "21px" }} />,
        <BiLogoPostgresql
          style={{
            color: "#31648C",
            fontSize: "25px",
          }}
        />,
      ],
      description: [
        "Object-oriented language used for secure, scalable, and platform-independent backend and enterprise application development.",
        "Connects software systems for seamless data exchange, automation, and enhanced functionality across multiple applications.",
        "Hands-on expertise in MySQL schema design, indexing strategies, integrity constraints, query optimization, administrative tools, and backend system connectivity.",
        "Experience with normalization, indexing, constraints, performance optimization, pgAdmin, and PostgreSQL integration with backend applications systems projects.",
      ],
    },
    {
      id: 3,
      hedding: "Tools",
      hdsIcon: <FaCode />,
      stackList: ["Git", "Github", "VSCode", "IntelliJ"],
      icons: [
        <FaGitSquare style={{ color: "#E84D31", fontSize: "21px" }} />,
        <FaGithub style={{ fontSize: "21px" }} />,
        <VscVscodeInsiders style={{ color: "#419de7", fontSize: "21px" }} />,
        <SiIntellijidea style={{ fontSize: "21px" }} />,
      ],
      description: [
        "Adds interactivity and logic to websites, enabling dynamic content, event handling, and smooth user experiences through modern web frameworks.",
        "Object-oriented language used for secure, scalable, and platform-independent backend and enterprise application development.",
        "Simple, versatile language learned for logic building, OOP, and modules to enhance programming adaptability and versatility.",
        "Relational database system managing structured data efficiently with secure storage, retrieval, and reliable query performance.",
      ],
      additional: {
        title: "Additional Tech",
        hdsIcon: <MdAddCircleOutline />,
        logo: [<FaPython style={{ color: "#4683bb" }} />],
        stack: ["Python"],
        desc: ["python desc"],
      },
    },
    {
      id: 4,
      hedding: "Soft Skills",
      hdsIcon: <FaUserFriends />,
      stackList: [
        "Communication",
        "Adaptability",
        "Time Management",
        "Creativity",
      ],
      icons: [
        <FaComments style={{ color: "#0A84FF", fontSize: "21px" }} />,
        <MdPsychology style={{ color: "#FFB100", fontSize: "21px" }} />,
        <FaRegClock style={{ color: "#34C759", fontSize: "21px" }} />,
        <FaLightbulb style={{ color: "#FFD60A", fontSize: "21px" }} />,
      ],
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="container-fluid my-4  pt-2 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container">
          <Hedding hds={"Skills"} cursor={"»"} />
          <div className="my-3 pt-3">
            <h4 className={style.slog}>
              Turning ideas into{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                interactive
              </span>
              ,{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                efficient
              </span>
              , and{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                scalable
              </span>{" "}
              digital experiences
            </h4>
            <article className={style.skillAboutMob}>
              I build frontend-driven web solutions with clean design, high
              performance, and maintainable code. I craft responsive,
              user-friendly interfaces with smooth interactions, combining
              precision, learning, and problem-solving. Every project reflects
              my passion for quality, usability, and continuous improvement
            </article>
            <article className={style.skillAboutNoneMob}>
              I specialize in building modern, frontend-driven web applications
              with a strong focus on clean UI design, performance optimization,
              and maintainable component architecture. On the frontend, I craft
              responsive, accessible, and user-friendly interfaces that deliver
              seamless experiences across all devices and screen sizes. I
              emphasize efficient state management, smooth interactions, and
              reusable components to ensure long-term scalability. Every
              technology I use reflects my dedication to learning, precision,
              and problem-solving—from dynamic React components to visually
              engaging, interactive user interfaces
            </article>
            <h4 className={style.slog}>
              I don’t just build interfaces I create frontend experiences that{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                look great
              </span>
              <span>,</span>{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                feel smooth
              </span>
              <span>, and</span>{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--accent-secondary)" }}
              >
                perform effortlessly
              </span>
            </h4>
          </div>
          <h1
            className={`my-5 pb-lg-1 ${style.technicalHds}`}
            style={{
              textAlign: "center",
              fontFamily: "poppins, Roboto, sans-serif ",
            }}
          >
            Technical{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: "900" }}>
              Skills
            </span>
          </h1>
          <div className="row justify-content-sm-evenly">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="mt-1 mb-4 mt-sm-0 my-lg-0 col-12 col-md-5 col-lg-3"
              >
                <h3
                  className={`d-flex align-items-center ${style.techSkillsHds}`}
                >
                  <span
                    style={{
                      color: "var(--accent-primary)",
                      margin: "0 10px 0 0",
                      fontSize: "24px",
                    }}
                  >
                    {skill.hdsIcon}
                  </span>
                  {skill.hedding}
                </h3>
                <ul className="mt-3 pt-1 list-unstyled">
                  {skill.stackList.map((list, idx) => (
                    <div
                      key={`${skill.id}-${list}-${idx}`}
                      style={{ position: "relative" }}
                    >
                      <div className={style.skillNameCont}>
                        <li
                          className={`${style.stackSkills} ${
                            skill.status?.[idx] !== true &&
                            style.stackSkillNoDetailsCursor
                          }`}
                          style={{ color: darkMode ? "#f5f5f5" : "#141414" }}
                          onMouseEnter={() => {
                            setHoveredItem({ skillId: skill.id, index: idx });
                          }}
                          onMouseLeave={() => {
                            setHoveredItem({ skillId: null, index: null });
                          }}
                        >
                          <span
                            className={`me-3 ${
                              list === "PostgreSQL" ? style.postgresql : ""
                            }`}
                          >
                            {skill.icons[idx]}
                          </span>
                          {list}
                          {/* {console.log(list)} */}
                          {skill.id !== 4 && (
                            <IoMdArrowDropdown
                              className={`ms-2 ${style.dropDown} ${
                                hoveredItem.skillId === skill.id &&
                                hoveredItem.index === idx &&
                                skill.id !== 4 &&
                                style.arrowDirection
                              }`}
                            />
                          )}
                        </li>
                      </div>
                      {hoveredItem.skillId === skill.id &&
                        hoveredItem.index === idx &&
                        skill.description?.[idx] && (
                          <div
                            style={{
                              left: skill.id === 1 && idx === 6 && "45%",
                            }}
                            className={`${style.skillDetails} ${
                              darkMode && style.skillDetailsDark
                            } ${
                              skill.id === 1 &&
                              (idx === 6 || idx === 7 || idx === 8) &&
                              style.skillDetailShift
                            }`}
                          >
                            <h6
                              style={{
                                borderBottom: !darkMode
                                  ? "1.5px solid #272727ff"
                                  : "1.5px solid #e1e1e1ff",
                                paddingBottom: "7px",
                              }}
                            >
                              <span className="me-2 pe-1">
                                {skill.icons?.[idx]}
                              </span>
                              <span
                                className={`${style.overlayHds} ${
                                  darkMode
                                    ? style.overlayHdsDark
                                    : style.overlayHdsLight
                                }`}
                              >
                                {list}
                              </span>
                            </h6>
                            <p className="m-0 pt-1 fw-medium">
                              {skill.description?.[idx]}
                            </p>
                          </div>
                        )}
                    </div>
                  ))}
                </ul>
                {skill.id === 3 && skill.additional?.title && (
                  <div className="mt-4 pt-3">
                    <div className="d-flex align-items-center">
                      <span
                        style={{
                          fontSize: "27px",
                          color: "var(--accent-primary)",
                        }}
                        className="me-2 mb-1"
                      >
                        {skill.additional.hdsIcon}
                      </span>

                      <h4
                        className="m-0"
                        style={{ fontSize: "25px", fontWeight: "600" }}
                      >
                        {skill.additional.title}
                      </h4>
                    </div>

                    <div className="mt-2">
                      <div className="d-flex align-items-center">
                        <p
                          className="m-0 fw-medium"
                          style={{ fontSize: "17px" }}
                        >
                          <span className="me-3" style={{ fontSize: "21px" }}>
                            {skill.additional.logo?.[0]}
                          </span>
                          <span>{skill.additional.stack?.[0]}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-3 mt-2 pt-sm-2 pb-4 pb-sm-0">
            <h3 className="text-center mt-3 mt-sm-4 px-md-4 fs-4">
              Building{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                extensible
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                user-focused
              </strong>{" "}
              Frontend applications <br /> using{" "}
              <strong
                style={{ color: "var(--accent-primary)", lineHeight: "35px" }}
              >
                modern technologies
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                clean architecture
              </strong>
              .
            </h3>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Skills;
