import React from 'react'

const AllSections = () => {
    const sections = [
        {
            icon: 'fas fa-user-shield',
            title: 'Contact us about fraud',
            description: 'Phone us if someone knows your password or has used your accounts.',
            buttonText: 'Contact us now',
            buttonLink: '#',
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'The latest scams',
            description: 'Discover the latest scams to keep your account safe. We’ll let you know how to avoid them.',
            buttonText: 'See the latest scams',
            buttonLink: '#',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1581091228708-a6a8228b7a6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Take Five to stop fraud',
            description: 'It could protect you and your money.',
            buttonText: 'Find out more about Take Five',
            buttonLink: '#',
        },
    ];

    const additionalSections = [
        {
            icon: 'fas fa-phone-alt',
            title: 'Common scams',
            description: 'The most common scams catching people out today.',
            list: ['Scam calls', 'Scam messages', 'Social media scams'],
        },
        {
            icon: 'fas fa-credit-card',
            title: 'Payment scams',
            description: 'Get advice and tips on how to pay for things safely and to spot a scam.',
            list: ['Buying online', 'Holiday scams', 'Ticket scams', 'Card safety'],
        },
        {
            icon: 'fas fa-key',
            title: 'Keeping your details safe',
            description: 'Follow these tips to keep your devices safe from scams.',
            list: ['Identity theft', 'Protect your devices', 'Protect your passwords'],
        },
        {
            icon: 'fas fa-money-bill-wave',
            title: 'Money making scams',
            description: 'Make sure an investment is genuine and make sure you spot a scam. Use the FCA website for help and get advice before investing.',
        },
        {
            icon: 'fas fa-users',
            title: 'Keeping your family safe',
            description: 'Let\'s talk about scams. Stop fraudsters gaining your trust to steal from your or your loved ones.',
        },
        {
            icon: 'fas fa-shield-virus',
            title: 'Keeping you safe',
            description: 'Learn how our security systems keep you safe when you bank online. Use our mobile app alerts to confirm payments and other requests.',
        },
    ];

    const footerContent = [
        "We'll refund any money you lose if you do all you can to keep your details and devices safe.",
        "We may not give you a refund if you ignore our advice and warnings to make a payment which turns out to be a scam."
    ];
    return { sections, additionalSections, footerContent }
}

export default AllSections
