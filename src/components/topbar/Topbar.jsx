import "./topbar.scss";
import { AlternateEmail, GitHub } from "@material-ui/icons";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            gg.
          </a>
          <div className="itemContainer">
            <GitHub className="icon" />

            <span>
              <a href="https://github.com/xguhx"> xguhx</a>
            </span>
          </div>

          <div className="itemContainer">
            <AlternateEmail className="icon" />
            <span> gust.tavaresx@gmail.com</span>
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
