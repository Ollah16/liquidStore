import React from 'react'
import creditCard from '../assets/credit-card-desktop-lloyds.jpg'
import currentAccount from '../assets/insurance-desktop-lloyds.jpg'
import savings from '../assets/investments-desktop-lloyds.jpg'
import personalLoans from '../assets/lloyds_homepage_cl_hero_mobile_final.jpg'
import mortgages from '../assets/lloyds-homepage-cl-carousel-desktop.jpg'
import carFinance from '../assets/personal-loan-desktop-lloyds.jpg'
import readyMadeInvestments from '../assets/remortgage-desktop-lloyds.jpg'
import homeInsurance from '../assets/savings-desktop-lloyds.jpg'


const Products = () => {
    const productProps = [
        {
            title: 'Credit Cards',
            subTitle: 'Check your eligibility before you apply.It takes about 5 minutes and won’t affect your credit score.',
            linkTitle: 'Check your eligibility',
            image: creditCard,
            link: '/'
        },
        {
            title: 'Club Lloyds Current Account',
            subTitle: 'Choose 1 of 4 benefits to enjoy each year - 12 month Disney + subscription, six cinema tickets, digital Coffee Club and Gourmet Society membership or a magazine subscription.',
            subTitleOne: '£3 monthly fee may apply.',
            linkTitle: 'Explore Club benefits',
            image: currentAccount,
            link: '/'
        },
        {
            title: 'Savings',
            subTitle: 'Whatever it is you want to save for, our range of savings accounts can help.Find the right account for you.',
            linkTitle: 'View our savings products',
            image: savings,
            link: '/'
        },
        {
            title: 'Personal Loans',
            subTitle: 'Find out how much you could borrow before you apply. The amount we lend and the rate we offer you will be dependent on your personal circumstances.',
            linkTitle: 'Get a quote now',
            image: personalLoans,
            link: '/'
        },
        {
            title: 'Mortgages',
            subTitle: 'Find a mortgage deal that best suits your needs. Explore and compare our mortgage rates and apply online.',
            linkTitle: 'Find your mortgage deals',
            image: mortgages,
            link: '/'
        },
        {
            title: 'Car Finance',
            subTitle: 'Found your perfect car or still working out your budget ? We can help you get behind the wheel in no time.Find out more about our car finance options and get a quote today.',
            linkTitle: 'Get a car finance quote',
            image: carFinance,
            link: '/'
        },
        {
            title: 'Try our Ready-Made Investments',
            subTitle: 'Just choose how much you want to invest, pick a risk level, then leave the rest to our experts.Start from just £50 a month.',
            subTitleOne: 'Capital at risk.',
            linkTitle: 'Ready-Made Investments',
            image: readyMadeInvestments,
            link: '/'
        },
        {
            title: 'Home Insurance',
            subTitle: 'ith Home Insurance Select there are three levels of cover: Bronze, Silver and Gold.',
            subTitleOne: 'It’s 10 % cheaper when you get your quote and buy online, and you can get a quote in minutes.',
            linkTitle: 'Home Insurance',
            image: homeInsurance,
            link: '/'
        }
    ]

    return productProps
}

export default Products
