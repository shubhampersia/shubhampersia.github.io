import { IoBookOutline, IoTrophyOutline, IoRibbonOutline, IoPeopleOutline } from 'react-icons/io5';

const Academics = () => {
    return (
      <>
        <header>
          <h2 className="h2 article-title">Academics</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline size={20} />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE{" "}
              </h4>
              <span>2018 — 2022</span>
              <p className="timeline-text">
                Bachelor of Technology in Electrical Engineering <br />
                <strong>
                  <b>CGPA: 7.407 </b>
                </strong>
                <br />
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                XII - Kendriya Vidyalaya No.2, Delhi Cantt
              </h4>
              <span>2017</span>
              <p className="timeline-text">
                CBSE Board
                <br />
                <strong>
                  <b>Percentage: 77.60%</b>
                </strong>
                <br />
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                X - Kendriya Vidyalaya No.2, Delhi Cantt
              </h4>
              <span>2015</span>
              <p className="timeline-text">
                CBSE Board
                <br />
                <strong>
                  <b>CGPA: 9.0</b>
                </strong>
                <br />
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoTrophyOutline size={20} />
            </div>
            <h3 className="h3">Achievements</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Codeforces: Candidate Master – Rating: 2054
              </h4>
              <a
                href="https://codeforces.com/profile/shubham_persia"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-rank"
              >
                Handle: Shubham_Persia
              </a>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                CodeChef: 4-Star – Rating: 1862
              </h4>
              <a
                href="https://www.codechef.com/users/shubhampersia"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-rank"
              >
                Handle: shubhampersia
              </a>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                CodeChef July LunchTime Division 2
              </h4>
              <a
                href="https://www.codechef.com/rankings/LTIME98B?filterBy=Country%3DIndia&itemsPerPage=100&order=asc&page=1&sortBy=rank"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-rank"
              >
                Global Rank: 12 | All India Rank: 2
              </a>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                HackerRank: 5-Star Gold Badge
              </h4>
              <span>Domains: Problem Solving (DSA) & C++</span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Google Code Jam 2021: Qualified
              </h4>
              <span>Score: 59 points</span>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div
              className="icon-box"
              style={{ color: "var(--orange-yellow-crayola)" }}
            >
              <IoPeopleOutline size={20} />
            </div>
            <h3 className="h3">Extra-Curriculars</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Photographer | Photography Cell , NSS IIT Roorkee
              </h4>
              <span>August 2018 — August 2019</span>
              <p className="timeline-text">
                Worked as a photographer in NSS 2018. Worked with the team in
                many events like blood donation camp, valedictory ceremony ,etc
                which occurred in the campus.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Football Member | Inter Bhawan Football Match
              </h4>
              <span>2019</span>
              <p className="timeline-text">
                Participated in inter bhawan Football match 2019. Achieved an
                T-shirt of inter bhawan football match.{" "}
              </p>
            </li>
          </ol>
        </section>
      </>
    );
};

export default Academics;
