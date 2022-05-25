import "./intro.scss";
import { init } from "ityped";

import { ArrowDownward } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";

export const Intro = () => {
  const [mobile, setMobile] = useState(false);
  const text = useRef();
  useEffect(() => {
    init(text.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-end", "Back-end", "Mobile"],
    });
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          {!mobile ? (
            <>
              <h2>Hello! I'm Gustavo Tavares</h2>
              <h3>
                I am a <span ref={text}></span>Developer{" "}
              </h3>{" "}
            </>
          ) : (
            <>
              <h2>
                Hello! I'm <br />
                Gustavo Tavares
              </h2>
              <h3>
                I am a <br />
                <span ref={text}></span>
                <br />
                Developer{" "}
              </h3>{" "}
            </>
          )}
        </div>

        <a href="#works">
          <ArrowDownward className="down" />
        </a>
      </div>
    </div>
  );
};
