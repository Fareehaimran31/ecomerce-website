import react from "react";
import Navbar from "../app/Components/Navbar";
import ProductList from "./Components/ProductList";
import Deal from "./Components/Deal";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import Testimonals from "./fonts/Testimonals";
import Footer from "./Components/Footer";
import Pizza from "./Components/Pizza";
import Progressor from "./Components/Progressor";
import Menuitem from "./Components/Menuitem";
import Offers from "./Components/Offers";
import Card from "./Components/Card";
import Reservation from "./Components/Reservation";
export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Pizza />
      <Banner />
      <ProductList />
      <Menuitem />
      <Offers />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
