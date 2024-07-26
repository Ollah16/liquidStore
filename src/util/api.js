import axios from 'axios'

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
    // List of popular countries to fetch data 
    const popularCountries = [
        'United States', 'Canada', 'Australia', 'Japan', 'China', 'India', 'Pakistan',
        'Brazil', 'Mexico', 'South Africa', 'Nigeria', 'Egypt', 'Kenya', 'Argentina',
        'Chile', 'Colombia', 'Russia', 'Turkey', 'Saudi Arabia', 'South Korea', 'Indonesia',
        'Malaysia', 'Singapore', 'Philippines', 'Thailand', 'Vietnam', 'Bangladesh', 'Sri Lanka',
        'Nepal', 'New Zealand', 'Spain', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark',
        'Finland', 'Poland', 'Austria', 'Switzerland', 'Greece', 'Portugal', 'Hungary',
        'Czech Republic', 'Romania', 'Israel'
    ];

    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;

        // Filter European countries and non-European countries
        const europeanCountries = countries.filter(country => country.region === 'Europe');
        const nonEuropeanCountries = countries.filter(country => popularCountries.includes(country.name.common));

        // Prepare country data with Euro for European countries
        const europeanData = [{
            label: 'Europe (Euro)',
            countryName: 'Europe',
            abbr: 'EURO',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
            currency: 'Euro'
        }];

        // Prepare country data for non-European popular countries
        const nonEuropeanData = nonEuropeanCountries
            .map(country => ({
                label: `${country.name.common} (${country.cca2})`,
                countryName: country.name.common,
                abbr: country.cca2,
                flag: country.flags.png,
                currency: country.currencies ? Object.values(country.currencies)[0].name : 'N/A'
            }));

        // Combine European data and non-European data, and sort by label
        const countryData = [
            ...europeanData,
            ...nonEuropeanData
        ].sort((a, b) => a.label.localeCompare(b.label));

        return countryData;
    } catch (error) {
        console.error('Error fetching country data:', error);
        return [];
    }
};

export const getExchangeRates = async () => {

    try {
        const serverLink = 'http://localhost:8080/user/rate'
        const token = localStorage.getItem('token')

        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const response = await axios.get(serverLink, header)

        const { exchangeRates } = response.data;
        return exchangeRates.conversion_rates;

    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return null;
    }
};

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
        const { beneficiaryId } = response.data
        return beneficiaryId

    } catch (error) {
        console.error(error)
    }
}

export const getAllBen = async () => {
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

export const getRecipient = async (id) => {
    try {
        const serverLink = `http://localhost:8080/user/getrecipient/${id}`
        const token = localStorage.getItem('token')

        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const response = await axios.get(serverLink, header)

        const { recipient } = response.data

        return recipient

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