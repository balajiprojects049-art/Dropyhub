import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Apply from '../components/Apply';

const ApplyPage = () => (
    <>
        <PageHero
            tag="Join Us"
            title="Apply Now —"
            highlight="It's Completely Free"
            subtitle="Register as a DropyHub delivery partner in under 5 minutes. No fee, no documents burden. Just your name, phone, and city. Start earning within 48 hours."
            breadcrumb={['Home', 'Apply Now']}
        />
        <Apply />

        {/* Small FAQ strip */}
        <section className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div className="section-tag">FAQ</div>
                    <h2 className="section-title">Common <span className="gradient-text">Questions</span></h2>
                </div>
                <div className="apply-faq__grid">
                    {[
                        { q: 'Is registration really free?', a: 'Yes. Always. There is no registration fee, no deposit, and no documentation charge — ever.' },
                        { q: 'How quickly can I start working?', a: 'After registration, our team coordinates onboarding within 48 hours, including uniform and equipment.' },
                        { q: 'Do I need my own vehicle?', a: 'No. DropyHub offers affordable vehicle rental programmes for 2-wheelers and 3-wheelers with maintenance included.' },
                        { q: 'When are bonuses paid?', a: 'Weekly performance bonuses are credited directly to your account every week without delay.' },
                        { q: 'Can I work with multiple companies at once?', a: 'Yes. DropyHub connects you to multiple platforms (Swiggy, Zomato, Amazon, etc.) simultaneously.' },
                        { q: 'How do I apply for a financial loan?', a: 'Once registered, you can apply through the DropyHub partner app for loans up to ₹10 Lakhs.' },
                    ].map(f => (
                        <div key={f.q} className="apply-faq__item glass-card">
                            <div className="apply-faq__q">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--pink-light)', flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                {f.q}
                            </div>
                            <p className="apply-faq__a">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default ApplyPage;
