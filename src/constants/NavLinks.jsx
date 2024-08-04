import { ChevronDownIcon } from "@heroicons/react/24/outline"

const NavLinks = () => {

    const navDoc = [
        {
            title: 'Your Accounts',
            icon: <ChevronDownIcon className='size-5' />

        },
        {
            title: 'Your Profile',
            icon: <ChevronDownIcon className='size-5' />

        }
    ]
    return navDoc
}

export default NavLinks
