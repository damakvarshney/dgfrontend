import React from "react";
import Topbar from "../../components/topbarComponent/Topbar.jsx";
import Navbar from "../../components/navbarComponent/Navbar.jsx";
// import SliderBody from "../../components/sliderbodyComponent/Sliderbody.jsx";
import Footer from "../../components/footerComponent/Footer.jsx";

export default function () {
  return (
    <div>
      <Topbar />
      <Navbar />
      {/* <SliderBody /> */}
      <Footer />
    </div>
  );
}
