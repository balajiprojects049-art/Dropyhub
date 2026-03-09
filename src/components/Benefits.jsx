import React from 'react';
import './Benefits.css';

const benefits = [
    { icon: '💵', title: 'Competitive Salary', desc: 'Industry-benchmark pay with performance-linked top-ups. Your earnings grow as you do.' },
    { icon: '🏆', title: 'Monthly Awards', desc: 'Recognition-based monthly and annual awards for top-performing delivery executives.' },
    { icon: '🛡️', title: 'Full Insurance Coverage', desc: 'Comprehensive rider and vehicle insurance included from day one at zero extra cost.' },
    { icon: '🎓', title: 'IT Skill Training', desc: 'Free certified courses in software, data entry, and IT operations - your bridge to a tech career.' },
    { icon: '⛑️', title: 'Safety Gear & Uniform', desc: 'Professional uniform, helmet, and full safety equipment provided and maintained by DropyHub.' },
    { icon: '📞', title: '24/7 Support Helpdesk', desc: 'Dedicated partner helpdesk available around the clock for any query, grievance, or emergency.' },
];

const Benefits = () => (
    <section className="benefits section section-alt" id="benefits">
        <div className="container">
            <div className="benefits__header">
                <div className="section-tag">Partner Benefits</div>
                <h2 className="section-title">
                    Built for Your <span className="gradient-text">Well-being</span>
                </h2>
                <div className="divider-glow" style={{ margin: '16px auto 0' }} />
            </div>

            <div className="benefits__grid">
                {benefits.map(b => (
                    <div key={b.title} className="benefits__card">
                        <div className="benefits__emoji">{b.icon}</div>
                        <h3 className="benefits__title">{b.title}</h3>
                        <p className="benefits__desc">{b.desc}</p>
                    </div>
                ))}
            </div>

            {/* Salary Banner */}
            <div className="benefits__banner glass-card">
                <div className="benefits__banner-orb" />
                <div className="benefits__banner-content">
                    <div className="benefits__banner-label">Average Monthly Earnings</div>
                    <div className="benefits__banner-amount">₹18,000 - ₹32,000</div>
                    <div className="benefits__banner-note">Base salary + bonuses + performance incentives</div>
                </div>
                <div className="benefits__banner-stats">
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">₹500+</div>
                        <div className="benefits__banner-stat-label">Weekly Bonus</div>
                    </div>
                    <div className="benefits__banner-divider" />
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">₹10L</div>
                        <div className="benefits__banner-stat-label">Max Loan</div>
                    </div>
                    <div className="benefits__banner-divider" />
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">₹0</div>
                        <div className="benefits__banner-stat-label">Joining Fee</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Benefits;
