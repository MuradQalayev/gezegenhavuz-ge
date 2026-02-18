import { Waves, Wind, Shovel } from "lucide-react";
import "../styles/services.css";

const items = [
  {
    Icon: Waves,
    title: "აუზის სისტემები",
    desc: "თქვენს საჭიროებებზე მორგებულ აუზის სისტემებს ვამზადებთ ვიზუალური სიმდიდრით და, რაც ყველაზე მნიშვნელოვანია, სრულად ფუნქციური გადაწყვეტით.",
  },
  {
    Icon: Wind,
    title: "ფონტანის სისტემები",
    desc: "თქვენი ბაღის ერთ კუთხეში შეხვდით ჩვენს ფონტანის სისტემებს, რომლებიც ერთდროულად სიმშვიდეს მიანიჭებს როგორც თვალს, ისე თქვენს განწყობას.",
  },
  {
    Icon: Shovel,
    title: "ქვის ხალიჩის სისტემები",
    desc: "გაიცანით სისტემა, რომელიც ზედაპირს სრულიად ახალ ხედვას აძლევს — გამძლე, ვიზუალურად მიმზიდველი და გამოყენების უსაზღვრო შესაძლებლობებით.",
  },
];


export default function ServicesStrip() {
  return (
    <section className="servicesSection">
      <div className="servicesGrid">
        {items.map(({ Icon, title, desc }, idx) => (
          <div
            className="serviceCard"
            key={title}
            data-aos="fade-up"
            data-aos-delay={idx * 120} 
          >
            <div className="iconCircle">
              <Icon className="serviceIcon" />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
