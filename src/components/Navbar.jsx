import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import { services } from "../data/serv";

export default function Navbar() {
  const logoUrl =
    "http://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png";

  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const closeDropdown = () => setServicesOpen(false);

  return (
    <header className="siteHeader">
      <div className="topRow container">
        <div className="slogan">
          <div>თქვენ მხოლოდ წარმოიდგინეთ!</div>
          <div>ბუნებრიობა, დიზაინი და რა თქმა უნდა</div>
          <div>ემოცია — ჩვენგან...</div>
        </div>

        <Link to="/" className="logoWrap">
          <img className="logo" src={logoUrl} alt="Gezegen Havuz" />
        </Link>

        <div className="contact">
          <div className="contactItem">
            <span className="icon">📞</span>
            <span>+994 51 381 18 01</span>
          </div>
          <div className="contactItem">
            <span className="icon">✉️</span>
            <span>info@gezegenhavuz.com</span>
          </div>
        </div>
      </div>

      <nav className="navRow">
        <div className="container navLinks">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            მთავარი
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ჩვენს შესახებ
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className={`navDropdown ${servicesOpen ? "open" : ""}`}
            ref={dropdownRef}
          >
            {/* Desktop hover uses CSS, Mobile uses button */}
            <button
              type="button"
              className="navLink navDropdownBtn"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              ჩვენი სერვისები <span className="chev">▾</span>
            </button>

            <div className="dropdownMenu" role="menu">
              <NavLink
                to="/services"
                className="dropdownItem"
                onClick={closeDropdown}
              >
                ყველა სერვისი
              </NavLink>

              {services.map((s) => (
                <NavLink
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={({ isActive }) =>
                    `dropdownItem ${isActive ? "activeDrop" : ""}`
                  }
                  onClick={closeDropdown}
                >
                  {s.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ფოტო გალერეა
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            კონტაქტი
          </NavLink>
        </div>
      </nav>

      {/* IMPORTANT: don’t nest <a> inside <button> */}
      <div className="langRow container">
        <span className="langLabel">აირჩიეთ ენა:</span>

        <a
          href="https://www.gezegenhavuz.com/"
          className="flagBtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🇹🇷
        </a>

        <a
          href="https://www.en.gezegenhavuz.com/"
          className="flagBtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🇬🇧
        </a>
      </div>
    </header>
  );
}
