"use client";
import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
      name: "Kathryn",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae, mollitia dolor voluptate officiis possimus commodi placeat quos nihil incidunt aperiam quae sint quaerat enim voluptatibus. In molestias mollitia doloremque.",
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
      <Slider {...settings}>
        {testimonials?.map((item, index) => {
          return (
            <div className={styles.single} key={index} data-src={item.image}>
              <div>
                <Image src={item.image} width={150} height={150} alt={``} />
                <p>{item.testimony}</p>
                <h3>-{item.name}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
