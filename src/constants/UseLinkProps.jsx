import { ChevronRightIcon } from "@heroicons/react/24/outline"

const UseLinkProps = () => {

    const linkProps = {

        mortgageLink: {
            className: 'md:text-sm lg:text-base md:bg-theme flex justify-between items-center font-semibold w-full py-5 px-4 text-theme md:text-white hover:underline md:border-r-[.5px] md:border-r-[#649c00] border-b-theme border-b-[.5px] bg-white hover:underline md:w-3/12 text-center inline-block',
            title: 'Mortgage Calculator',
            link: '/',
            icon: <ChevronRightIcon className="size-5 font-bold" />
        },
        moneyWLink: {
            className: 'md:text-sm lg:text-base md:bg-theme flex justify-between items-center font-semibold w-full py-5 px-4 text-theme md:text-white hover:underline md:border-r-[.5px] md:border-r-[#649c00] border-b-theme border-b-[.5px] bg-white hover:underline md:w-3/12 text-center inline-block',
            title: 'Help with money worries',
            link: '/',
            icon: <ChevronRightIcon className="size-5 font-bold" />
        },
        protectLink: {
            className: 'md:text-sm lg:text-base md:bg-theme flex justify-between items-center font-semibold w-full py-5 px-4 text-theme md:text-white hover:underline md:border-r-[.5px] md:border-r-[#649c00] border-b-theme border-b-[.5px] bg-white hover:underline md:w-3/12 text-center inline-block',
            title: 'Protecting yourself from fraud',
            link: '/',
            icon: <ChevronRightIcon className="size-5 font-bold" />
        },
        logOnLink: {
            className: 'md:text-sm lg:text-base md:bg-theme flex justify-between items-center font-semibold w-full py-5 px-4 text-theme md:text-white hover:underline md:border-r-0 hover:underline border-b-theme border-b-[.5px] bg-white md:w-3/12 text-center inline-block',
            title: 'Log on',
            link: '/',
            icon: <ChevronRightIcon className="size-5 font-bold" />
        },
        mobileAppLink: {
            className: "bg-theme text-white w-full py-3 text-center px-4 font-semibold hover:underline hover:bg-[#024731] transition-underline transition-colors duration-200 ease-in-out",
            title: `More about our app`,
            link: '/',
            // aria_label: 'More about our app',
        }

    }

    return linkProps
}

export default UseLinkProps
