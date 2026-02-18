import { Link, useParams, Navigate } from "react-router-dom";
import { services } from "../data/serv";
import "../styles/serviceDetails.css";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const current = services.find((s) => s.slug === slug);

  if (!current) return <Navigate to="/services" replace />;

  return (
    <section className="detailWrap">
      <div className="detailGrid">
        <aside className="detailSidebar">
          <h3 className="sideTitle">HİZMETLERİMİZ</h3>
          <nav className="sideNav">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`sideLink ${s.slug === slug ? "active" : ""}`}
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="detailMain">
          <h1 className="detailTitle">{current.title}</h1>

          <div className="detailHero">
            <img src={current.hero} alt={current.title} />
          </div>

          <h2 className="detailH2">{current.contentTitle}</h2>
          <p className="detailP">{current.content}</p>
        </main>
      </div>
    </section>
  );
}
