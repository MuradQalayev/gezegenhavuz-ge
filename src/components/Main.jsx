import React from 'react'
import MainHero from './MainHero'
import ServicesStrip from './ServicesStrip'
import Whyus from './Whyus'
import Gallery from './Gallery'
import '../styles/main.css'
import Services from './Services'


const Main = () => {
  return (
    <>
      <MainHero />
      <ServicesStrip />
      <Whyus />
      <Services />
      <Gallery />
      <a
        href="https://wa.me/+994513811801?text=Merhaba,%20bilgi%20almak%20istiyorum."
        className="whatsappFloat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </>
  );
}

export default Main