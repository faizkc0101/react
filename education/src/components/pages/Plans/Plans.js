import React from 'react';
import './Plans.css';

function Plans() {
    const pricingData = [
        {
            title: 'Regular Member',
            price: '0',
            duration: '/month',
            color: '#fff',
            feature: [
                'Feature 1',
                'Feature 2',
                'Feature 3'
            ]
        },
        {
            title: 'Premium Member',
            price: '10',
            duration: '/month',
            color: '#f3f3f3',
            feature: [
                'Feature 1',
                'Feature 2',
                'Feature 3'
            ]
        },
        {
            title: 'VIP Member',
            price: '20',
            duration: '/month',
            color: '#ddd',
            feature: [
                'Feature 1',
                'Feature 2',
                'Feature 3'
            ]
        },
    ];

    return (
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">Premium Plan</h2>
                <p>Unlock amazing features and exclusive benefits</p>
            </div>
            <div className="pricing_wapper">
                {pricingData.map((pricingItem, index) => (
                    <div className="pricing_item" key={index}>
                        <div className="pricing_card-top" style={{ background: pricingItem.color }}>
                            <h2 className="section_title">{pricingItem.title}</h2>
                            <h2 className="pricing_section_title">
                                {pricingItem.price} <span>{pricingItem.duration}</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                {pricingItem.feature.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className="register-btn">Join</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
