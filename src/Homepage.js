import React from "react";
import Shop from "./Shop";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Home">
        <div className="filler"></div>
        <div className="background">
          <p className="homepage-letter"><span>RROUND</span> is from Los Angeles, CA. With a strong focus on simple yet powerful design, we are driven to create timeless work by portraying an aesthetic that is uniquely our own.</p>
        </div>
      </div>
      <div>
        <Shop />
      </div>
    </div>
  );
};

export default Homepage;
