import carFinancePort from '../../assets/carFinancePort.jpeg'

const CarFinanceProps = () => {
    const prop = {
        image: carFinancePort,
        title: 'Car Finance – did you know?',
        subTitle: 'If you’re looking for a new car, you can use our handy calculator to find out how much you might pay each month on our PCP or HP plans.Subject to status and affordability checks.',
        subTitleOne: 'Getting a personalised quote only takes a few minutes and it won’t affect your credit score.',
        linkTitle: 'Get a car finance quote',
        link: '/',
        linkClassName: 'bg-theme hover:underline text-sm md:text-lg px-5 w-full py-3 inline-block text-white text-center hover:bg-[#024731] transition-colors ease-in-out duration-200'
    }

    return prop
}

export default CarFinanceProps
