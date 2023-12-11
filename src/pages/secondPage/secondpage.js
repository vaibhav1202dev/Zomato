import React, { useState } from "react";
import Header from "../../components/header/header";
import Taboption from "../../components/tabOptions/taboption";
import Delivery from "../../components/delivery/delivery";
import Diningout from "../../components/dinigOut/dinigout";
import Nightlife from "../../components/nightlife/nightlife";
import Footer from "../../components/footer/footer";

const Secondpage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
   <div>
      <Header />
      <Taboption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <Diningout />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default Secondpage;
