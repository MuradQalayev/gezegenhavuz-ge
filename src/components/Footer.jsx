import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent container">
        <div className="footerCol">
          <p>📍 Ösolomon Dodashvili 15 kvareli, 4800, Georgia</p>
          <p>Kvareli / Georgia</p>
          <p>🕒 08:00 – 20:00 </p>
        </div>

        <div className="footerCol center">
          <h2>GEZEGEN HAVUZ</h2>
        </div>

        <div className="footerCol right">
          <p>📞 +90 462 325 87 96</p>
          <p>📞 +90 533 650 16 04</p>
          <p>✉️ info@gezegenhavuz.com</p>
        </div>
      </div>

      <div className="footerBottom">© Gezegen Havuz. All rights reserved.</div>
    </footer>
  );
}
