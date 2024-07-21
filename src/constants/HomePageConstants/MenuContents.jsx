
const MenuContents = () => {

    const menuContent = [
        {
            title: 'Everday banking',
            subTitle: 'Online services & more',
            id: 0
        },
        {
            title: 'Help & security',
            subTitle: `We're here for you`,
            id: 1
        },
        {
            title: 'Current accounts',
            subTitle: 'Accounts & services',
            id: 2
        },
        {
            title: 'Borrowing',
            subTitle: 'Cards, loans & car finance',
            id: 3
        },
        {
            title: 'Mortgages',
            subTitle: 'Accounts & calculators',
            id: 4
        },
        {
            title: 'Savings',
            subTitle: 'Accounts & ISAs',
            id: 5
        },
        {
            title: 'Investing',
            subTitle: 'Pensions and investments',
            id: 6
        },
        {
            title: 'Insurance',
            subTitle: 'Home, life & car',
            id: 7
        }
    ]

    const menuSubContent = [
        {
            id: 0,
            contentI: [
                'How to get online',
                'Set up the Mobile Banking app',
                'Register for Internet Banking',
                'Log on to Internet Banking',
                'Reset your logon details'
            ],
            contentII: [
                'Mobile Banking app',
                'Setting up our app',
                'Biometrics',
                'App notifications'
            ],
            contentIII: [
                'Profile & settings',
                'Change your telephone number',
                'Change your address',
                'Open Banking'
            ],
            contentIV: [
                'Card & PIN services',
                'View your card details',
                'Report your card lost or stolen',
                'Order a replacement card',
                'View your PIN'
            ],
            contentV: [
                'Payments & transfers',
                'Daily payment limits',
                'Pay someone new',
                'Cancel a Direct Debit',
                'Pay in a cheque',
                'Send money outside the UK'
            ],
            contentVI: [
                'Statements & transactions',
                'See upcoming payments',
                'Search transactions',
                'Download statements'
            ]
        },
        {
            id: 1,
            contentI: [
                'Fraud & security',
                'Latest scams',
                'Lost or stolen card',
                'Unrecognised transactions'
            ],
            contentII: [
                'Money management',
                'Understanding credit',
                `Managing someone's affairs`,
                'Financial planning',
                'Personal Tax Services',
                'Family finances'
            ],
            contentIII: ['Banking near you'],
            contentIV: [
                'Life events',
                'Buying a home',
                'Getting married',
                'Redundancy',
                'Separation & divorce',
                'Retirement',
                'Bereavement',
                'Difficult times',
                'Money worries',
                'Mental health support',
                'Gambling',
                'Financial abuse',
                'Serious illness'
            ],
            contentV: [
                'Customer support',
                'Support & wellbeing',
                'Banking online',
                'Accessibility & disability',
                'Contact us',
                'Banking with us',
                'Feedback & complaints'
            ]
        },
        {
            id: 2,
            contentI: [
                'Current accounts',
                '£175 switching offer',
                'Club Lloyds Account',
                'Classic Account',
                'Silver Account',
                'Club Lloyds Silver Account',
                'Platinum Account',
                'Club Lloyds Platinum Account',
                'Youth & student accounts',
                'Joint accounts'
            ],
            contentII: [
                'Travel services',
                'Using your card abroad',
                'Travel money',
                'Send money outside the UK'
            ],
            contentIII: [
                'Features & support',
                'Switching to Lloyds Bank',
                'Everyday Offers',
                'Rates & charges',
                'Save the Change',
                'Current account help & guidance',
                'Mobile device trade in service'
            ],
            contentIV: [
                'Already bank with us?',
                'Existing customers',
                'Upgrade options',
                'Overdrafts',
                'Payments & transfers',
                'Mobile banking'
            ]
        },
        {
            id: 3,
            contentI: ['Credit cards',
                'Credit card eligibility checker',
                'Balance transfer credit cards',
                'Large purchase credit cards',
                'Everyday spending credit cards',
                'World Elite Mastercard ®',
                'Cashback credit card'],
            contentII: [
                'Loans',
                'Loan calculator',
                'Car loans',
                'Debt consolidation loans',
                'Home improvement loans',
                'Holiday loans',
                'Wedding loans'],
            contentIII: [
                'Car finance',
                'Car finance calculator',
                'Car finance options',
                'Car refinance',
                'Car leasing'
            ],
            contentFeatured: [
                'Features & support',
                'Credit cards help & guidance',
                'Loans help & guidance',
                'Car finance help & guidance',
                'Borrowing options',
                'Understanding credit'
            ],
            contentAlready: [
                'Already borrowing with us ?',
                'Existing credit card customers',
                'Existing loan customers',
                'Existing car finance customers',
                'Money worries',
                'Mobile banking',
                'Banking online']
        },
        {
            id: 4,
            contentI: [
                'Mortgages',
                'First time buyer mortgages',
                'Moving home',
                'Remortgage to us',
                'Existing Lloyds Bank mortgage customers',
                'Buying to let',
                'Equity release',
            ],
            contentII: [
                'Mortgage calculators & tools',
                'Mortgage calculator',
                'Remortgage calculator',
                'Get an agreement in principle',
                'Base rate change calculator',
                'Overpayment calculator',
            ],
            contentFeatured: [
                'Features & support',
                'Mortgage help & guidance',
                'Club Lloyds offer',
                'Eco Home offers',
                'Mortgage protection',
                'Contact us'
            ],
            contentAlready: [
                'Already with us ?',
                'Existing customers',
                'Manage your mortgage',
                'Switch to a new deal',
                'Borrow more',
                'Switch deal & borrow more',
                'Moving home',
                'Help with your payments',
                'Learn about Home Wise',
                'Your interest only mortgage'
            ]
        },
        {
            id: 5,
            contentI: [
                'Savings accounts',
                'Instant access savings accounts',
                'Fixed rate savings accounts',
                'Club Lloyds savings accounts',
                `Children's savings accounts`,
                'Joint savings accounts',
                'Compare savings accounts'
            ],
            contentII: [
                'ISAs',
                'Compare cash ISAs',
                'Help to Buy ISA',
                'Stocks & Shares ISA',
                'Investment ISA'
            ],
            contentFeatured: [
                'Features & support',
                'Savings calculator',
                'Save the Change®',
                'Savings help and guidance',
                'ISAs explained',
                'Savings interest rates'
            ],
            contentAlready: [
                'Already saving with us ?',
                'Existing customers',
                'Top up your ISA',
                'Transfer your ISA',
                'Tax on savings interest',
                'Your personal savings allowance',
                'Your ISA allowance'
            ]
        },
        {
            id: 6,
            contentI: [
                'Investing',
                'Compare investing options',
                'Share Dealing ISA',
                'Share Dealing Account',
                'Invest Wise Accounts(18 - 25 year olds)',
                'Ready - Made Investments'
            ],
            contentII: [
                'ETF Quicklist',
                'Introducing our ETF Quicklist',
                'View our ETF Quicklist'
            ],
            contentIII: [
                'Guides and support',
                'Understanding investing',
                'Research the market',
                'Investing help and guidance',
                'Transfer your investments',
                'Trading Support',
                'ETF Academy',
                'Our Charges'
            ],
            contentIV: [
                'Pensions and retirement',
                'Ready - Made Pension',
                'Combining your pensions',
                'Pension calculator',
                'Self - employed',
                'Pensions explained',
                'Top 10 pension tips',
                'Retirement options',
                'Existing Ready - Made Pension customers'
            ],
            contentV: [
                'Wealth management',
                'Is advice right for you ?',
                'Benefits of financial advice',
                'Services we offer',
                'Cost of advice'
            ],
            contentAlready: [
                'Already investing with us ?',
                'Log on to Share Dealing'
            ]
        },
        {
            id: 7,
            contentI: [
                'View all insurance products'
            ],
            contentII: [
                'Home insurance',
                'Get a home insurance quote',
                'Compare home insurance',
                'Buildings & contents insurance',
                'Contents insurance',
                'Buildings insurance',
                'Retrieve a home insurance quote',
                'Home insurance help & guidance',
                'Manage your home insurance policy'
            ],
            contentIII: [
                'Car insurance',
                'Compare car insurance',
                'Car insurance help & guidance',
                'Log on to My Account to manage your car insurance'
            ],
            contentIV: [
                'Life insurance',
                'Life cover',
                'Critical illness cover',
                'Mortgage protection insurance',
                'Life cover help & guidance'
            ],
            contentV: [
                'Other insurance',
                'Business insurance',
                'Van insurance',
                'Landlord insurance'
            ],
            contentClaim: [
                'Claims',
                'Make a home insurance claim',
                'Make a life insurance claim',
                'Make a car insurance claim'
            ],
            contentAlready: [
                'Already insured with us ?',
                'Support for existing customers',
                'Help with your existing home insurance',
                'Help with your existing life insurance',
                'Help with your existing car insurance'
            ]
        }
    ]

    return { menuContent, menuSubContent }
}

export default MenuContents
