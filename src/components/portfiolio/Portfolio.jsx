import { PortfolioList } from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
//change this:
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "react", title: "React" },
    { id: "angular", title: "Angular" },
  ];

  //Change this:
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "react":
        setData(webPortfolio);
        break;

      case "angular":
        setData(mobilePortfolio);
        break;

      default:
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.title} />

            <h3>
              <a href={item.github}>{item.title} </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
