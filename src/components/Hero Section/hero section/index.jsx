import { useEffect, useState } from "react";
import CountUp from "react-countup";
import avtImg from "../../../assets/Avatar.png";
import nftImg from "../../../assets/Image_Placeholder.png";
import "./style.scss";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: 240, label: "Total sales", suffix: "k+" },
    { number: 100, label: "Auctions", suffix: "k+" },
    { number: 240, label: "Artists", suffix: "k+" }
  ];

  return (
    <section>
      <div className="herosection__content">
        <div className="heroesection__top__content">
          <h1>
            Discover
            <br /> digital art & <br />
            Collect NFTs
          </h1>
          <div>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </div>
          <button className="content__button">Get Started</button>
        </div>
        <div className="heroesection__down__content">
          {stats.map((stat, index) => (
            <div key={index}>
              <span>
                {isVisible && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                    delay={index * 0.2}
                  />
                )}
              </span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="herosection__nft">
        <img src={nftImg} alt="NFT Art" />
        <div className="nft__card">
          <span className="nft__title">Space Walking</span>
          <div className="nft__user">
            <img src={avtImg} alt="User Avatar" />
            <span>Animakid</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;