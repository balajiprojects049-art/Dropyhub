import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './AboutPage.css';

const milestones = [
    { year: '2023', event: 'DropyHub Founded in Hyderabad with a vision to empower delivery executives' },
    { year: '2024', event: 'Expanded to 12+ cities across South India with 3,000+ active delivery partners' },
    { year: '2024', event: 'Launched Vehicle Rental Programme and Financial Loan Services' },
    { year: '2025', event: 'Official Partnership with Sunrisers Hyderabad for IPL 2025' },
    { year: '2025', event: 'Launched IT Training Programme for career transition pathways' },
];

const values = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Integrity',
        desc: 'Zero hidden fees, zero false promises. What we say is what we do.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg>,
        title: 'Partner First',
        desc: 'Every decision we make is with the delivery executive at the center.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        title: 'Growth',
        desc: 'We invest in your career — from delivery to IT, we support every step.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        title: 'Community',
        desc: 'Building a network of professionals who support and lift each other.',
    },
];

const AboutPage = () => (
    <>
        <PageHero
            tag="About DropyHub"
            title="Logistics Reimagined."
            subtitle="We are building India's most reliable, empowering, and scalable delivery network from the ground up."
            breadcrumb={['Home', 'About Us']}
            imageSrc="/about_hero.png"
            imageLightSrc="/about_hero_light.png"
        />

        {/* Mission & Vision */}
        <section className="about-pg section">
            <div className="container">
                <div className="about-pg__mv-grid">
                    <div className="about-pg__mv-card glass-card">
                        <div className="about-pg__mv-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        </div>
                        <div className="about-pg__mv-tag">Our Mission</div>
                        <h2 className="about-pg__mv-title">Empower Every<br /><span className="gradient-text">Delivery Executive</span></h2>
                        <p className="about-pg__mv-desc">
                            To provide every delivery partner with the tools, financial support, and career development needed to build a stable, prosperous, and dignified livelihood — not just a job.
                        </p>
                    </div>
                    <div className="about-pg__mv-card glass-card">
                        <div className="about-pg__mv-icon" style={{ background: 'rgba(21,101,192,0.12)', borderColor: 'rgba(21,101,192,0.3)', color: 'var(--cyan)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                        <div className="about-pg__mv-tag" style={{ color: 'var(--cyan)', background: 'rgba(21,101,192,0.1)', borderColor: 'rgba(21,101,192,0.3)' }}>Our Vision</div>
                        <h2 className="about-pg__mv-title">India's Leading<br /><span className="gradient-text">Logistics Network</span></h2>
                        <p className="about-pg__mv-desc">
                            To become India's most trusted and comprehensive platform for delivery professionals — connecting partners to opportunities, companies, and careers across every major city.
                        </p>
                    </div>
                </div>

                {/* Story */}
                <div className="about-pg__story">
                    <div className="about-pg__story-content">
                        <div className="section-tag">The DropyHub Story</div>
                        <h2 className="section-title">Built from the Ground Up — <span className="gradient-text">For Partners</span></h2>
                        <div className="divider-glow" />
                        <p className="section-sub" style={{ marginBottom: '20px' }}>
                            DropyHub was born from a simple observation: delivery executives were working incredibly hard but were underserved — low pay, high stress, zero career mobility, and no financial safety net.
                        </p>
                        <p className="section-sub">
                            Our founders decided to fix that. By building a platform that connects partners to multiple delivery companies, we eliminated the single-company dependency and created a true professional ecosystem with real benefits, real support, and real growth.
                        </p>
                        <div className="about-pg__partner-logos">
                            <div className="about-pg__partner-track">
                                {[
                                    { name: 'Swiggy', src: '/logos/swiggy1.png' },
                                    { name: 'Swiggy Instamart', src: '/logos/swiggy_instamart.png' },
                                    { name: 'Zomato', src: '/logos/zomato.png' },
                                    { name: 'Blinkit', src: '/logos/blinkit.png' },
                                    { name: 'Zepto', src: '/logos/zepto.png' },
                                    { name: 'Uber', src: '/logos/uber.png' },
                                    { name: 'Flipkart Minutes', src: '/logos/flipkart_minutes.png' },
                                    { name: 'Flipkart', src: '/logos/flipkart.png' }
                                ].concat([
                                    { name: 'Swiggy', src: '/logos/swiggy1.png' },
                                    { name: 'Swiggy Instamart', src: '/logos/swiggy_instamart.png' },
                                    { name: 'Zomato', src: '/logos/zomato.png' },
                                    { name: 'Blinkit', src: '/logos/blinkit.png' },
                                    { name: 'Zepto', src: '/logos/zepto.png' },
                                    { name: 'Uber', src: '/logos/uber.png' },
                                    { name: 'Flipkart Minutes', src: '/logos/flipkart_minutes.png' },
                                    { name: 'Flipkart', src: '/logos/flipkart.png' }
                                ]).map((b, i) => (
                                    <span key={i} className="about__tag">
                                        <img src={b.src} alt={b.name} className="about__tag-logo" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="about-pg__timeline">
                        <div className="about-pg__timeline-title">Our Journey</div>
                        {milestones.map((m, i) => (
                            <div key={i} className="about-pg__milestone">
                                <div className="about-pg__milestone-year">{m.year}</div>
                                <div className="about-pg__milestone-dot" />
                                <div className="about-pg__milestone-text">{m.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Values */}
        <section className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="section-tag">Core Values</div>
                    <h2 className="section-title">What We <span className="gradient-text">Stand For</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                </div>
                <div className="about-pg__values-grid">
                    {values.map(v => (
                        <div key={v.title} className="about-pg__value-card glass-card">
                            <div className="about-pg__value-icon">{v.icon}</div>
                            <h3 className="about-pg__value-title">{v.title}</h3>
                            <p className="about-pg__value-desc">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Ready to Be Part of the <span className="gradient-text">DropyHub Family?</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 32px' }}>
                    Zero registration fee. Real earnings. A career worth building.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/apply" className="btn-primary">
                        Apply Now — Free
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/services" className="btn-outline">Explore Services</Link>
                </div>
            </div>
        </section>
    </>
);

export default AboutPage;
