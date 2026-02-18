// src/components/Contact.jsx
import React, { useEffect, useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const logo =
    "https://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const closeModal = () => {
    setModalOpen(false);
    setSecondsLeft(5);
  };

  // Countdown + auto-close
  useEffect(() => {
    if (!modalOpen) return;

    setSecondsLeft(5);

    const tick = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(tick);
          closeModal();
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    const onEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      clearInterval(tick);
      window.removeEventListener("keydown", onEsc);
    };
  }, [modalOpen]);

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: connect to real backend/email service.
    // For now, show success modal.
    setModalOpen(true);

    // Reset form
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="contactSection">
      <div className="contactContainer">
        <h2 className="contactTitle">დაგვიკავშირდით</h2>
        <div className="contactDivider" />

        <div className="contactGrid">
          {/* LEFT */}
          <aside className="contactLeft">
            <img className="contactLogo" src={logo} alt="Gezegen Havuz" />

            <div className="contactInfo">
              <div className="infoRow">
                <span className="infoIcon">📍</span>
                <div>
                  <div className="infoHead">Adres:</div>
                  <div>Ösolomon Dodashvili 15 kvareli, 4800, Georgia</div>
                  <div>Kvareli / Georgia</div>
                </div>
              </div>

              <div className="infoRow">
                <span className="infoIcon">📞</span>
                <div>
                  <div className="infoHead">Telefon:</div>
                  <a className="infoLink" href="tel:+905336501604">
                    +994 51 381 18 01{" "}
                  </a>
                  <br />
                  <a className="infoLink" href="tel:+904623258796">
                    +90 462 325 87 96
                  </a>
                </div>
              </div>

              <div className="infoRow">
                <span className="infoIcon">✉️</span>
                <div>
                  <div className="infoHead">E-Mail:</div>
                  <a className="infoLink" href="mailto:info@gezegenhavuz.com">
                    info@gezegenhavuz.com
                  </a>
                  <br />
                  <a
                    className="infoLink"
                    href="https://www.gezegenhavuz.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.gezegenhavuz.com
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <form className="contactForm" onSubmit={onSubmit}>
            <div className="row2">
              <label className="field">
                <span>
                  თქვენი სახელი <b className="req">*</b>
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="სახელი და გვარი"
                  required
                />
              </label>

              <label className="field">
                <span>
                  ტელეფონი <b className="req">*</b>
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
              </label>
            </div>

            <label className="field">
              <span>ელ-ფოსტა</span>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
              />
            </label>

            <label className="field">
              <span>თქვენი შეტყობინება</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={8}
              />
            </label>

            <button className="contactBtn" type="submit">
              შეტყობინების გაგზავნა
            </button>
          </form>
        </div>
      </div>

      {modalOpen && (
        <div className="modalBackdrop" onClick={closeModal}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <div className="modalIcon" aria-hidden="true">
              ✓
            </div>

            <h3 className="modalTitle">Mesajınız Gönderildi</h3>
            <p className="modalText">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>

            <div className="modalTimer">
              Kapanıyor: <b>{secondsLeft}</b> sn
            </div>

            <button className="modalBtn" type="button" onClick={closeModal}>
              Kapat
            </button>
          </div>
        </div>
      )}
      <div className="contactMap">
        <iframe
          src="https://www.google.com/maps?q=41.9543318,45.813161&z=15&output=embed"
          loading="lazy"
          allowFullScreen
          title="map"
        />
      </div>
    </section>
  );
}
