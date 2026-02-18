import React, { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaHandshake,
  FaTools,
  FaVial,
  FaBroom,
  FaClock,
} from "react-icons/fa";
import "../styles/whyus.css";

const items = [
  {
    icon: <FaAward />,
    title: "ხარისხის უპირატესობა",
    text: "ინოვაციური და კრეატიული მიდგომებით ვახორციელებთ ჩვენს საქმიანობას. გარემოს, შრომის უსაფრთხოებისა და ხარისხის მართვის სისტემებთან სრულ ინტეგრაციაში ვქმნით გამძლე და გამორჩეულ პროექტებს.",
  },
  {
    icon: <FaHandshake />,
    title: "კმაყოფილების გარანტია",
    text: "პროექტის შეთანხმებიდან დაწყებული, როგორც შესრულების, ისე ჩაბარების შემდგომ ეტაპებამდე მომხმარებლის კმაყოფილება ჩვენი მთავარი პრიორიტეტია.",
  },
  {
    icon: <FaTools />,
    title: "მოვლა და რემონტი",
    text: "ჩვენი სამუშაოების დასრულების შემდეგაც გთავაზობთ საჭირო მომსახურებას — გარანტიის პერიოდში და მის შემდეგაც.",
  },
  {
    icon: <FaVial />,
    title: "პროდუქციის მიწოდება",
    text: "აუზის აღჭურვილობა და ქიმიური საშუალებები, ასევე ყველა საჭირო კომპონენტი, ყოველთვის ხელმისაწვდომია ჩვენი მხრიდან.",
  },
  {
    icon: <FaBroom />,
    title: "მარტივი გამოყენება",
    text: "ჩვენი სერვისები შექმნილია ისე, რომ მაქსიმალურად კომფორტული და სასიამოვნო იყოს მომხმარებლისთვის.",
  },
  {
    icon: <FaClock />,
    title: "დროული მომსახურება",
    text: "ხარისხთან და ვიზუალურ სრულყოფასთან ერთად, სამუშაოების დროულად შესრულება ჩვენი მთავარი უპირატესობებია.",
  },
];


export default function Whyus() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // animate once
        }
      },
      { threshold: 0.2 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="whySection">
      <div className="whyContainer">
        <h2 className={`whyTitle ${visible ? "in" : ""}`}>
          NEDEN GEZEGEN HAVUZ?
        </h2>
        <div className={`whyDivider ${visible ? "in" : ""}`} />

        <div className="whyGrid">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`whyCard ${visible ? "in" : ""}`}
              style={{ transitionDelay: `${idx * 120}ms` }} 
            >
              <div className="whyIconWrap">{it.icon}</div>
              <h3 className="whyCardTitle">{it.title}</h3>
              <p className="whyText">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
