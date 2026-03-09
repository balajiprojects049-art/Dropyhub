import React from 'react';
import './PageHero.css';

const PageHero = ({ tag, title, highlight, subtitle, breadcrumb, imageSrc, imageLightSrc }) => (
    <div className={`page-hero ${imageSrc ? 'page-hero--has-bg' : ''}`}>
        {imageSrc && (
            <div className="page-hero__bg-layer">
                <img src={imageSrc} alt="" className={`page-hero__bg-img ${imageLightSrc ? 'page-hero__bg-img--dark' : ''}`} />
                {imageLightSrc && (
                    <img src={imageLightSrc} alt="" className="page-hero__bg-img page-hero__bg-img--light" />
                )}
                <div className="page-hero__bg-overlay" />
            </div>
        )}
        <div className="page-hero__orb page-hero__orb--left" />
        <div className="page-hero__orb page-hero__orb--right" />
        <div className="page-hero__grid" />
        <div className="container page-hero__inner">
            <div className="page-hero__content">
                {breadcrumb && (
                    <div className="page-hero__breadcrumb">
                        {breadcrumb.map((b, i) => (
                            <span key={i}>
                                {i > 0 && <span className="breadcrumb-sep"> / </span>}
                                <span className={i === breadcrumb.length - 1 ? 'breadcrumb-active' : 'breadcrumb-link'}>{b}</span>
                            </span>
                        ))}
                    </div>
                )}
                {tag && <div className="section-tag">{tag}</div>}
                <h1 className="page-hero__title">
                    {title} {highlight && <span className="gradient-text">{highlight}</span>}
                </h1>
                {subtitle && <p className="page-hero__sub">{subtitle}</p>}
            </div>
        </div>
    </div>
);

export default PageHero;
