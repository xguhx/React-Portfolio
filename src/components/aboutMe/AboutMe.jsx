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
        <p className="subtitle">Front-end, Back-end, Mobile developer</p>
        <p className="description">
          Brazilian, 30, Advanced diploma in Computer Programming and Analysis
          at Seneca College. Geek, in love with programming and technology.
        </p>

        <div className="award">
          <img
            src="assets/award-svgrepo-com.svg"
            alt="award"
            className="award-img"
          />
          <div className="award-text">
            <h4 className="award-title">President's Honour List 2019 - Fall</h4>
            <p className="award-description">
              For achieving a 4.0 GPA during the term.
            </p>
          </div>
        </div>

        <div className="award">
          <img
            src="assets/award-svgrepo-com.svg"
            alt="award"
            className="award-img"
          />
          <div className="award-text">
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
