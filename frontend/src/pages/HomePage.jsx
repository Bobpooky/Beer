import React from "react";
import "../styles/HomePage.css";

import Header from "@components/Header";
import BeerCard from "@components/beer-card-elmt/BeerCard";
import FiltersComponent from "../components/filters-comp/FiltersComponent";
import Footer from "@components/Footer";

function HomePage() {
  return (
    <div id="body">
      <Header />
      <div className="main">
        <h2>Oh my brew!</h2>
        <h3>Let the dogs out!</h3>
        <FiltersComponent />
        <img src="src/assets/oh-my-brew-icon-dog-ok.png" alt="dog" />
      </div>
      <div className="beerDisplay">
        <div className="beerCardList">
          <BeerCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
