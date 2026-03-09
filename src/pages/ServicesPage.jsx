import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';

const ServicesPage = () => (
    <>
        <PageHero
            tag="What We Offer"
            title="Our"
            highlight="Services"
            subtitle="From financial loans and vehicle rentals to career training and bonus programmes — DropyHub is your complete professional support system."
            breadcrumb={['Home', 'Services']}
            imageSrc="/services_hero.png"
        />
        <Services />
        <HowItWorks />

        {/* CTA */}
        <section className="section section-alt">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Access All These Services — <span className="gradient-text">At Zero Cost</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 32px' }}>
                    Every service listed above is accessible to registered DropyHub partners. Registration is free, always.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/apply" className="btn-primary">
                        Register Now — ₹0 Fee
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/benefits" className="btn-outline">View Benefits</Link>
                </div>
            </div>
        </section>
    </>
);

export default ServicesPage;
