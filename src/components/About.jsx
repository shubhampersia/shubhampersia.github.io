import { FaCode, FaLaptopCode, FaServer, FaCloud, FaTools, FaBriefcase } from 'react-icons/fa';

const About = () => {
    return (
      <>
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Software Engineer with 3 years of experience in building secure and
            scalable applications, combining strong backend development using
            Java and Spring Boot with modern frontend frameworks like React and
            Angular. Skilled in DevOps practices including CI/CD with Jenkins,
            Docker, and Kubernetes.
          </p>
          <p>
            IIT Roorkee graduate, passionate about AI-driven solutions,
            performance optimization, and crafting clean, reliable code. Always
            exploring new technologies and committed to continuous learning.
          </p>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                SOFTWARE ENGINEER | SOCIÉTÉ GÉNÉRALE – GSC
              </h4>
              <span>June 2022 — Present</span>
              <p className="timeline-text">
                Developed and maintained full-stack web applications using Java
                (Spring Boot), Angular/React.js, and Oracle SQL, delivering
                scalable and secure solutions for business-critical operations.
                <br />
                Created interactive dashboards and reporting tools to enhance
                user engagement and support data-driven decisions for key
                stakeholders.
                <br />
                Designed and integrated secure RESTful APIs with 80% code
                coverage, leveraging SonarQube for code quality and
                maintainability.
                <br />
                Automated CI/CD pipelines using Jenkins and implemented
                HashiCorp Vault for secure secrets management across services.
                <br />
                Migrated artifact management from Nexus to JFrog Artifactory and
                integrated Harbor as a container registry to improve
                traceability and security.
                <br />
                Containerized and deployed applications on Kubernetes clusters,
                improving scalability and reducing deployment time by 40%.
                <br />
                Collaborated in Agile teams to deliver high-quality features,
                drive continuous improvement, and meet tight release schedules.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                WEB DEVELOPMENT INTERNSHIP| WEB STUDENT DESIGNERS
              </h4>
              <span>April 2021 - June 2021</span>
              <p className="timeline-text">
                Developed responsive and secure marketing websites using
                React.js, Javascript and HTML/CSS, ensuring mobile friendly,
                modern user experiences. Optimized reusable UI components,
                boosting development efficiency by 30% and ensuring best
                practices in code quality, security and cross-browser
                compatibility.
                <br />
                Optimized reusable UI components, boosting development
                efficiency by 30% and ensuring best practices in code quality,
                security and cross-browser compatibility.
              </p>
            </li>
          </ol>
        </section>

        <section className="service">
          <h3 className="h3 service-title">My Skills</h3>

          <ul className="service-list">
            <li className="service-item">
              <div
                className="service-icon-box"
                style={{ color: "var(--orange-yellow-crayola)" }}
              >
                <FaCode size={28} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Languages</h4>
                <p className="service-item-text">C++, Java, JavaScript, SQL</p>
              </div>
            </li>

            <li className="service-item">
              <div
                className="service-icon-box"
                style={{ color: "var(--orange-yellow-crayola)" }}
              >
                <FaLaptopCode size={28} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Frontend</h4>
                <p className="service-item-text">
                  React.js, Angular, HTML5, CSS3
                </p>
              </div>
            </li>

            <li className="service-item">
              <div
                className="service-icon-box"
                style={{ color: "var(--orange-yellow-crayola)" }}
              >
                <FaServer size={28} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Backend</h4>
                <p className="service-item-text">
                  Node.js, Spring Boot, REST APIs,MongoDB
                </p>
              </div>
            </li>

            <li className="service-item">
              <div
                className="service-icon-box"
                style={{ color: "var(--orange-yellow-crayola)" }}
              >
                <FaTools size={28} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Other</h4>
                <p className="service-item-text">
                  Problem Solving, DSA, OOP, DBMS, System Design, Agile
                </p>
              </div>
            </li>

            <li className="service-item">
              <div
                className="service-icon-box"
                style={{ color: "var(--orange-yellow-crayola)" }}
              >
                <FaCloud size={28} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Tools</h4>
                <p className="service-item-text">
                  Jenkins (CI/CD), Docker, Kubernetes, VS Code, Postman,
                  SonarQube, Git, IntelliJ IDEA
                </p>
              </div>
            </li>
          </ul>
        </section>
      </>
    );
};

export default About;
