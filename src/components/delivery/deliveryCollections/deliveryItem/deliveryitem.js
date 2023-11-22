import React from "react";
import "./deliveryitem.css";

const Deliveryitem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={item.cover}
          className="delivery-item-image"
          alt={item.title}
        />
      </div>
      <div className="delivery-item-title absolute-center">{item.title}</div>
    </div>
  );
};

export default Deliveryitem;
