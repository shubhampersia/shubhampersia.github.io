import { IoEyeOutline } from "react-icons/io5";
import project1 from "../assets/images/project-0.png";
import project2 from "../assets/images/project-01.png";
import project3 from "../assets/images/project-03.jpg";

const projects = [
  {
    title: "HIFI CHAT APPLICATION",
    image: project1,
    link: "https://hifi-chat.vercel.app/",
    description: [
      "Built a full-stack real-time chat app using MERN Stack and Socket.IO for bi-directional messaging.",
      "Implemented JWT authentication and Google OAuth login.",
      "Real-time messaging with typing indicators and notifications.",
      "One-on-one chats, group chats (create, rename, manage users).",
      "Profile management with a responsive UI using Chakra UI.",
    ],
  },
  {
    title: "AUTOSPLIT - AI EXPENSE MANAGER",
    image: project2,
    link: "https://auto-split.vercel.app/",
    description: [
      "Built with Next.js (React), Tailwind CSS, and Convex DB for real-time updates.",
      "Integrated Gemini AI for natural language input and auto-categorization.",
      "Secure user authentication with group-based expense tracking.",
      "Implemented split/settlement workflows.",
      "Responsive UI using Shadcn UI, optimized for all devices.",
    ],
  },
  {
    title: "SMARTWEB SUMMARIZER - AI CHROME EXTENSION",
    image: project3,
    link: "https://github.com/shubhampersia/smartWeb",
    description: [
      "Built a Chrome extension using JavaScript and Gemini AI API.",
      "Generated real-time AI summaries of web content.",
      "Displayed summaries as overlays in the browser for better productivity.",
    ],
  },
];

const Projects = () => {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projects.map((proj, index) => (
            <li key={index} className="project-item active">
              {proj.link ? (
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <IoEyeOutline />
                    </div>
                    <img src={proj.image} alt={proj.title} loading="lazy" />
                  </figure>

                  <h3 className="project-title">{proj.title}</h3>

                  <ul
                    className="project-category"
                    style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}
                  >
                    {proj.description.map((point, i) => (
                      <li
                        key={i}
                        style={{ marginBottom: "6px", listStyleType: "disc" }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </a>
              ) : (
                <div>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <IoEyeOutline />
                    </div>
                    <img src={proj.image} alt={proj.title} loading="lazy" />
                  </figure>

                  <h3 className="project-title">{proj.title}</h3>

                  <ul
                    className="project-category"
                    style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}
                  >
                    {proj.description.map((point, i) => (
                      <li
                        key={i}
                        style={{ marginBottom: "6px", listStyleType: "disc" }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
