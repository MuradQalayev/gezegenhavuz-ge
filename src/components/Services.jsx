import { Link } from "react-router-dom";
import { services } from "../data/serv";
import "../styles/allservices.css";

export default function Services() {
  return (
    <section className="servicesPage">
      <h1 className="servicesTitle">ჩვენი მომსახურების სფეროები</h1>

      <div className="servicesCards">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="serviceCardLink"
          >
            <article className="serviceCard2">
              <div className="serviceImgWrap">
                <img src={s.hero} alt={s.title} />
                <div className="serviceImgOverlay">
                  <h3>{s.title}</h3>
                </div>
              </div>

              <div className="serviceDescRow">
                <p>{s.short}</p>
                <span className="serviceArrow">›</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
