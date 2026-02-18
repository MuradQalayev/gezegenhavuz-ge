import {  Navigate, NavLink,Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const logoUrl =
    "http://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png";

  return (
    <header className="siteHeader">
      <div className="topRow container">
        <div className="slogan">
          <div>თქვენ მხოლოდ წარმოიდგინეთ!</div>
          <div>ბუნებრიობა, დიზაინი და რა თქმა უნდა</div>
          <div>ემოცია — ჩვენგან...</div>
        </div>

        
        <Link to={"/"} className="logoWrap">
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
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ჩვენი სერვისები
          </NavLink>
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

      <div className="langRow container">
        <span className="langLabel">აირჩიეთ ენა:</span>
        <button className="flagBtn" type="button">
          <a
            href="https://www.gezegenhavuz.com/"
            className="flagBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            🇹🇷
          </a>
        </button>

        <button className="flagBtn" type="button">
          <a
            href="https://www.en.gezegenhavuz.com/"
            className="flagBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            🇬🇧
          </a>
        </button>
      </div>
    </header>
  );
}
