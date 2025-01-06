import React from 'react';
import './style.scss';

const TrandingCard = ({ mainImage, secondaryImages, extraCount, collectionName, userImage, userName }) => {
  return (
    <section className="tending_card">
      <div className="tending_card_imgs">
        <img src={mainImage} alt="Main Placeholder" />
        <div className="scendory_placholder">
          <img src={secondaryImages[0]} alt="Secondary Placeholder 1" />
          <img src={secondaryImages[1]} alt="Secondary Placeholder 2" />
          <h5 className="extra_placholder_count">{extraCount}</h5>
        </div>
      </div>
      <div className="trending_card_collection_info">
        <h5 className="collection_name">{collectionName}</h5>
        <div className="collection_user">
          <img src={userImage} alt="User" />
          <span>{userName}</span>
        </div>
      </div>
    </section>
  );
};

export default TrandingCard;