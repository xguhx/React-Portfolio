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
      strings: ["Front-end", "Back-end", "Mobile"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hello! I'm Gustavo Tavares</h2>

          <h3>
            I am a <span ref={text}></span>Developer
          </h3>
        </div>

        <a href="#works">
          <ArrowDownward className="down" />
        </a>
      </div>
    </div>
  );
};
