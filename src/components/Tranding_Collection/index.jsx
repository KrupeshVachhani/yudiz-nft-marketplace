import React from "react";
import TrandingCard from "./Tranding_card";
import "./style.scss";
import { cardsData } from "../../constants";

const Index = () => {
  return (
    <section className="tranding_collection">
      <header className="tranding_collection__header">
        <h3 className="tranding_collection__title">Trending Collection</h3>
        <span className="tranding_collection__subtitle">
          Checkout our weekly updated trending collection.
        </span>
      </header>
      <div className="tranding_collection_cards">
        {cardsData.map((card, index) => (
          <TrandingCard
            key={index}
            mainImage={card.mainImage}
            secondaryImages={card.secondaryImages}
            extraCount={card.extraCount}
            collectionName={card.collectionName}
            userImage={card.userImage}
            userName={card.userName}
          />
        ))}
      </div>
    </section>
  );
};

export default Index;
