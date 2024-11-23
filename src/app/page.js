// import Image from "next/image";
// import Baner from "@/Components/banner/Baner";
// import Productcard from "@/Components/AllCards";
// import Slide from "@/Components/slide";
// import BrowzerCards from "@/Components/BrowzerCategory";
import Navbar from "@/Components/Navabr/Navbar";
import Sell from "@/Components/Timesection/Sell";
import Product from "@/Components/bestsellproduct";
import Hero from "@/Components/mainpage/Index";
import Ourproduct from "@/Components/Expolore";
import GridBox from "@/Components/Gridebanner";
import Arival from "@/Components/Arival";
import Page from "../app/footer/page"
import Searchbar from "@/Components/Searchbar";
import { AddCardContextProvider } from "@/context/ADDTOCARD/AddCardContext";
import Deal from "@/Components/SupperDeal/Deal";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      {/* <Navbar /> */}
      <div className="px-2 md:hidden block mb-5">
        <Searchbar />
      </div>
      <Hero />
      <Sell />
      <Product />
      <Ourproduct />
      <GridBox />
      <Arival />



    </div>
  );
}
