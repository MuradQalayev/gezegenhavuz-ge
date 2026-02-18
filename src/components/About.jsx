import "../styles/about.css";


export default function About({ cookieConsent }) {
  const logo =
    "http://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png";

  return (
    <section className="aboutSection">
      <h2 className="aboutTitle">ჩვენს შესახებ</h2>
      <div className="aboutDivider"></div>

      <div className="aboutText container">
        <p>
          თანამედროვე ცხოვრებას ფორმირებაში მონაწილე ინოვაციებზე დაყრდნობით,
          უკეთესი ცხოვრების სტანდარტების შექმნის მიზნით მოქმედი Gezegen Havuz,
          საშუალო და დიდი მასშტაბის პროექტების განვითარებაში, უახლესი
          ტექნოლოგიების დანერგვასა და სექტორის თანამედროვე დონეზე განვითარებაში
          მნიშვნელოვან როლს ასრულებს.
        </p>

        <p>
          ჩვენი კომპანია მუდმივად აკვირდება სფეროში მიმდინარე პროცესებსა და
          ბაზრის ახალ მოთხოვნებს და ძლიერი ადმინისტრაციული და ფინანსური რესურსის
          დახმარებით ინარჩუნებს წამყვანი კომპანიის პოზიციას.
        </p>

        <p>
          აღებული ვალდებულებების დროულად და მოსალოდნელზე მაღალი ხარისხით
          შესრულებამ კომპანიას მოუტანა სერიოზული რეპუტაცია და დამსახურებული
          ადგილი თავის სექტორში.
        </p>

        <p>
          Gezegen-ის გუნდი ყველა პროექტში იყენებს თანამედროვე მართვის მეთოდებს
          და უპირატესობას ანიჭებს ხარისხით დამტკიცებულ მასალასა და პროფესიონალურ
          შესრულებას.
        </p>

        <strong>პატივისცემით...</strong>
      </div>

      <div className="aboutBottom container">
        {cookieConsent === "accepted" ? (
          <div className="aboutVideo">
            <iframe
              width="100%"
              height="320"
              src="https://www.youtube.com/embed/lOv8mib4Omk?start=1"
              title="Gezegen Havuz"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="embedPlaceholder">
            Please accept cookies to view this content.
            <a
              className="embedLink"
              href="https://www.youtube.com/watch?v=lOv8mib4Omk"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
          </div>
        )}

        <div className="aboutLogo">
          <img src={logo} alt="Gezegen Havuz" />
        </div>
      </div>
    </section>
  );
}
