import "./works.scss";
import {
  DeveloperMode,
  ChevronLeft,
  ChevronRight,
  Code,
} from "@material-ui/icons";
import { featuredPortfolio } from "../../data";
import { useState } from "react";

export const Works = () => {
  const data = featuredPortfolio;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {
                      //Change this for more icons
                      item.icon === "mobile" ? <Code className="icon" /> : <></>
                    }
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={item.src}>
                    <span>Project</span>
                  </a>

                  <a href={item.github}>
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              <div className="right">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChevronLeft className="arrow left" onClick={() => handleClick("left")} />
      <ChevronRight className="arrow right" onClick={() => handleClick()} />
    </div>
  );
};
