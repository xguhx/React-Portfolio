import "./aboutMe.scss";

export const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMeLeft">
        <div className="card bg"></div>
        <div className="card">
          <img src="assets/Me.png" alt="me" className="aboutImg" />
        </div>
      </div>
      <div className="aboutMeRight">
        <h1 className="aboutMeTitle">About Me</h1>
        <p className="subtitle">Full-Stack, Front-End, Back-End</p>
        <p className="description">
          Brazilian, 30, Advanced diploma in Computer Programming and Analysis
          at Seneca College. Geek, in love with programming and technology.
        </p>

        <br />
        <p className="description2">
          My goal as a programmer is to be part of a team and evolve together.
          For me, one of the best feelings in the world is to be helpful, and I
          am willing to do everything I can to make it happen. I am very
          comfortable working in Back-end and Front-end, and I would love to get
          a position in one of those areas.
        </p>
        <br />

        <p className="description3">
          <strong> Programming Languages </strong>
        </p>
        <p className="languages">
          <span>JavaScript,</span> <span>TypeScript,</span> <span>Java,</span>{" "}
          <span>C#,</span> <span>C++,</span> <span>C</span>
        </p>

        <br />
        <p className="description3">
          <strong>Tools and Skills: </strong>
        </p>
        <p className="languages">
          <span>React, </span> <span>Angular, </span> <span>Express, </span>{" "}
          <span>Nodejs, </span> <span>Android Studio, </span>
          <span> HTML5, </span> <span>CSS, </span> <span>CI/CD Pipeline</span>
        </p>
        <br />

        <p className="description3">
          <strong>Databases: </strong>
        </p>
        <p className="languages">
          <span>SQL,</span> <span>MongoDB,</span> <span>AS400</span>
        </p>
        <br />
        <p className="description3">
          <strong>Cloud: </strong>
        </p>
        <p className="languages">
          <span>AWS,</span> <span>Microsoft Azure</span>
        </p>

        <div className="award">
          <img
            src="assets/award-svgrepo-com.svg"
            alt="award"
            className="award-img"
          />
          <div className="award-text">
            <h4 className="award-title">President's Honour List 2019 - Fall</h4>
            <h4 className="award-title">
              President's Honour List 2021 - Winter
            </h4>
            <p className="award-description">
              For achieving a 4.0 GPA during the term.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
