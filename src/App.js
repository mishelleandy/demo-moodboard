import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/App.scss";

function App() {
  const giedreImage = useRef();
  const imariImage = useRef();

  useEffect(() => {
    // let giedreImagePosition = giedreImage.current.offsetTop;
    // let imariImagePosition = imariImage.current.offsetTop;
    // window.addEventListener("scroll", () => {
    //   let scrollPosition = window.pageYOffset;
    //   if (scrollPosition > giedreImagePosition) {
    //     giedreImage.current.style.transform = `translateY(${
    //       (scrollPosition - 200) * 0.1
    //     }px)`;
    //   }
    //   if (scrollPosition > imariImagePosition) {
    //     imariImage.current.style.transform = `translateY(${
    //       (scrollPosition - imariImagePosition - 400) * 0.1
    //     }px)`;
    //   }
    // });

    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.intersectionRatio);
          if (entry.intersectionRatio > 0.1)
            entry.target.classList.add("animation");
        } else entry.target.classList.remove("animation");
      });
    }, options);

    giedreImage.current && observer.observe(giedreImage.current);
    imariImage.current && observer.observe(imariImage.current);

  }, []);

  return (
    <div>
      <section className="hero-wrapper">
        <img src="./assets/hero.jpg" alt="" />
        <h1 className="heading">Go to the moon</h1>
      </section>
      <section className="title-wrapper">
        <h2 className="title">Over the moon*</h2>
        <p className="subtitle">
          Quatre inconnus se rencontrent dans un ascenseur pour la Lune.
        </p>
      </section>
      <section ref={giedreImage} className="image-wrapper">
        <img
          className="image-parallax"
          srcSet="./assets/giedre-mobile.jpg 640w, ./assets/giedre.jpg 1280w"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          alt=""
        />
      </section>
      <section className="overflow" />
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className="slider-wrapper"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, type: "fraction" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <h3 className="title">Première rock pink blossom</h3>
            <p className="subtitle">
              La PREMIÈRE ROCK ose le rose avec sa chaîne en acier entrelacée de
              cuir pastel. En édition limitée.
            </p>
            <a href="#" className="link">
              Découvez
            </a>
          </div>
          <div>
            <img className="slider-image" src="./assets/slider-1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h3 className="title">Première rock pink blossom</h3>
            <p className="subtitle">
              La PREMIÈRE ROCK ose le rose avec sa chaîne en acier entrelacée de
              cuir pastel. En édition limitée.
            </p>
            <a href="#" className="link">
              Découvez
            </a>
          </div>
          <div>
            <img className="slider-image" src="./assets/slider-2.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <a href="#" className="button">
        Découvrir la collection
      </a>
      <section ref={imariImage} className="image-wrapper">
        <img
          className="image-parallax"
          srcSet="./assets/imari-mobile.jpg 640w, ./assets/imari.jpg 1280w"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          alt=""
        />
      </section>
      <section className="overflow" />
      <section className="title-wrapper">
        <h2 className="title">Découvrir les pièces en boutique</h2>
        <p className="subtitle">
          Découvrir les nouvelles pièces dans votre boutique CHANEL.
        </p>
      </section>
      <a href="#" className="button">
        Trouvez votre boutique
      </a>
    </div>
  );
}

export default App;
