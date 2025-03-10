import React, { useEffect, useRef } from "react";
import { CLIENT_CAROUSEL } from "../../config";

const ClientsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;

    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      const totalScrollWidth = scrollContainer.scrollWidth;
      const currentScrollLeft = scrollContainer.scrollLeft;
      const visibleWidth = scrollContainer.offsetWidth;

      if (totalScrollWidth <= currentScrollLeft + visibleWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      className="w-[100vw] py-[60px] flex gap-x-40 overflow-hidden"
      style={{ scrollBehavior: "smooth" }}
      ref={carouselRef}
    >
      <div className="min-w-[100vw] flex justify-between ">
        {CLIENT_CAROUSEL.map((ele) => (
          <div key={ele.name}>
            <img src={ele.logo} alt={ele.name} />
          </div>
        ))}
      </div>
      <div className="min-w-[100vw] flex justify-between ">
        {CLIENT_CAROUSEL.map((ele) => (
          <div key={`${ele.name}1`}>
            <img src={ele.logo} alt={ele.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsCarousel;
