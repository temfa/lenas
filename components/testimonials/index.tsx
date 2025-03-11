"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";
import ArrowLeft from "@/svgs/arrowLeft";
import ArrowRight from "@/svgs/arrowRight";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: false,
  };
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };
  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const testimonials = [
    {
      image: "/images/1.jpeg",
      name: "Kathryn",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, mollitia dolor voluptate officiis possimus commodi placeat quos nihil incidunt aperiam quae sint quaerat enim voluptatibus. In molestias mollitia doloremque.",
    },
    {
      image: "/images/1.jpeg",
      name: "Jennifer",
      testimony:
        "The soaps are fantastic. I have extremely sensitive skin and I haven't had any issues. Such a smooth , rich lather and made to keep your skin happy and healthy. I use the honey oatmeal on my face and skin looks great.",
    },
    {
      image: "/images/1.jpeg",
      name: "Kathryn",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, mollitia dolor voluptate officiis possimus commodi placeat quos nihil incidunt aperiam quae sint quaerat enim voluptatibus. In molestias mollitia doloremque.",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Testimonials</h2>
      <Slider {...settings} ref={sliderRef}>
        {testimonials?.map((item, index) => {
          return (
            <div className={styles.single} key={index} data-src={item.image}>
              <div>
                <Image src={item.image} width={150} height={150} alt={``} />
                <p>{item.testimony}</p>
                <h3>- {item.name}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className={styles.navigation}>
        <div onClick={previous}>
          <ArrowLeft />
        </div>
        <div onClick={next}>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
