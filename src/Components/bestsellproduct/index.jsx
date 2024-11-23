import React from "react";
import TopRowpath from "../Top-Component/Row";
import RowHeading from "../Top-Component/RowHeading";
import AllCards from "../AllCards";
import Image from "next/image";
import { bestSellingProduct } from "../../../public/mock/_allProduct";

const Product = () => {
  return (
    <div className=" mt-10 md:px-20 px-5 ">
      <TopRowpath para={"This Month"} />
      <RowHeading heading={"Best Selling Products"} />
      <div className="cards mt-10 md:mt-5 flex flex-wrap  gap-3 md:gap-4  justify-center">
        {bestSellingProduct
          .sort(() => Math.random() - 0.5) // Shuffle the array
          .slice(0, 5) // Take the first 4 items
          .map((product) => (
            <AllCards product={product} key={product.id} />
          ))}

        {/*         
        <AllCards
          cardimg={"/img/jeket.png"}
        />
        <AllCards
          cardimg={"/img/handbeg.png"}
        />
        <AllCards
          cardimg={"/img/speaker.png"}
        />
        <AllCards
          cardimg={"/img/rag.png"}
        /> */}
      </div>
    </div>
  );
};

export default Product;
