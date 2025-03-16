import Banner from "@/components/banner";
import HomeAbout from "@/components/home-about";
import HomeProducts from "@/components/home-product";
import Quote from "@/components/quote";
import Testimonials from "@/components/testimonials";
import { products } from "@/utils/data";
import styles from "./page.module.css";
import Also from "@/components/also";

export default function Home() {
  return (
    <main>
      <Banner />
      <HomeAbout page="Home" />
      <HomeProducts data={products?.slice(0, 6)} page />
      <Quote />
      <Testimonials />
      <Also />
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false">
        <source src="/video2.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
