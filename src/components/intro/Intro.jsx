import "./intro.scss";
import { init } from "ityped";

import { ArrowDownward } from "@material-ui/icons";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const text = useRef();
  useEffect(() => {
    init(text.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Programmer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hello! I'm</h2>
          <h1>Gustavo Tavares</h1>
          <h3>
            Junior <span ref={text}></span>
          </h3>
        </div>

        <a href="#portfolio">
          <ArrowDownward className="down" />
        </a>
      </div>

      <div className="right">
        <div className="imgContainer">
          <img src="assets/logopng.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};
