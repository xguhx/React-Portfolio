import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul onClick={() => setMenuOpen(!menuOpen)}>
        <li key="intro">
          <a href="#intro">Home</a>
        </li>
        <li key="works">
          <a href="#works">Works</a>
        </li>
        <li key="portfolio">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li key="aboutMe">
          <a href="#aboutMe">About Me</a>
        </li>
        <li key="contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
