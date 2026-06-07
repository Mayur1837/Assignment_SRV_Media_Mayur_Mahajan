



import { useEffect, useState } from "react";
import logo from "@/assets/pse-logo.png";
import "./site.css";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      role="banner"
    >
      <a className="site-header__skip" href="#main-content">
        Skip to content
      </a>
      <div className="site-header__inner">
        <a
          href="/"
          className="site-header__logo"
          aria-label="Premier Schools Exhibition — Home"
        >
          <img src={logo} alt="Premier Schools Exhibition, 22nd Edition" />
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          <a className="site-header__cta" href="#register">
            <span className="site-header__cta-arrow" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="site-header__cta-label">
              {scrolled ? "Register Now" : "REGISTER NOW"}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
