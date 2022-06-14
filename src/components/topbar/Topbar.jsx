import "./topbar.scss";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            g.
          </a>
          <div className="itemContainer">
            <GitHub className="icon" />

            <span>
              <a href="https://github.com/xguhx"> xguhx</a>
            </span>
          </div>

          <div className="itemContainer">
            <LinkedIn className="icon" />

            <span>
              <a href="https://www.linkedin.com/in/gustavo-tavares-80658071/">
                Gustavo Tavares
              </a>
            </span>
          </div>

          <div className="itemContainer">
            <Email className="icon" />
            <span>
              <a href="mailto:gust.tavaresx@gmail.com">
                gust.tavaresx@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
