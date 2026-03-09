import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__bg-layer">
                <img src="/home_hero.jpg" alt="DropyHub Dark Hero" className="hero__bg-img hero__bg-img--dark" />
                <img src="/home_hero_light.png" alt="DropyHub Light Hero" className="hero__bg-img hero__bg-img--light" />
                <div className="hero__bg-overlay" />
            </div>

            <div className="container hero__inner">
                <div className="hero__content fade-up">
                    {/* SRH Badge */}
                    <div className="hero__srh-badge">
                        <div className="srh-badge__dot" />
                        <span>🏏 Official Partner — Sunrisers Hyderabad · IPL 2025</span>
                    </div>

                    <h1 className="hero__headline">
                        India's #1 Platform for<br />
                        <span className="gradient-text">Delivery Partners</span>
                    </h1>

                    <p className="hero__sub">
                        Join <strong>DropyHub</strong> and unlock stable income, career growth, vehicle support,
                        financial loans &amp; more — all with <em>absolutely Zero Registration Fee.</em>
                    </p>

                    {/* Zero Fee Highlight */}
                    <div className="hero__zero-badge">
                        <span className="zero-badge__icon">₹0</span>
                        <div>
                            <div className="zero-badge__title">Zero Registration Fee</div>
                            <div className="zero-badge__sub">No hidden charges. Ever.</div>
                        </div>
                    </div>

                    <div className="hero__actions">
                        <Link to="/apply" className="btn-primary">
                            Join as Delivery Partner
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/about" className="btn-outline">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-dot" />
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
