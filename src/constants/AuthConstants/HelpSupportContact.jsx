
const HelpSupportContact = () => {
    const help_Support = [
        {
            title: 'What is a User ID?',
            content: 'This is the unique number you’ve been given to run your Internet Banking account. You will need both your user id and your password to log into your online account.'
        },
        {
            title: 'Why am I having trouble logging on?',
            content: `It could be because you're trying to log on from a networked site (the office, for example). If so, please contact your Systems Administrator for help.

If you still have trouble, please call our helpdesk on 0328 300 0236. Lines are open 8am - 8pm seven days a week. Not all Telephone Banking services are available 24 hours a day, seven days a week.

You can call us using Relay UK if you have a hearing or speech impairment. There's more information on the Relay UK help pages.
Sign Video services are also available if you’re Deaf and use British Sign Language.`
        },
        {
            title: 'How do I reset my password and/or memorable information?',
            content: `First, go to the Internet Banking log on screen and click on the 'Forgotten your logon details?' link. You'll need to enter a few details. On the next screen you’ll be asked if you want to reset your password or reset both your password and memorable information. Select the option which applies to you.

If you choose to reset your password and/or memorable information, you’ll need to enter and confirm your new details and select a phone number for us to call you on. You’ll then receive a call from our automated system. Follow the instructions and your password and/or memorable information will be reset immediately.`
        },
        {
            title: 'I’m locked out of my account.What should I do?',
            content: `You may need to reset your password. To do so, go to the Internet Banking log on screen, click on the 'Forgotten your logon details?' link, and follow the on-screen instructions.

If you’re still unable to access Internet Banking, please call our helpdesk on 0345 300 0220 (+44 207 009 9437 from overseas). Lines open 8am - 8pm, seven days a week and closed on Bank Holidays.`
        },
        {
            title: 'Are my security details case sensitive?',
            content: 'No, your security details, including your password and User ID, aren’t case sensitive.'

        }
    ]

    const contactUs = [
        {
            title: 'General banking & account queries',
            phone: '0345 300 1111'
        },
        {
            title: 'Internet Banking queries',
            content: 'Technical queries about the Internet Banking service',
            phone: '0345 300 0220'
        },
        {
            title: 'Savings account queries',
            phone: '0345 300 1111'
        },
        {
            title: '',
            phone: '',
            content: ` Open 8am - 6pm, seven days a week and closed on Bank Holidays.

Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.

Not all Telephone Banking services are available 24 hours a day, seven days a week.Please speak to an adviser for more information.`
        }
    ]
    return { help_Support, contactUs }
}

export default HelpSupportContact
