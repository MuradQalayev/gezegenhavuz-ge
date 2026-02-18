import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/hero.css";

export default function MainHero() {
const slides = [
  {
    img: "http://www.gezegenhavuz.com/wp-content/uploads/2021/06/yuzme-havuzu-10.jpg",
    title: "აუზის სიამოვნების ერთადერთი მისამართი",
    subtitle: "აუზის სერვისები",
    btnText: "ფასის შეთავაზების მიღება",
    btnLink: "/contact",
  },
  {
    img: "http://www.gezegenhavuz.com/wp-content/uploads/2021/06/naturel-havuz-24.jpg",
    title: "თანამედროვე დიზაინი, მაღალი ხარისხის შესრულება",
    subtitle: "ჩვენი პროექტები",
    btnText: "გალერეის ნახვა",
    btnLink: "/contact",
  },
    {
    img: "  http://www.gezegenhavuz.com/wp-content/uploads/2021/05/havuz-keyfi-1.jpg",
    title: "თანამედროვე დიზაინი, მაღალი ხარისხის შესრულება",
    subtitle: "ჩვენი პროექტები",
    btnText: "გალერეის ნახვა",
    btnLink: "/contact",
  },
];


  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="heroSwiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="heroSlide"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="heroOverlay" />

              <div className="heroContent">
                <h1>{s.title}</h1>
                <p>{s.subtitle}</p>
                <a className="heroBtn" href={s.btnLink}>
                  {s.btnText}
                </a>
              </div>
              <div className="heroWave" aria-hidden="true">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                  <path d="M0,64 C240,120 480,0 720,64 C960,128 1200,16 1440,64 L1440,120 L0,120 Z" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
