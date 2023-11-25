 import React from "react";
import Navbarmenu from "../../components/navbar/navbar";
import Homepagetab from "../../components/homePagetab/homepagetab";
import Collections from "../../components/homeCollections/collections";
import Footer from "../../components/footer/footer";

function Homepage() {
  return (
    <>
      <div>
        <Navbarmenu />
        <Homepagetab />
        <Collections />
        <Footer />
      </div>
    </>
  );
}
export default Homepage;
