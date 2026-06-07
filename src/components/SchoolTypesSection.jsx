import "./school-types-section.css";

import preschoolImg from "@/assets/school-preschool.png";
import k12Img from "@/assets/school-k12.jpg";
import heritageImg from "@/assets/school-heritage.png";
import internationalImg from "@/assets/school-international.png";
import preschedule from "@/assets/preschedule-parents.jpg";

const SCHOOL_TYPES = [
  {
    title: "Pre-Schools & Early Learning Centres",
    description: "Nurturing foundational skills for toddlers and pre-primary children.",
    image: preschoolImg,
  },
  {
    title: "K–12 CBSE Day Schools",
    description: "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
    image: k12Img,
  },
  {
    title: "Heritage to New-Age Schools",
    description: "Time-tested schools to innovative pedagogy, tech enabled, future-ready schools.",
    image: heritageImg,
  },
  {
    title: "International Curriculum Schools",
    description: "Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.",
    image: internationalImg,
  },
];

export function SchoolTypesSection() {
  return (
    <>
      <section
        className="school-types"
        aria-labelledby="school-types-title"
      >
        <div className="school-types__inner">
          <h2 id="school-types-title" className="school-types__title">
            Choose the School That Fits You Best
          </h2>
          {/* <div className="school-types__divider" aria-hidden="true"></div> */}

          <ul className="school-types__grid" role="list">
            {SCHOOL_TYPES.map((item) => (
              <li key={item.title} className="school-types__card" tabIndex={0}>
                <img
                  className="school-types__image"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  width={768}
                  height={768}
                />
                <div className="school-types__overlay" aria-hidden="true"></div>
                <div className="school-types__content">
                  <h3 className="school-types__card-title">{item.title}</h3>
                  <p className="school-types__card-desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* <div className="school-types__divider school-types__divider--bottom" aria-hidden="true"></div> */}
        </div>
      </section>

      <section
        className="preschedule"
        aria-labelledby="preschedule-title"
        style={{ backgroundImage: `url(${preschedule})` }}
      >
        <div className="preschedule__overlay" aria-hidden="true"></div>
        <div className="preschedule__inner">
          <p className="preschedule__eyebrow">Exciting Opportunities for Parents!</p>
          <h2 id="preschedule-title" className="preschedule__title">
            Pre-schedule Your<br />School Appointments
          </h2>
          <p className="preschedule__subtitle">To Avoid Rush</p>
          <a href="#pre-schedule" className="preschedule__cta">
            <span className="preschedule__cta-icon" aria-hidden="true">↗</span>
            <span className="preschedule__cta-label">PRE-SCHEDULE NOW</span>
          </a>
        </div>
      </section>
    </>
  );
}
