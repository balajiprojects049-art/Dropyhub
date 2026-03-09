import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Apply from '../components/Apply';
import FAQAccordion from '../components/FAQAccordion';

const ApplyPage = () => (
    <>
        <PageHero
            tag="Join Us"
            title="Apply Now -"
            highlight="It's Completely Free"
            subtitle="Register as a DropyHub delivery partner in under 5 minutes. No fee, no documents burden. Just your name, phone, and city. Start earning within 48 hours."
            breadcrumb={['Home', 'Apply Now']}
            imageSrc="/apply_hero.png"
            imageLightSrc="/apply_hero_light.png"
        />
        <Apply />

        {/* FAQ accordion (replaces previous static FAQ strip) */}
        <FAQAccordion />
    </>
);

export default ApplyPage;
