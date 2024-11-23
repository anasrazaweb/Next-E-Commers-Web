import "@/app/globals.css";
import Sell from "@/Components/Timesection/Sell";
import Product from "@/Components/bestsellproduct";
import Hero from "@/Components/mainpage/Index";
import Ourproduct from "@/Components/Expolore";
import GridBox from "@/Components/Gridebanner";
import Arival from "@/Components/Arival";
import Searchbar from "@/Components/Searchbar";

export default function Home() {
  return (
    <div className=" overflow-hidden">
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
