import React from "react";
import "./components/NavBarComp.css";
import "./HomePage.css";
import about from "./imgs/about.jpg";

const AboutPage = () => {
    return(
        <>
        <img
                src={about}
                style={{
                  width: "100%",
                  display: "block",
                  margin: "0 auto",
                }}
                alt="Card image cap"
              />
        </>
    );
};

export default AboutPage;