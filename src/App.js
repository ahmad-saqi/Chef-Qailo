import React from "react";
import Product from "../src/images/Product.png";
import Product1 from "./images/Product-1.png";
import Product2 from "./images/Product-2.png";
import Product3 from "./images/Product-3.png";

import Product5 from "./images/Product-5.png";
import Product6 from "./images/Product-6.png";
import Product7 from "./images/Product-7.png";
import Product8 from "./images/Product-8.png";
import Product9 from "./images/Product-9.png";

const App = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <img src={Product} alt="logo"  className="h-36"/>
        <img src={Product1} alt="logo" className="h-36"/>
        <img src={Product2} alt="logo" className=""/>
        <img src={Product3} alt="logo" className="h-36"/>
         
        <img src={Product5} alt="logo" className="h-36"/>
        <img src={Product6} alt="logo" className="h-36"/>
        <img src={Product7} alt="logo" className="h-36" />
        <img src={Product8} alt="logo" className="h-36" />
        <img src={Product9} alt="logo"  className="h-36"/>
      
      </div>
    </>
  );
};

export default App;
