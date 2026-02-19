import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import { services } from "../data/serv";

export default function Navbar() {
  const logoUrl =
    "http://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png";

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      // close only services dropdown if clicked outside it
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="topRow container">
        <div className="slogan">
          <div>თქვენ მხოლოდ წარმოიდგინეთ!</div>
          <div>ბუნებრიობა, დიზაინი და რა თქმა უნდა</div>
          <div>ემოცია — ჩვენგან...</div>
        </div>

        <Link to="/" className="logoWrap" onClick={closeAll}>
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

      {/* MOBILE TOGGLE BUTTON (shows only on phone via CSS) */}
      <div className="container mobileBar">
        <button
          className="burger"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <nav className={`navRow ${menuOpen ? "mobileOpen" : ""}`}>
        <div className="container navLinks">
          <NavLink to="/" end onClick={closeAll}>
            მთავარი
          </NavLink>

          <NavLink to="/about" onClick={closeAll}>
            ჩვენს შესახებ
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className={`navDropdown ${servicesOpen ? "open" : ""}`}
            ref={dropdownRef}
          >
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
                onClick={closeAll}
              >
                ყველა სერვისი
              </NavLink>

              {services.map((s) => (
                <NavLink
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="dropdownItem"
                  onClick={closeAll}
                >
                  {s.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/gallery" onClick={closeAll}>
            ფოტო გალერეა
          </NavLink>

          <NavLink to="/contact" onClick={closeAll}>
            კონტაქტი
          </NavLink>
        </div>
      </nav>

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
