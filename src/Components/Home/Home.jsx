import React from "react";
import Product from "../Products/Product";
import productImage from "../../utilities/amazon-echo.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12312314"
            title="Amazon-echo"
            price={11.93}
            rating={5}
            image={productImage}
          />
          <Product
            id="12312314"
            title="Amazon-echo"
            price={11.93}
            rating={5}
            image={productImage}
          />
        </div>

        <div className="home__row">
          <Product
            id="12312314"
            title="Amazon-echo"
            price={11.93}
            rating={5}
            image={productImage}
          />
          <Product
            id="12312314"
            title="Amazon-echo"
            price={11.93}
            rating={5}
            image={productImage}
          />
          <Product
            id="12312314"
            title="Amazon-echo"
            price={11.93}
            rating={5}
            image={productImage}
          />
        </div>

        <div className="home__row">
          <Product
            id="12312314"
            title="Amazon-echo"
            price={11.93}
            rating={5}
            image={productImage}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
