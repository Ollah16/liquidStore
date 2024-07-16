import supportImage from '../assets/supportImage.jpg'
import mortgage from '../assets/lloyds-fraud-homepage-mobile.jpg'
import disability from '../assets/disability-desktop-lloyds.jpg'

const CustomerSupport = () => {

    const supportProps = [
        {
            image: supportImage,
            title: 'Our Help Centre',
            subTitle: 'Looking for help? Use the information and guides in our Help Centre to find what you need.',
            linkTitle: 'Help Center',
            linkClassName: 'bg-theme py-3 px-5 hover:underline w-full inline-block text-center text-white text-base text-semibold hover:bg-[#024731] transition-colors ease-in-out duration-200',
            link: '/'
        },
        {
            image: mortgage,
            title: 'Learn about the latest scams',
            subTitle: 'Fraudsters are always looking for new ways to try to steal your details and money.',
            subTitleOne: 'Discover which scams are common right now, how they work and the steps you can take to stay safe.',
            linkTitle: 'See the latest scams',
            linkClassName: 'bg-theme py-3 px-5 hover:underline w-full inline-block text-center text-white text-sm md:text-lg hover:bg-[#024731] transition-colors ease-in-out duration-200',
            infoTitle: 'Mortgage Calculator',
            infoSubTitle: 'If you’re looking to buy your first home, next home or to remortgage your current home, use our mortgage calculator to find out how much you could borrow.',
            infoLinkTitle: 'Try our mortgage calculator',
            infoLink: '/',
            infoLinkClassName: 'bg-white text-theme hover:underline py-3 px-5 w-full inline-block text-center text-sm md:text-lg',
            svg: <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 72 100" className='size-24'>
                <path d="M41.14 48.45H30.85c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42V39.1h-8.42v6.35Zm9.35-6.35ZM60.17 48.45H49.88c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42V39.1h-8.42v6.35Zm9.35-6.35ZM22.11 48.45H11.82c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42V39.1h-8.42v6.35Zm9.35-6.35ZM41.14 67.15H30.85c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42V57.8h-8.42v6.35Zm9.35-6.35ZM60.17 67.15H49.88c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42V57.8h-8.42v6.35Zm9.35-6.35ZM22.11 67.15H11.82c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42V57.8h-8.42v6.35Zm9.35-6.35ZM41.14 85.86H30.85c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42v-6.35h-8.42v6.35Zm9.35-6.35ZM60.17 85.86H49.88c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42v-6.35h-8.42v6.35Zm9.35-6.35ZM22.11 85.86H11.82c-1.14 0-2.07-.93-2.07-2.07v-8.22c0-1.14.93-2.07 2.07-2.07h10.29c1.14 0 2.07.93 2.07 2.07v8.22c0 1.14-.93 2.07-2.07 2.07Zm-9.35-3h8.42v-6.35h-8.42v6.35Zm9.35-6.35Z" style={{ fill: "#77ba00" }} >
                </path>
                <path d="M61.59 95.01H10.41c-5.12 0-9.29-4.11-9.29-9.16V37.19c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v48.66c0 3.4 2.82 6.16 6.29 6.16h51.18c3.47 0 6.29-2.76 6.29-6.16V13.66c0-3.4-2.82-6.16-6.29-6.16H10.41c-3.47 0-6.29 2.76-6.29 6.16v13.29h57.47c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H2.62c-.83 0-1.5-.67-1.5-1.5V13.66c0-5.05 4.17-9.16 9.29-9.16h51.18c5.12 0 9.29 4.11 9.29 9.16v72.19c0 5.05-4.17 9.16-9.29 9.16Z" style={{ fill: "#ffffff" }}>
                </path>
            </svg >
        },
        {
            image: disability,
            title: 'Extra support if you have a disability',
            subTitle: 'Learn how we are making it easier to bank with us. Find out about the different kinds of accessibility support we provide, and how to get in touch.',
            linkTitle: 'How we can support you',
            linkClassName: 'bg-theme py-3 px-5 hover:underline w-full inline-block text-center text-white text-sm md:text-lg hover:bg-[#024731] transition-colors ease-in-out duration-200',
            infoTitle: 'Overdrafts',
            infoSubTitle: 'An arranged overdraft can act as a short - term safety net for those moments in life where you need to borrow a little extra money.',
            infoLinkTitle: 'Find out more about overdrafts',
            infoLink: '/',
            infoLinkClassName: 'bg-white text-theme hover:underline py-3 px-5 w-full inline-block text-center text-sm md:text-lg',
            svg: <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 84 100" className='size-24'>
                <path d="M21.12 95.01c-.83 0-1.5-.67-1.5-1.5V70.82l-4.42 4.03c-.61.56-1.56.52-2.12-.1-.56-.61-.52-1.56.1-2.12l6.92-6.32c.11-.1.24-.19.37-.25.04-.02.07-.03.11-.05.14-.06.29-.09.45-.1.03 0 .11-.01.09 0h.1c.15 0 .29.04.43.09s.09.04.13.06c.13.06.25.15.37.25l6.92 6.32c.61.56.65 1.51.1 2.12-.56.61-1.51.65-2.12.1l-4.42-4.04v21.13c8.88-.77 15.86-8.25 15.86-17.34 0-9.6-7.79-17.41-17.36-17.41S3.77 65 3.77 74.6c0 4.96 2.12 9.69 5.81 13a1.502 1.502 0 0 1-2 2.24A20.443 20.443 0 0 1 .77 74.61C.77 63.36 9.9 54.2 21.13 54.2s20.36 9.16 20.36 20.41-9.14 20.41-20.36 20.41Z" style={{ fill: "#77ba00" }}>
                </path>
                <path d="M51.43 83.63c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c17.24 0 28.81-5.8 28.81-11.22V58.65c-5.04 4.82-15.91 8.09-28.81 8.09-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c17.24 0 28.81-5.8 28.81-11.22V41.76c-5.04 4.82-15.91 8.09-28.81 8.09-17.84 0-31.81-6.25-31.81-14.22V18.74c0-7.98 13.97-14.22 31.81-14.22s31.81 6.25 31.81 14.22v50.68c0 7.98-13.97 14.22-31.81 14.22ZM22.62 24.85v10.76c0 5.42 11.58 11.22 28.81 11.22s28.81-5.8 28.81-11.22V18.72c0-5.42-11.58-11.22-28.81-11.22s-28.81 5.8-28.81 11.22S34.2 29.94 51.43 29.94c4.37 0 8.58-.39 12.52-1.16.8-.16 1.6.37 1.76 1.18a1.5 1.5 0 0 1-1.19 1.76c-4.13.81-8.54 1.21-13.1 1.21-12.9 0-23.78-3.27-28.81-8.09Z" style={{ fill: "#ffffff" }}>
                </path>
            </svg >

        }
    ]

    return supportProps
}

export default CustomerSupport
