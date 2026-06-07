import "./stats.css";
import laurelWreath from "@/assets/laurel-wreath.png";

const STATS = [
  { line1: "Trusted by", line2: "1 Million+", line3: "Parents", boldLine: 2 },
  { line1: "22+", line2: "Years", line3: "of Legacy", boldLine: 1 },
  { line1: "500+", line2: "Participating", line3: "Schools", boldLine: 1 },
  { line1: "17 Cities", line2: "Across the", line3: "Globe", boldLine: 1 },
];

export function StatsSection() {
  return (
    <section className="stats" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="stats__visually-hidden">
        Our impact in numbers
      </h2>

      <ul className="stats__list" role="list">
        {STATS.map((stat, idx) => (
          <li key={idx} className="stats__item">
            <div className="stats__wreath">
              <img
                src={laurelWreath}
                alt=""
                aria-hidden="true"
                className="stats__wreath-img"
                width={240}
                height={240}
                loading="lazy"
              />

              <p className="stats__text">
                <span
                  className={`stats__line${
                    stat.boldLine === 1 ? " stats__line--bold" : ""
                  }`}
                >
                  {stat.line1}
                </span>

                <span
                  className={`stats__line${
                    stat.boldLine === 2 ? " stats__line--bold" : ""
                  }`}
                >
                  {stat.line2}
                </span>

                <span
                  className={`stats__line${
                    stat.boldLine === 3 ? " stats__line--bold" : ""
                  }`}
                >
                  {stat.line3}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}