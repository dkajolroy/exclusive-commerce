import Hero from "@/components/hero";
import BestSales from "@/components/sections/bestsale";
import Categories from "@/components/sections/categories";
import Explore from "@/components/sections/explore";
import FlashSale from "@/components/sections/flashsale";
import NewArrival from "@/components/sections/newarrival";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
      </div>
      <div>
        <FlashSale />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <BestSales />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <NewArrival />
      </div>
    </main>
  );
}
