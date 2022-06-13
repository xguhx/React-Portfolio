import "./intro.scss";
import { init } from "ityped";

import { ArrowDownward } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";

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
          <h2>Hello! I'm </h2>
          <h2> Gustavo Tavares</h2>
          <h3>
            I am a <br />
            <span ref={text}></span>
          </h3>
          <h3>Developer </h3>
        </div>

        <a href="#portfolio">
          <ArrowDownward className="down" />
        </a>
      </div>
    </div>
  );
};
