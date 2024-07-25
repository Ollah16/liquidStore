import axios from 'axios'
import toast from 'react-hot-toast'

export const getCredentials = async () => {
    try {
        const serverLink = 'http://localhost:8080/user/getdetails'
        const token = localStorage.getItem('token')

        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const response = await axios.get(serverLink, header)

        const { userDetails } = response.data

        return userDetails

    } catch (error) {
        console.error(error)
    }
}

export const getAccountInfo = async () => {
    try {
        const serverLink = 'http://localhost:8080/user/getaccountinformation'
        const token = localStorage.getItem('token')

        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const response = await axios.get(serverLink, header)

        const { accountInformation } = response.data

        return accountInformation

    } catch (error) {
        console.error(error)
    }
}

export const getCountries = async () => {

    const popularCountries = [
        'United States', 'Canada', 'Australia', 'Japan', 'China', 'India', 'Pakistan', 'United Kingdom',
        'Germany', 'France', 'Italy', 'Brazil', 'Mexico', 'South Africa', 'Nigeria', 'Egypt', 'Kenya',
        'Argentina', 'Chile', 'Colombia', 'Russia', 'Turkey', 'Saudi Arabia', 'South Korea', 'Indonesia',
        'Malaysia', 'Singapore', 'Philippines', 'Thailand', 'Vietnam', 'Bangladesh', 'Sri Lanka', 'Nepal',
        'New Zealand', 'Spain', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Poland',
        'Austria', 'Switzerland', 'Greece', 'Portugal', 'Hungary', 'Czech Republic', 'Romania', 'Israel'
    ];

    try {
        const response = await axios.get('https://restcountries.com/v3.1/all')

        const europeanCountries = response.data.filter(country => country.region === 'Europe');
        const popularCountryData = response.data.filter(country => popularCountries.includes(country.name.common));

        const countryData = [
            {
                label: 'Europe (Euro)',
                countryName: 'Europe',
                abbr: 'EURO',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
                currency: 'Euro'
            },
            ...popularCountryData.map(country => ({
                label: `${country.name.common} (${country.cca2})`,
                countryName: country.name.common,
                abbr: country.cca2,
                flag: country.flags.png,
                currency: country.currencies ? Object.values(country.currencies)[0].name : 'N/A'
            })).sort((a, b) => a.label.localeCompare(b.label))
        ]

        return countryData

    } catch (error) {
        console.error('Error fetching country data:', error);
    };
}

export const addBen = async (body) => {

    try {
        const serverLink = 'http://localhost:8080/user/addBeneficiary'
        const token = localStorage.getItem('token')

        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            }
        }

        const response = await axios.post(serverLink, body, header)
        return response.data

    } catch (error) {
        console.error(error)
    }
}

export const getBen = async () => {
    try {
        const serverLink = 'http://localhost:8080/user/getAllBeneficiary'
        const token = localStorage.getItem('token')

        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const response = await axios.get(serverLink, header)

        const { allBeneficiary } = response.data
        return allBeneficiary

    } catch (error) {
        console.error(error)
    }
}

export const deleteBeneficiary = async (id) => {
    try {
        const serverLink = `http://localhost:8080/user/delBeneficiary/${id}`
        const token = localStorage.getItem('token')

        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const response = await axios.patch(serverLink, {}, header);

        const { userDetails } = response.data

        return userDetails

    } catch (error) {
        console.error(error)
    }
}