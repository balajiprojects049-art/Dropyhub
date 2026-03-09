import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Apply.css';

const Apply = () => {
    const [form, setForm] = useState({
        name: '', phone: '', email: '', city: '', area: '', age: '',
        hasBike: '', bikeModel: '', bikeReg: '', drivingLicense: '',
        preferredCompany: [], jobType: [], experience: '', employmentStatus: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    // Handlers for checkboxes
    const handleCheckboxArrayChange = (e, fieldName) => {
        const { value, checked } = e.target;
        setForm(prev => {
            const currentArr = prev[fieldName];
            if (checked) {
                return { ...prev, [fieldName]: [...currentArr, value] };
            } else {
                return { ...prev, [fieldName]: currentArr.filter(item => item !== value) };
            }
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setForm({
                    name: '', phone: '', email: '', city: '', area: '', age: '',
                    hasBike: '', bikeModel: '', bikeReg: '', drivingLicense: '',
                    preferredCompany: [], jobType: [], experience: '', employmentStatus: '', message: ''
                });
            } else {
                setSubmitError(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitError('Failed to connect to the server. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const COMPANY_OPTIONS = ['Swiggy', 'Zepto', 'Amazon', 'Flipkart', 'Rapido', 'Blinkit', 'Swiggy Instamart', 'Other'];
    const JOB_TYPES = ['Delivery Executive', 'Warehouse Associate', 'Store Associate (Blinkit / Zepto / Instamart)'];

    return (
        <section className="apply section section-alt" id="apply">
            <div className="container">
                <div className="apply__inner">
                    {/* Left side unchanged */}
                    <div className="apply__info">
                        <div className="section-tag">Apply Now</div>
                        <h2 className="section-title">
                            Start Your Journey<br />
                            <span className="gradient-text">Today. For Free.</span>
                        </h2>
                        <div className="divider-glow" />
                        <p className="section-sub" style={{ marginBottom: '32px' }}>
                            Register as a DropyHub delivery partner and unlock a world of earning potential, career support,
                            and financial empowerment - at absolutely zero cost.
                        </p>

                        <div className="apply__benefits-list">
                            {[
                                'Zero Registration Fee - Always',
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
                            <form onSubmit={handleSubmit} className="apply__form apply__form--long">
                                <h3 className="apply__form-title">DropyHub - Delivery Executive Application Form</h3>
                                <p className="apply__form-sub">Fill in your details and we'll get you started.</p>

                                {/* 1. Full Name & 2. Mobile */}
                                <div className="apply__row">
                                    <div className="apply__field">
                                        <label>1. Full Name *</label>
                                        <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                    </div>
                                    <div className="apply__field">
                                        <label>2. Mobile Number *</label>
                                        <input name="phone" type="number" placeholder="Enter mobile number" value={form.phone} onChange={handleChange} required />
                                    </div>
                                </div>

                                {/* 3. Email & 6. Age */}
                                <div className="apply__row">
                                    <div className="apply__field">
                                        <label>3. Email ID (Optional)</label>
                                        <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                                    </div>
                                    <div className="apply__field">
                                        <label>6. Age *</label>
                                        <input name="age" type="number" placeholder="Enter your age" value={form.age} onChange={handleChange} required />
                                    </div>
                                </div>

                                {/* 4. City & 5. Area */}
                                <div className="apply__row">
                                    <div className="apply__field">
                                        <label>4. City *</label>
                                        <input name="city" type="text" placeholder="E.g., Hyderabad" value={form.city} onChange={handleChange} required />
                                    </div>
                                    <div className="apply__field">
                                        <label>5. Area / Location *</label>
                                        <input name="area" type="text" placeholder="E.g., Madhapur" value={form.area} onChange={handleChange} required />
                                    </div>
                                </div>

                                {/* 7. Do You Have a Bike? */}
                                <div className="apply__field">
                                    <label>7. Do You Have a Bike? *</label>
                                    <div className="apply__radio-group">
                                        <label className="apply__radio-label">
                                            <input type="radio" name="hasBike" value="Yes" onChange={handleChange} required />
                                            <span>Yes</span>
                                        </label>
                                        <label className="apply__radio-label">
                                            <input type="radio" name="hasBike" value="No" onChange={handleChange} required />
                                            <span>No (Need Bike Rental)</span>
                                        </label>
                                    </div>
                                </div>

                                {/* 8. Bike Details (Conditional) */}
                                {form.hasBike === 'Yes' && (
                                    <div className="apply__row apply__conditional-block">
                                        <div className="apply__field">
                                            <label>8a. Bike Model *</label>
                                            <input name="bikeModel" type="text" placeholder="E.g., Honda Activa" value={form.bikeModel} onChange={handleChange} required />
                                        </div>
                                        <div className="apply__field">
                                            <label>8b. Bike Registration Number *</label>
                                            <input name="bikeReg" type="text" placeholder="E.g., TS09 XX 1234" value={form.bikeReg} onChange={handleChange} required />
                                        </div>
                                    </div>
                                )}

                                {/* 9. Driving License */}
                                <div className="apply__field">
                                    <label>9. Driving License Available? *</label>
                                    <div className="apply__radio-group">
                                        <label className="apply__radio-label">
                                            <input type="radio" name="drivingLicense" value="Yes" onChange={handleChange} required />
                                            <span>Yes</span>
                                        </label>
                                        <label className="apply__radio-label">
                                            <input type="radio" name="drivingLicense" value="No" onChange={handleChange} required />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>

                                {/* 10. Preferred Company */}
                                <div className="apply__field">
                                    <label>10. Preferred Company *</label>
                                    <div className="apply__checkbox-grid">
                                        {COMPANY_OPTIONS.map(company => (
                                            <label key={company} className="apply__check-label">
                                                <input type="checkbox" value={company} onChange={(e) => handleCheckboxArrayChange(e, 'preferredCompany')} />
                                                <span>{company}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* 11. Job Type */}
                                <div className="apply__field">
                                    <label>11. Job Type Interested *</label>
                                    <div className="apply__checkbox-group">
                                        {JOB_TYPES.map(job => (
                                            <label key={job} className="apply__check-label">
                                                <input type="checkbox" value={job} onChange={(e) => handleCheckboxArrayChange(e, 'jobType')} />
                                                <span>{job}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* 12. Experience & 13. Employment Status */}
                                <div className="apply__row">
                                    <div className="apply__field">
                                        <label>12. Previous Delivery Experience *</label>
                                        <select name="experience" value={form.experience} onChange={handleChange} required>
                                            <option value="">Select...</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="0-6 Months">0-6 Months</option>
                                            <option value="6-12 Months">6-12 Months</option>
                                            <option value="1+ Year">1+ Year</option>
                                        </select>
                                    </div>
                                    <div className="apply__field">
                                        <label>13. Current Employment Status *</label>
                                        <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange} required>
                                            <option value="">Select...</option>
                                            <option value="Working">Working</option>
                                            <option value="Not Working">Not Working</option>
                                        </select>
                                    </div>
                                </div>

                                {/* 14. Message */}
                                <div className="apply__field">
                                    <label>14. Message / Additional Details (Optional)</label>
                                    <textarea name="message" rows="3" placeholder="Any other details you want to share..." value={form.message} onChange={handleChange} />
                                </div>

                                {submitError && (
                                    <div className="apply__error-message" style={{ color: '#D81B60', fontSize: '13.5px', marginTop: '10px', textAlign: 'center', background: 'rgba(216, 27, 96, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                        {submitError}
                                    </div>
                                )}

                                <button type="submit" className="btn-primary apply__submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting Application...' : 'Apply Now - It\'s Completely Free'}
                                    {!isSubmitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
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
