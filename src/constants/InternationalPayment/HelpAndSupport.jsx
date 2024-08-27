
const HelpSupport = () => {
    const helpSupport = [
        {
            title: 'Contact Us',
            subContent: [
                {
                    title: 'Internet Banking queries',
                    content: 'For help with the International Payments service.',
                    phone: '0345 300 0220',
                    subContent: 'If you need to call us from abroad you can also call us on + 44 1733 232 030.'
                },
                {
                    title: 'International Helpdesk',
                    content: 'For help with payments submitted through Internet Banking.',
                    phone: '0345 300 0202',
                    subContent: 'Monday to Friday 8: 30am - 5:00pm(Wednesdays from 9: 45am).'
                },
                {
                    title: 'All account related queries',
                    content: 'For help with payments submitted through Internet Banking.',
                    phone: '0345 300 0220',
                    subContent: `If you need to call us from abroad you can also call us on + 44 1763 327 007.\n
                    Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.`
                }
            ]
        },
        {
            title: 'When will the money for my payment be taken out of my account?',
            content: [
                'Money will only be taken from your account once we have processed your payment.',
                'Payments made before 3:00pm on a business day will be debited that same day.For payments made on or after 3:00pm on a business day, or at any time on a non - business day, your account will be debited on the next business day.'
            ]
        },
        {
            title: 'Who is responsible for payment charges?',
            content: [
                `When you make a payment online you will share the charges with the recipient: you will only pay our fee where charged and the recipient will pay their bank’s fees and any agent bank charges that apply.`,
                'This may result in the amount you have sent being reduced.'
            ]
        },
        {
            title: 'What if I make a payment request then want to change or cancel it?',
            content: [`Sorry, you can't change or cancel your Payment transaction request online. Please call the International Helpdesk on 0345 300 0101 as soon as possible, Monday to Friday 8:30am-5:00pm.`,
                `We can't guarantee that we'll be able to change or cancel the transaction, but if we are, you may lose money due to the differences in exchange rates if the original payment was sent in foreign currency.`
            ]
        }
    ]
    return helpSupport
}

export default HelpSupport
