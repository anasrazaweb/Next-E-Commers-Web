import React from "react";
import TopRowpath from "../Top-Component/Row";
import RowHeading from "../Top-Component/RowHeading";
import AllCards from "../AllCards";
import { ALLPRODUCTDATA } from "../../../public/mock/_allProduct";

const Ourproduct = () => {
  return (
    <div className="md:px-20 px-5">
      <TopRowpath para={"Our Products"} />
      <RowHeading heading={"Explore Our Products"} />

      <div className="cards flex justify-between  gap-4 flex-wrap mt-10 md:mt-5 ">
        {ALLPRODUCTDATA.sort(() => Math.random() - 0.5) // Shuffle the array
          .slice(0, 10)
          .map((product, index) => (
            <AllCards key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Ourproduct;
