import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Apply.css';

const Apply = () => {
    const [form, setForm] = useState({ name: '', phone: '', city: '', vehicle: '', experience: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="apply section section-alt" id="apply">
            <div className="container">
                <div className="apply__inner">
                    {/* Left */}
                    <div className="apply__info">
                        <div className="section-tag">Apply Now</div>
                        <h2 className="section-title">
                            Start Your Journey<br />
                            <span className="gradient-text">Today. For Free.</span>
                        </h2>
                        <div className="divider-glow" />
                        <p className="section-sub" style={{ marginBottom: '32px' }}>
                            Register as a DropyHub delivery partner and unlock a world of earning potential, career support,
                            and financial empowerment — at absolutely zero cost.
                        </p>

                        <div className="apply__benefits-list">
                            {[
                                'Zero Registration Fee — Always',
                                'Start Earning Within 48 Hours',
                                'Multi-Platform Partner Access',
                                'Insurance & Safety Gear Included',
                                'Financial Loans Available from Day 1',
                            ].map(item => (
                                <div key={item} className="apply__benefit-item">
                                    <div className="apply__check">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="apply__contact-strip">
                            <div className="apply__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.32 2 2 0 0 1 3.6 1.12h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.81 12.81 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
                                </svg>
                                <span>+91 80XXX XXXXX</span>
                            </div>
                            <div className="apply__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>partners@dropyhub.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="apply__form-wrap glass-card">
                        {submitted ? (
                            <div className="apply__success">
                                <div className="apply__success-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <h3>Application Received!</h3>
                                <p>Thank you, <strong>{form.name}</strong>. Our team will contact you within 24 hours to complete your onboarding.</p>
                                <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="apply__form">
                                <h3 className="apply__form-title">Join as Delivery Partner</h3>
                                <p className="apply__form-sub">Fill in your details and we'll get you started.</p>

                                <div className="apply__field">
                                    <label htmlFor="name">Full Name *</label>
                                    <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div className="apply__field">
                                    <label htmlFor="phone">Mobile Number *</label>
                                    <input id="phone" name="phone" type="tel" placeholder="+91 98XXX XXXXX" value={form.phone} onChange={handleChange} required />
                                </div>
                                <div className="apply__field">
                                    <label htmlFor="city">City *</label>
                                    <input id="city" name="city" type="text" placeholder="Hyderabad, Bangalore..." value={form.city} onChange={handleChange} required />
                                </div>
                                <div className="apply__row">
                                    <div className="apply__field">
                                        <label htmlFor="vehicle">Vehicle Type</label>
                                        <select id="vehicle" name="vehicle" value={form.vehicle} onChange={handleChange}>
                                            <option value="">Select...</option>
                                            <option value="own-bike">Own Bike</option>
                                            <option value="own-3w">Own 3-Wheeler</option>
                                            <option value="need-rental">Need Rental Vehicle</option>
                                        </select>
                                    </div>
                                    <div className="apply__field">
                                        <label htmlFor="experience">Experience</label>
                                        <select id="experience" name="experience" value={form.experience} onChange={handleChange}>
                                            <option value="">Select...</option>
                                            <option value="0-6m">0–6 months</option>
                                            <option value="6-12m">6–12 months</option>
                                            <option value="1-3yr">1–3 years</option>
                                            <option value="3yr+">3+ years</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary apply__submit">
                                    Apply Now — It's Completely Free
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                                <p className="apply__disclaimer">By applying, you agree to our Privacy Policy. We will never share your details.</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apply;
