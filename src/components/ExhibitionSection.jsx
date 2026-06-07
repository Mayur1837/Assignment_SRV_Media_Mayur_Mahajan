import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import "./exhibition-section.css";
import card1 from "@/assets/card1.svg";
import card2 from "@/assets/card2.svg";
import card3 from "@/assets/card3.svg";
import card4 from "@/assets/card4.svg";



const FEATURES = [
  {
    icon: card1,
    title: "Interact Directly with School Heads",
    desc: "Get answers straight from the experts",
  },
  {
    icon: card2,
    title: "Compare Curriculum & Pedagogy",
    desc: "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more",
  },
  {
    icon: card3,
    title: "Get Exclusive Fee Structures & Offers",
    desc: "Access transparent information and avail offers",
  },
  {
    icon: card4,
    title: "Explore Schools Offerings",
    desc: "Preview infrastructure, co-curricular, teaching methodology and culture",
  },
  {
    icon: card1,
    title: "On-the-Spot Counselling",
    desc: "Save time on applications with expert guidance",
  },

];

export function ExhibitionSection() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector(".exhibition__card");
    const step = card ? card.offsetWidth + 24 : 300;

    el.scrollBy({
      left: dir * step,
      behavior: "smooth",
    });
  };

  return (
    <section className="exhibition" aria-labelledby="exhibition-heading">
      <div className="exhibition__inner">
        <h2 id="exhibition-heading" className="exhibition__title">
          What Makes This Exhibition a Must-Visit
        </h2>

        <div className="exhibition__carousel">
          <ul
            className="exhibition__track"
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Exhibition highlights"
            tabIndex={0}
          >
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="exhibition__card">
                <span className="exhibition__icon" aria-hidden="true">
                  {/* <Icon size={32} strokeWidth={1.75} /> */}
                  <img src={Icon} alt={title} />
                </span>
                <h3 className="exhibition__card-title">{title}</h3>
                <p className="exhibition__card-desc">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="exhibition__controls"
          role="group"
          aria-label="Carousel controls"
        >
          <button
            type="button"
            className="exhibition__btn"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="exhibition__btn"
            onClick={() => scrollBy(1)}
            aria-label="Next"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="exhibition__curve" aria-hidden="true" />
    </section>
  );
}