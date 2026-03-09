import React from 'react';
import PageHero from '../components/PageHero';
import './WarehousePage.css';

const WarehousePage = () => {
    const facilities = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Workforce Deployment',
            desc: "Strategic manpower supply for major logistics giants. We bridge the gap between skilled labor and global fulfillment centers like Flipkart and Amazon."
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'Real-time Operations',
            desc: "Our employees are trained to handle complex warehouse management systems, ensuring seamless inventory flow and accurate dispatching."
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Safe Standards',
            desc: "Safety is our priority. Every employee we supply is vetted and adheres to the highest safety standards required by tier-1 logistics hubs."
        }
    ];

    return (
        <div className="warehouse-page">
            <PageHero
                tag="Logistic Hubs"
                title="Supplying Talent to"
                highlight="Logistics Giants."
                subtitle="We empower the backend operations of India's biggest e-commerce platforms with elite workforce and reliable infrastructure."
                breadcrumb={['Home', 'Warehouse']}
                imageSrc="/indian_warehouse.png"
            />

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
                        <div className="section-tag">Tier-1 Partnerships</div>
                        <h2 className="section-title">Fueling the Engines of <span className="gradient-text">E-Commerce</span></h2>
                        <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                        <p className="section-sub" style={{ fontSize: '1.2rem' }}>
                            DropyHub is a trusted partner for leaders like <strong>Flipkart</strong> and <strong>Amazon</strong>.
                            We don’t just supply labor; we build the specialized workforce that keeps the world’s largest supply chains moving efficiently.
                        </p>
                    </div>

                    <div className="warehouse-grid">
                        {facilities.map((item, i) => (
                            <div key={i} className="warehouse-card glass-card">
                                <div className="warehouse-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="client-logos">
                        <span className="client-logo">FLIPKART</span>
                        <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>•</span>
                        <span className="client-logo">AMAZON</span>
                        <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>•</span>
                        <span className="client-logo">E-CART</span>
                    </div>
                </div>
            </section>

            {/* Transport Section */}
            <section className="section section-alt transport-section">
                <div className="container">
                    <div className="transport-flex">
                        <div className="transport-image">
                            <img src="/indian_warehouse.png" alt="Employee Transportation Bus" />
                            <div className="glow-orb" style={{ top: '50%', right: '0', transform: 'translateX(50%)' }} />
                        </div>
                        <div className="transport-content">
                            <div className="section-tag">Zero Hassle Commute</div>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>
                                Dedicated <span className="gradient-text">Bus Transportation</span>
                            </h2>
                            <p className="section-sub" style={{ textAlign: 'left', marginLeft: '0', maxWidth: '100%', fontSize: '1.15rem' }}>
                                We believe that a productive employee is one who reaches work refreshed and safe.
                                For our workforce stationed at Amazon and Flipkart fulfillment centers, we provide
                                <strong> premium shuttle bus services</strong>.
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                marginTop: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}>
                                {[
                                    { title: 'Safe Commute', desc: 'Secure, clean, and reliable shuttle services for all shifts.' },
                                    { title: 'Punctual Dispatch', desc: 'Strict timing for pickup and drop to ensure zero operational delays.' },
                                    { title: 'GPS Tracking', desc: 'Real-time vehicle tracking for employee safety and transparency.' }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ color: 'var(--accent-orange)', marginTop: '4px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <div>
                                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px', fontSize: '1.1rem' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Join Our <span className="gradient-text">Hub Network</span></h2>
                    <p className="section-sub" style={{ margin: '16px auto 32px' }}>
                        Ready to work with the biggest names in logistics? Start your journey with DropyHub today.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <a href="/apply" className="btn-primary">Apply as Executive</a>
                        <a href="/contact" className="btn-outline">Contact Sales</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WarehousePage;
