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
        <p className="subtitle">Subtitle</p>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="award">
          <img
            src="assets/award-svgrepo-com.svg"
            alt="award"
            className="award-img"
          />
          <div className="award-text">
            <h4 className="award-title">President List Award 2019</h4>
            <p className="award-description">This is the award description</p>
          </div>
        </div>

        <div className="award">
          <img
            src="assets/award-svgrepo-com.svg"
            alt="award"
            className="award-img"
          />
          <div className="award-text">
            <h4 className="award-title">President List Award 2019</h4>
            <p className="award-description">This is the award description</p>
          </div>
        </div>
      </div>
    </div>
  );
};
