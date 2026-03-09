import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer" id="contact">
        <div className="footer__top">
            <div className="footer__orb" />
            <div className="container footer__inner">
                {/* Brand */}
                <div className="footer__brand">
                    <Link to="/">
                        <img src="/logo.png" alt="DropyHub" className="footer__logo" />
                    </Link>
                    <p className="footer__tagline">
                        India's premier delivery partner platform - empowering executives with zero registration fee, career growth, and financial support.
                    </p>
                    <div className="footer__socials">
                        {['instagram', 'twitter', 'linkedin', 'youtube'].map(s => (
                            <a key={s} href={`#${s}`} className="footer__social" aria-label={s}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    {s === 'instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
                                    {s === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
                                    {s === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                                    {s === 'youtube' && <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></>}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="footer__col">
                    <div className="footer__col-title">Company</div>
                    <Link to="/about" className="footer__link">About Us</Link>
                    <Link to="/warehouse" className="footer__link">Warehouse</Link>
                    <Link to="/services" className="footer__link">Our Services</Link>
                    <Link to="/services#how-it-works" className="footer__link">How It Works</Link>
                    <Link to="/benefits" className="footer__link">Career Development</Link>
                    <Link to="/partnership" className="footer__link">SRH Partnership</Link>
                </div>

                <div className="footer__col">
                    <div className="footer__col-title">For Partners</div>
                    <Link to="/apply" className="footer__link">Apply Now</Link>
                    <Link to="/services" className="footer__link">Vehicle Rentals</Link>
                    <Link to="/services" className="footer__link">Financial Loans</Link>
                    <Link to="/benefits" className="footer__link">Weekly Bonuses</Link>
                    <Link to="/benefits" className="footer__link">IT Training</Link>
                </div>

                <div className="footer__col">
                    <div className="footer__col-title">Contact</div>
                    <div className="footer__contact-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.32 2 2 0 0 1 3.6 1.12h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.81 12.81 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" /></svg>
                        +91 80XXX XXXXX
                    </div>
                    <div className="footer__contact-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        partners@dropyhub.com
                    </div>
                    <div className="footer__contact-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        Hyderabad, Telangana, India
                    </div>
                    <div className="footer__srh-tag">
                        🟠 Official SRH IPL 2026 Partner
                    </div>
                </div>
            </div>
        </div>

        <div className="footer__bottom">
            <div className="container footer__bottom-inner">
                <span>© 2026 DropyHub. All rights reserved.</span>
                <div className="footer__legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Refund Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
