import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './HomePage.css';

const partners = ['Swiggy', 'Zomato', 'Amazon', 'Blinkit', 'Zepto', 'Uber', 'Meesho', 'Dunzo'];

const quickStats = [
    {
        num: '5,000+', label: 'Active Partners', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        )
    },
    {
        num: '12+', label: 'Cities Covered', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
        )
    },
    {
        num: '₹10L', label: 'Max Loan Available', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        )
    },
    {
        num: '₹0', label: 'Registration Fee', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        )
    },
];

const homeSections = [
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Zero Registration Fee',
        desc: 'Start your journey with no financial burden. Completely free to join, always.',
        link: '/services',
        linkLabel: 'View Services',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        title: 'Earn More, Grow More',
        desc: 'Salary + weekly bonuses + monthly awards. We invest in your success.',
        link: '/benefits',
        linkLabel: 'View Benefits',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
        title: 'Vehicle Rental Support',
        desc: 'Affordable 2W & 3W rentals with full maintenance. No ownership stress.',
        link: '/services',
        linkLabel: 'View Services',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
        title: 'SRH Official Partner',
        desc: 'Proud official partner of Sunrisers Hyderabad for IPL 2025 season.',
        link: '/partnership',
        linkLabel: 'View Partnership',
    },
];

const HomePage = () => (
    <>
        {/* Full-height hero */}
        <Hero />

        {/* Stats bar */}
        <div className="home-stats-bar">
            <div className="container home-stats-bar__inner">
                {quickStats.map(s => (
                    <div key={s.label} className="home-stats-bar__item">
                        <div className="home-stats-bar__icon">{s.icon}</div>
                        <div>
                            <div className="home-stats-bar__num">{s.num}</div>
                            <div className="home-stats-bar__label">{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Quick overview cards */}
        <section className="home-overview section">
            <div className="container">
                <div className="home-overview__header">
                    <div className="section-tag">Why DropyHub</div>
                    <h2 className="section-title">The Smarter Way to <span className="gradient-text">Deliver & Earn</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                </div>
                <div className="home-overview__grid">
                    {homeSections.map(card => (
                        <div key={card.title} className="home-overview__card glass-card">
                            <div className="home-overview__icon">{card.icon}</div>
                            <h3 className="home-overview__title">{card.title}</h3>
                            <p className="home-overview__desc">{card.desc}</p>
                            <Link to={card.link} className="home-overview__link">
                                {card.linkLabel}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Partners marquee strip */}
        <section className="home-partners section-alt" style={{ padding: '48px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <p className="home-partners__label">Connecting you with India's top delivery platforms</p>
                <div className="home-partners__track">
                    {[...partners, ...partners].map((p, i) => (
                        <div key={i} className="home-partners__item">{p}</div>
                    ))}
                </div>
            </div>
        </section>

        {/* SRH Teaser CTA */}
        <section className="home-srh-teaser section">
            <div className="container">
                <div className="home-srh-teaser__card glass-card">
                    <div className="home-srh-teaser__orb" />
                    <div className="home-srh-teaser__left">
                        <div className="home-srh-teaser__badge">
                            <div className="srh-badge__dot" style={{ background: '#FF6B00', boxShadow: '0 0 8px #FF6B00' }} />
                            IPL 2025 Official Partnership
                        </div>
                        <h2 className="home-srh-teaser__title">
                            DropyHub × <span className="gradient-text">Sunrisers Hyderabad</span>
                        </h2>
                        <p className="home-srh-teaser__desc">
                            We are the Official Partner of SRH for IPL 2025. This landmark partnership reflects our commitment to performance, excellence, and winning — for our partners and for the game.
                        </p>
                        <Link to="/partnership" className="btn-primary">
                            Explore Partnership
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                    <div className="home-srh-teaser__right">
                        <div className="home-srh-logo-ring">
                            <div className="home-srh-logo-inner">
                                <img src="/logo.png" alt="DropyHub" />
                            </div>
                            <div className="home-srh-ring home-srh-ring--1" />
                            <div className="home-srh-ring home-srh-ring--2" />
                        </div>
                        <div className="home-srh-ipl-text">🏏 Sunrisers Hyderabad<br /><span>Official Partner 2025</span></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Bottom CTA banner */}
        <section className="home-cta section-alt" style={{ padding: '72px 0' }}>
            <div className="container home-cta__inner">
                <div>
                    <h2 className="section-title">Ready to Start Earning?</h2>
                    <p className="section-sub">Join DropyHub today. Completely free registration. Instant access to top delivery companies.</p>
                </div>
                <div className="home-cta__actions">
                    <Link to="/apply" className="btn-primary">
                        Apply Now — ₹0 Fee
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/about" className="btn-outline">Know More</Link>
                </div>
            </div>
        </section>
    </>
);

export default HomePage;
