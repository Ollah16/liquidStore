import axiosInstance from "./axiosInstance";

export const getCredentials = async () => {
    try {
        const response = await axiosInstance.get('/user/getdetails');
        const { userDetails } = response.data;
        return userDetails;
    } catch (error) {
        console.error(error);
    }
};

export const logUser = async (bodyContent) => {
    try {
        // Send login request to server
        const response = await axiosInstance.post('/user/login', bodyContent);
        const { token } = response.data;
        return token

    } catch (error) {
        console.error("Error handling form submission:", error.message);
    }
}

export const handleRequestOtp = async () => {

    try {
        const response = await axiosInstance.get('/user/getOtp');
        const { message } = response.data
        return message

    } catch (error) {
        console.error('Error requesting OTP:', error.message);
    }
};

export const handleSubmitOtp = async (otp) => {

    try {
        const response = await axiosInstance.post('/user/submitotp', { otp })
        const { token } = response.data;
        return token

    } catch (error) {
        // Handle errors from the server
        console.error('Error submitting OTP:', error);
    }
};

export const getAccountInfo = async () => {
    try {
        const response = await axiosInstance.get('/user/getaccountinformation');
        const { accountInformation } = response.data;
        return accountInformation;
    } catch (error) {
        console.error(error);
    }
};

export const getStatement = async () => {
    try {
        const response = await axiosInstance.get('/user/getstatement');
        const { statement } = response.data;
        return statement;
    } catch (error) {
        console.error(error);
    }
};

export const getCountries = async () => {
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
        const response = await axiosInstance.get('https://restcountries.com/v3.1/all');
        const countries = response.data;

        const europeanCountries = countries.filter(country => country.region === 'Europe');
        const nonEuropeanCountries = countries.filter(country => popularCountries.includes(country.name.common));

        const europeanData = [{
            label: 'Europe (Euro)',
            countryName: 'Europe',
            abbr: 'EURO',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
            currency: 'Euro'
        }];

        const nonEuropeanData = nonEuropeanCountries
            .map(country => ({
                label: `${country.name.common} (${country.cca2})`,
                countryName: country.name.common,
                abbr: country.cca2,
                flag: country.flags.png,
                currency: country.currencies ? Object.values(country.currencies)[0].name : 'N/A'
            }));

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
        const response = await axiosInstance.get('/user/rate');
        const { exchangeRates } = response.data;
        return exchangeRates.conversion_rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return null;
    }
};

export const addBen = async (body) => {
    try {
        const response = await axiosInstance.post('/user/addBeneficiary', body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        const { beneficiaryId } = response.data;
        return beneficiaryId;
    } catch (error) {
        console.error(error);
    }
};

export const getAllBen = async () => {
    try {
        const response = await axiosInstance.get('/user/getAllBeneficiary');
        const { allBeneficiary } = response.data;
        return allBeneficiary;
    } catch (error) {
        console.error(error);
    }
};

export const getRecipient = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/getrecipient/${id}`);
        const { recipient } = response.data;
        return recipient;
    } catch (error) {
        console.error(error);
    }
};

export const deleteBeneficiary = async (id) => {
    try {
        const response = await axiosInstance.patch(`/user/delBeneficiary/${id}`);
        const { userDetails } = response.data;
        return userDetails;
    } catch (error) {
        console.error(error);
    }
};
