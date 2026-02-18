import React from "react";
import "../styles/cookies.css";

export default function CookieBanner({ onAccept, onReject }) {
  return (
    <div className="cookieBar" role="dialog" aria-live="polite">
      <div className="cookieText">
        This website uses cookies to display Google Maps and YouTube videos.
      </div>

      <div className="cookieActions">
        <button className="cookieBtn ghost" onClick={onReject} type="button">
          Reject
        </button>
        <button className="cookieBtn" onClick={onAccept} type="button">
          Accept
        </button>
      </div>
    </div>
  );
}

