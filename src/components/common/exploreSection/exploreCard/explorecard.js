import React from "react";
import "./explorecard.css";
import { FaStar } from "react-icons/fa";

const Explorecard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <FaStar className="absolute-center rating-icon" />
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
    </div>
  );
};

export default Explorecard;
