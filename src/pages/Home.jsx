import React from "react";

// Assets
import heroSliderData from "../assets/fake-data/hero-slider";

// Components
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider data={heroSliderData} control auto timeOut={5000} />
      {/* end hero slider */}
    </Helmet>
  );
};

export default Home;
