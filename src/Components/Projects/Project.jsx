import style from "./Project.module.css";
import { useTheme } from "../../ContextStore/ContextStore";

import portfolioImgLgt from "../../assets/project-portfolio-lightTheme.png";
import portfolioImgDrk from "../../assets/project-portfolio-darkTheme.png";
import myntraImg from "../../assets/myntra-project.png";

import Hedding from "../CommonComponent/Hedding";
import Divider from "../CommonComponent/Divider";

import { FaGithub } from "react-icons/fa";

const Project = () => {
  const { darkMode } = useTheme();

  const portfolio = () => {
    window.open(
      "https://github.com/Ayan-Frontend/frontend-portfolio",
      "_Blank"
    );
  };
  const myntra = () => {
    window.open("https://github.com/Ayan-webDEV/myntra-replica", "_Blank");
  };

  const projects = [
    {
      id: 1,
      image: darkMode ? portfolioImgLgt : portfolioImgDrk,
      title: "Personal Portfolio",
      description:
        "Interactive React portfolio highlighting my work, abilities, and proficiency with refined aesthetics and seamless performance.",
      stacks: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React.js",
        "Git & Github",
        "Vercel",
      ],
      link: portfolio,
      site: () => window.location.reload(),
    },
    {
      id: 2,
      image: myntraImg,
      title: "Myntra Replica",
      description:
        "Modern React Myntra clone highlighting product catalog, adaptive UI, and seamless cart experience with polished design.",
      stacks: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React.js",
        "Git & Github",
        "Vercel",
      ],
      link: myntra,
      site: () => window.open("https://myntra-replica-am.vercel.app", "_Blank"),
    },
    {
      id: 3,
      image: null,
      title: "Resume Skill Matcher",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      stacks: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React.js",
        "Git & Github",
        "Vercel",
      ],
    },
    {
      id: 4,
      image: null,
      title: "Smart Expense Visualizer",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      stacks: [],
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="container-fluid my-4 pt-3 my-sm-5 mt-lg-4 mb-lg-5 pt-lg-4"
      >
        <div className="container">
          <Hedding hds={"Projects"} cursor={"⌘"} />

          <div className="mt-5 mt-lg-4">
            <h4 className={`${style.projectHdsCommon} ${style.projectHdsMob}`}>
              ⚡ Turning Ideas <br />
              <span style={{ color: "var(--text-color)" }}>
                into
              </span> <br /> Interfaces
            </h4>
            <h4
              className={`${style.projectHdsCommon} ${style.projectHdsTblet}`}
            >
              ⚡ Turning Creative Ideas <br />
              <span style={{ color: "var(--text-color)" }}>
                into
              </span> <br /> Interfaces
            </h4>
            <h4 className={`${style.projectHdsCommon} ${style.projectHds}`}>
              ⚡ Turning Ideas{" "}
              <span style={{ color: "var(--text-color)" }}>into</span>{" "}
              Interfaces
            </h4>
            <article
              className={`${style.projectDetailsMob} ${style.projectDetailsCommon}`}
            >
              I turn ideas into real-world user experiences through clean and
              responsive UI. I build modern frontends using{" "}
              <span className="fw-semibold">React + Tailwind CSS</span>,
              focusing on performance and reusable components. I also have
              backend exposure in <span className="fw-semibold">Java</span> and
              work with <span className="fw-semibold">APIs & MySQL</span>. I’m
              constantly learning and improving to grow as a Frontend Developer.
            </article>
            <article
              className={`${style.projectDetailsTblet} ${style.projectDetailsCommon}`}
            >
              Each project I build reflects my passion for transforming ideas
              into real-world user experiences. As a 5th-semester Diploma CSE
              student, I focus on clean UI design and modern frontend
              development. I build responsive interfaces using{" "}
              <span className="fw-semibold">React + Tailwind CSS</span>, with
              reusable components and smooth layouts. I also have backend
              exposure in <span className="fw-semibold">Java</span> and work
              with <span className="fw-semibold">APIs & MySQL</span> for
              data-driven apps. I keep improving my code for scalability,
              performance, and continuous growth as a Frontend Developer.
            </article>
            <article
              className={`${style.projectDetailsLpt} ${style.projectDetailsCommon} `}
            >
              Each project I build reflects my passion for transforming ideas
              into real-world{" "}
              <span className="fw-semibold">user experiences</span>. As a
              5th-semester Diploma CSE student, I focus on{" "}
              <span className="fw-semibold">
                clean UI design, logical thinking, and modern frontend
                development
              </span>
              . I craft responsive, user-friendly interfaces using{" "}
              <span className="fw-semibold">React + Tailwind CSS</span>, with
              smooth layouts and reusable components. I also have backend
              exposure in <span className="fw-semibold">Java</span> and work
              with <span className="fw-semibold">APIs and MySQL</span> for
              data-driven applications. I continuously refine my coding style to
              ensure{" "}
              <span className="fw-semibold">
                scalability, extensibility, and performance
              </span>
              . Every project pushes me to learn new tools and sharpen my
              problem-solving skills, strengthening my journey toward becoming a
              skilled <span className="fw-semibold">Frontend Developer</span>.
            </article>
          </div>
          <div className="my-5 pt-2 pb-lg-1">
            <h4 className={`${style.projectsTitle} ${style.projectsTitleMob}`}>
              Projects That Define My <br />{" "}
              <span className={style.projTitleHighLight}>Journey</span>
            </h4>
            <h4
              className={`${style.projectsTitle} ${style.projectsTitleNonMob}`}
            >
              Projects That Define My{" "}
              <span className={style.projTitleHighLight}>Journey</span>
            </h4>

            <div className="row justify-content-sm-between justify-content-center mt-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`col-12 col-sm-6 col-lg-4 ${style.projectsCard} ${
                    !darkMode && style.projectCardLgt
                  }`}
                >
                  <div>
                    <img
                      src={project.image}
                      className={style.projectImg}
                      alt=""
                    />
                  </div>
                  <h4 className={style.projectName}>{project.title}</h4>
                  <p
                    className={style.projectDescription}
                    style={{
                      color: darkMode ? "#dadadaff" : "#2c2c2cff",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {project.description}
                  </p>
                  <p style={{ fontFamily: "Roboto, sans-serif" }}>
                    <span className="fw-semibold">Used Stack :</span>{" "}
                    {project.stacks.map((stack, idx) => (
                      <span key={idx} className={style.projectStacks}>
                        {stack}{" "}
                      </span>
                    ))}
                  </p>
                  <div className="">
                    <div className="d-flex flex-wrap justify-content-between mt-2">
                      <button
                        className={style.viewProjectBtn}
                        onClick={project.link}
                      >
                        View On Github
                      </button>
                      <button
                        className={`${style.viewProjectBtn} ${style.viewSite}`}
                        onClick={project.site}
                      >
                        view site
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p
                className={`${style.projectsClosingLines} ${style.forBigScreen}`} //projectsClosingHighlights
              >
                Each project reflects my commitment to building{" "}
                <span className={style.projectsClosingHighlights}>
                  responsive, dynamic, and visually refined frontend experiences
                </span>{" "}
                through{" "}
                <span className={style.projectsClosingHighlights}>
                  clean, modular, and well-structured UI architecture
                </span>
                .
              </p>
              <p
                className={`${style.projectsClosingLines} ${style.forSmallScreen}`}
              >
                Crafting{" "}
                <span className={style.projectsClosingHighlights}>
                  Responsive
                </span>
                ,{" "}
                <span className={style.projectsClosingHighlights}>
                  Interactive
                </span>
                , and{" "}
                <span className={style.projectsClosingHighlights}>
                  Visually Refined
                </span>{" "}
                frontend experiences with{" "}
                <span className={style.projectsClosingHighlights}>Clean</span>,{" "}
                <span className={style.projectsClosingHighlights}>Modular</span>
                , and{" "}
                <span className={style.projectsClosingHighlights}>
                  Well-Structured
                </span>{" "}
                UI code.
              </p>
              <p
                className={`${style.projectsClosingLines} ${style.forMediumScreen}`}
              >
                Each project reflects my commitment to building{" "}
                <span className={style.projectsClosingHighlights}>
                  Responsive
                </span>
                ,{" "}
                <span className={style.projectsClosingHighlights}>
                  Interactive
                </span>
                , and{" "}
                <span className={style.projectsClosingHighlights}>Clean</span>{" "}
                frontend experiences with{" "}
                <span className={style.projectsClosingHighlights}>Modular</span>{" "}
                and{" "}
                <span className={style.projectsClosingHighlights}>
                  Well-Structured
                </span>{" "}
                UI code.
              </p>
            </div>
            <div className="d-flex justify-content-center ">
              <div className={style.seeAllProjectBtnCont}>
                <button
                  className={style.seeAllProjectBtn}
                  onClick={() => {
                    window.open(
                      "https://github.com/Ayan-Frontend?tab=repositories",
                      "_Blank"
                    );
                  }}
                >
                  <FaGithub style={{ fontSize: "1.2rem" }} /> See All
                  Repositories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />{" "}
    </>
  );
};
export default Project;
