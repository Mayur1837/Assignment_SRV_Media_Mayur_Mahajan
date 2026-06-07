import "./schools-section-roll.css";

import harrowInternational from "../assets/ParticipatingSchools/harrow-international-school.jpg";
import shrewsburyInternational from "../assets/ParticipatingSchools/shrewsbury-international-school.jpg";
import kingsCollege from "../assets/ParticipatingSchools/kings-college.jpg";
import woodstockSchool from "../assets/ParticipatingSchools/woodstock-school.png";
import agaKhanAcademy from "../assets/ParticipatingSchools/aga-khan-academy.png";
import hopetownGirls from "../assets/ParticipatingSchools/hopetown.png";
import tisb from "../assets/ParticipatingSchools/TISB.png";


const SCHOOLS = [
  { name: "Harrow International School", url: harrowInternational },
  { name: "Shrewsbury International School", url: shrewsburyInternational },
  { name: "King's College India", url: kingsCollege },
  { name: "Woodstock School", url: woodstockSchool },
  { name: "The Aga Khan Academy, Mombasa", url: agaKhanAcademy },
  { name: "Hopetown Girls' School", url: hopetownGirls },
  { name: "TIBS", url: tisb },
];

function Row({ schools, reverse = false, ariaLabel }) {
  const items = [...schools, ...schools];

  return (
    <ul
      className={`schools__row${reverse ? " schools__row--reverse" : ""}`}
      role="list"
      aria-label={ariaLabel}
    >
      {items.map((school, index) => (
        <li
          key={`${school.name}-${index}`}
          className="schools__card"
          tabIndex={0}
        >
          <img
            className="schools__logo"
            src={school.url}
            alt={`${school.name} logo`}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}

export default function SchoolsSectionRoll() {
  return (
    <section
      className="schools"
      aria-labelledby="participating-schools-title"
    >
      <div className="schools__inner">
        <h2 id="participating-schools-title" className="schools__title">
          Participating Schools
        </h2>

        <div
          className="schools__viewport"
          role="region"
          aria-roledescription="carousel"
          aria-label="Participating schools logos"
        >
          <Row
            schools={SCHOOLS}
            ariaLabel="Participating schools, row 1"
          />

          <Row
            schools={SCHOOLS}
            reverse={true}
            ariaLabel="Participating schools, row 2"
          />
        </div>
      </div>
    </section>
  );
}