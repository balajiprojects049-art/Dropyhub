import React, { useState, useRef, useEffect } from 'react';
import './FAQAccordion.css';

const faqs = [
  {
    q: 'Is registration really free?',
    a: 'Yes. Always. There is no registration fee, no deposit, and no documentation charge — ever.'
  },
  {
    q: 'How quickly can I start working?',
    a: 'After registration, our team coordinates onboarding within 48 hours, including uniform and equipment.'
  },
  {
    q: 'Do I need my own vehicle?',
    a: 'No. DropyHub offers affordable vehicle rental programmes for 2-wheelers and 3-wheelers with maintenance included.'
  },
  {
    q: 'When are bonuses paid?',
    a: 'Weekly performance bonuses are credited directly to your account every week without delay.'
  },
  {
    q: 'Can I work with multiple companies at once?',
    a: 'Yes. DropyHub connects you to multiple platforms (Swiggy, Zomato, Amazon, etc.) simultaneously.'
  },
  {
    q: 'How do I apply for a financial loan?',
    a: 'Once registered, you can apply through the DropyHub partner app for loans up to ₹10 Lakhs.'
  }
];

const FAQItem = ({ id, q, a, open, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (open) {
      const height = el.scrollHeight;
      el.style.height = height + 'px';
    } else {
      el.style.height = '0px';
    }
  }, [open]);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        id={`faq-${id}-btn`}
        className="faq-question"
        aria-expanded={open}
        aria-controls={`faq-${id}-panel`}
        onClick={() => onToggle(id)}
      >
        <span className="faq-icon" aria-hidden="true">❓</span>
        <span className="faq-q-text">{q}</span>
        <span className="faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>

      <div
        id={`faq-${id}-panel`}
        role="region"
        aria-labelledby={`faq-${id}-btn`}
        className="faq-answer"
        ref={contentRef}
      >
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
};

const FAQAccordion = ({ single = true }) => {
  const [openIndex, setOpenIndex] = useState(single ? 0 : null);

  const toggle = (i) => {
    if (single) setOpenIndex(prev => (prev === i ? null : i));
    else setOpenIndex(prev => {
      if (!Array.isArray(prev)) prev = [];
      if (prev.includes(i)) return prev.filter(x => x !== i);
      return [...prev, i];
    });
  };

  // Keyboard: allow ArrowUp / ArrowDown navigation between headers
  const headerRefs = useRef([]);
  useEffect(() => {
    headerRefs.current = headerRefs.current.slice(0, faqs.length);
  }, []);

  const onKeyDown = (e, idx) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (idx + 1) % faqs.length;
      headerRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (idx - 1 + faqs.length) % faqs.length;
      headerRefs.current[prev]?.focus();
    }
  };

  return (
    <section className="faq-accordion section">
      <div className="container">
        <div className="faq-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title"><span className="gradient-text">Common</span> Questions</h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>Quick answers to common questions — tap to expand.</p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="faq-wrap">
              <button
                ref={el => headerRefs.current[i] = el}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="sr-only-focus"
                aria-hidden
                style={{ display: 'none' }}
              />
              <FAQItem id={i} q={f.q} a={f.a} open={single ? openIndex === i : (Array.isArray(openIndex) && openIndex.includes(i))} onToggle={toggle} />
            </div>
          ))}
        </div>

        <div className="faq-controls">
          <button className="btn-outline" onClick={() => setOpenIndex(faqs.map((_, i) => i))}>Expand all</button>
          <button className="btn-outline" onClick={() => setOpenIndex(null)} style={{ marginLeft: '12px' }}>Collapse all</button>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
