import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Ramesh Kumar',
        role: 'Delivery Partner, Hyderabad',
        rating: 5,
        text: 'DropyHub changed my life. Earlier I was struggling with one company. Now I earn 40% more and even got a loan for my bike without any paperwork headaches.',
        avatar: 'RK',
    },
    {
        name: 'Suresh Naidu',
        role: 'Senior Partner, Secunderabad',
        rating: 5,
        text: 'The zero registration fee made it easy to join. The weekly bonuses are real and on-time. I recommend DropyHub to every delivery executive I know.',
        avatar: 'SN',
    },
    {
        name: 'Vijay Anand',
        role: 'Delivery Executive, Bangalore',
        rating: 5,
        text: 'I never thought I would get IT training while doing delivery. DropyHub gave me both income stability and a roadmap to a better career.',
        avatar: 'VA',
    },
    {
        name: 'Praveen Reddy',
        role: 'Partner, Chennai',
        rating: 5,
        text: 'The vehicle rental programme saved me from the burden of taking a loan from outside. Monthly maintenance is included - it is truly a complete package.',
        avatar: 'PR',
    },
];

const Stars = ({ count }) => (
    <div className="stars">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ))}
    </div>
);

const Testimonials = () => (
    <section className="testimonials section" id="testimonials">
        <div className="container">
            <div className="testimonials__header">
                <div className="section-tag">Testimonials</div>
                <h2 className="section-title">
                    Voices of Our <span className="gradient-text">Partners</span>
                </h2>
                <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                <p className="section-sub" style={{ margin: '16px auto 0', textAlign: 'center' }}>
                    Real stories from real delivery executives who chose DropyHub.
                </p>
            </div>

            <div className="testimonials__marquee">
                <div className="testimonials__track">
                    {[...testimonials, ...testimonials].map((t, idx) => (
                        <div key={`${t.name}-${idx}`} className="testimonials__card glass-card">
                            <div className="test__quote">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <Stars count={t.rating} />
                            <p className="test__text">{t.text}</p>
                            <div className="test__author">
                                <div className="test__avatar">{t.avatar}</div>
                                <div>
                                    <div className="test__name">{t.name}</div>
                                    <div className="test__role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;
