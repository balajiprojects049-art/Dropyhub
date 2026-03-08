import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            {/* Background mesh/orbs */}
            <div className="hero__orb hero__orb--pink" />
            <div className="hero__orb hero__orb--blue" />
            <div className="hero__grid" />

            <div className="container hero__inner">
                {/* Left: Content */}
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

                    {/* Stats Row */}
                    <div className="hero__stats">
                        {[
                            { num: '5000+', label: 'Active Partners' },
                            { num: '12+', label: 'Cities Covered' },
                            { num: '₹10L', label: 'Max Loan Limit' },
                            { num: '100%', label: 'Free to Join' },
                        ].map(s => (
                            <div key={s.label} className="hero__stat">
                                <div className="hero__stat-num">{s.num}</div>
                                <div className="hero__stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Visual Card */}
                <div className="hero__visual">
                    <div className="hero__card glass-card float-anim">
                        <div className="hero__card-header">
                            <img src="/logo.png" alt="DropyHub" className="hero__card-logo" />
                            <div className="hero__card-badge">Hiring Now</div>
                        </div>

                        <div className="hero__card-title">Start Earning Today</div>
                        <p className="hero__card-desc">
                            Delivery Partner Programme — Earn weekly bonuses, get vehicle on rent, and grow your career.
                        </p>

                        <div className="hero__card-perks">
                            {[
                                { icon: '✦', text: 'Zero Registration Fee' },
                                { icon: '✦', text: 'Weekly Bonus Payouts' },
                                { icon: '✦', text: 'Vehicle Rental Support' },
                                { icon: '✦', text: 'Salary + Incentives' },
                                { icon: '✦', text: 'Financial Loans up to ₹10L' },
                                { icon: '✦', text: 'IT Career Pathway' },
                            ].map(p => (
                                <div key={p.text} className="hero__card-perk">
                                    <span className="perk-icon">{p.icon}</span>
                                    <span>{p.text}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/apply" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                            Apply Now — It's Free
                        </Link>

                        {/* SRH pill inside card */}
                        <Link to="/partnership" className="hero__card-srh">
                            🟠 🏏 Sunrisers Hyderabad Official Partner
                        </Link>
                    </div>

                    {/* Floating chips */}
                    <div className="hero__chip hero__chip--1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        Insured Rides
                    </div>
                    <div className="hero__chip hero__chip--2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        Multi-Company Access
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
