import { FaCode, FaLaptopCode, FaServer, FaCloud, FaTools, FaBriefcase } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Software Engineer with 3 years of experience in building secure and scalable applications, combining strong backend development 
                    using Java and Spring Boot with modern frontend frameworks like React and Angular. Skilled in DevOps practices including CI/CD with Jenkins, Docker, and Kubernetes.
                </p>
                <p>
                    IIT Roorkee graduate, passionate about AI-driven solutions, performance optimization, and crafting clean,
                     reliable code. Always exploring new technologies and committed to continuous learning.
                </p>
            </section>

            <section className="timeline">

                <div className="title-wrapper">
                    <h3 className="h3">Experience</h3>


                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Software Engineer | Société Générale - GSC
                        </h4>
                        <span>June 2022 — Present</span>
                        <p className="timeline-text">
                            Specialized in Java back-end development and front-end UI, focusing on building robust APIs and writing comprehensive test cases using Java and Spring Boot. 
                            Led the development of user-centric UI screens using Angular, React ensuring seamless user experiences.<br />
                            Proficient in DevOps practices, utilizing Jenkins for continuous integration and deployment, and managing containerized applications with Kubernetes for both UI and API components.<br />
                            Developed Jenkins pipelines for automated deployment to Kubernetes and integrated Vault for secure secrets management, enhancing deployment efficiency and system security.<br />
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Web Development Internship | Web Student Designers  
                        </h4>
                        <span>April 2021 - June 2021</span>
                        <p className="timeline-text">
                            Developed secure marketing websites using HTML, JavaScript, and React as a developer intern. 
                            Gained valuable industry insights and expanded skill set through collaboration with experienced professionals.
                        </p>
                    </li>

                </ol>
            </section>


            <section className="service">
                <h3 className="h3 service-title">My Skills</h3>

                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaCode size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Languages</h4>
                            <p className="service-item-text">C++, Java, JavaScript</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaLaptopCode size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Frontend</h4>
                            <p className="service-item-text">React.js, Angular, HTML5, CSS3</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaServer size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Backend</h4>
                            <p className="service-item-text">Node.js, Spring Boot, MongoDB, SQL</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaCloud size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Tools</h4>
                            <p className="service-item-text">VS Code, Postman, Git, IntelliJ IDEA</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaTools size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Other</h4>
                            <p className="service-item-text">Problem Solving, DSA, DBMS, OOPs, Dockers & Kubernetes</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default About;
