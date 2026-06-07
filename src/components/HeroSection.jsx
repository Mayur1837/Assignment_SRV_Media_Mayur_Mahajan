import { useEffect, useRef, useState, useCallback } from "react";
import "./hero.css";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.png";
import h3 from "@/assets/hero-3.jpg";
import h4 from "@/assets/hero-4.png";
import h5 from "@/assets/hero-5.png";
import h6 from "@/assets/hero-6.png";
import h7 from "@/assets/hero-7.png";




const SLIDES = [
  {
    heading: "Discover Gurugram's",
    highlight: "Top 30+ Schools",
    subtitle: "ALL IN ONE PLACE",
    venue: "Apparel House",
    dates: "2-3 August 2025",
    meta: "Sec 44, Gurugram · Sat-Sun | 10AM - 6PM",
    columns: [
      [h1, h4, h1],
      [h2, h5, h7],
      [h3, h6, h3],

    ],
  },

];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = SLIDES.length;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(id);
  }, [paused, go]);

  const onKey = (e) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const slide = SLIDES[index];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Premier Schools Exhibition highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKey}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
    >
      <div className="hero__inner">
        <div
          className="hero__content"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${total}`}
        >
          <h1 className="hero__title">
            {slide.heading}
            <br />
            <span className="hero__title-accent">{slide.highlight}</span>
          </h1>

          <p className="hero__subtitle">{slide.subtitle}</p>

          <div className="hero__badge">
            <div className="hero__badge-row">
              <strong>{slide.venue}</strong>
              <span
                className="hero__badge-divider"
                aria-hidden="true"
              />
              <strong>{slide.dates}</strong>
            </div>
            <div className="hero__badge-meta">{slide.meta}</div>
          </div>


        </div>

        <div
          className="hero__columns"
          aria-hidden="true"
          aria-roledescription="vertical carousel"
        >
          {slide.columns.map((imgs, ci) => (
            <div key={ci} className={`hero__col hero__col--${ci}`}>
              <div className="hero__track">
                {[...imgs, ...imgs].map((src, ii) => (
                  <div className="hero__cell" key={ii}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="hero__form" aria-label="Enquire now">
          <h2 className="hero__form-title">Enquire Now</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="hero__field">
              <span className="sr-only">Parent's Name</span>
              <input
                type="text"
                placeholder="Parent's Name"
                required
              />
            </label>

            <label className="hero__field">
              <span className="sr-only">Phone number</span>
              <input
                type="tel"
                placeholder="Phone number"
                required
              />
            </label>

            <label className="hero__field">
              <span className="sr-only">
                Which grade are you looking for?
              </span>
              <input
                type="text"
                placeholder="Which grade are you looking for?"
              />
            </label>

            <button type="submit" className="hero__submit">
              SUBMIT
              <span
                aria-hidden="true"
                className="hero__submit-arrow"
              >
                →
              </span>
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}