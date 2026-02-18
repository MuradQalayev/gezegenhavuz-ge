import { useEffect, useState } from "react";
import "../styles/preloader.css";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hide ? "preloaderHide" : ""}`}>
      <img
        src="https://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png"
        alt="logo"
        className="preloaderLogo"
      />
    </div>
  );
}
