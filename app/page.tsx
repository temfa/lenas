import Banner from "@/components/banner";
import HomeAbout from "@/components/home-about";
import HomeProducts from "@/components/home-product";
import Quote from "@/components/quote";
import Testimonials from "@/components/testimonials";
import { products } from "@/utils/data";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <HomeProducts data={products?.slice(0, 3)} page />
      <Quote />
      <Testimonials />
    </>
  );
}
