import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isLoggedIn: false,
    isOTPValidated: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {},
    balance: '',
    accountType: '',
    sortCode: '',
    lastLogin: '',
    statement: []
}

const formatDate = (dateString, type) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
    const monthShort = date.toLocaleString('default', { month: 'short' });
    const monthLong = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    switch (type) {
        case 'account':
            return `${day} ${monthLong} ${year} at ${formattedHours}:${minutes} ${ampm}`;
        case 'referencedate':
            return `${dayOfWeek} ${day} ${monthLong} ${year}`;
        case 'referencetime':
            return `${formattedHours}:${minutes} ${ampm}`;
        case 'statement':
            return `${day} ${monthShort.slice(0, 3)} ${year}`;
        default:
            return `${day} ${monthShort.slice(0, 3)} ${year}`;
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handle_Login_Signout(state, action) {
            state.isLoggedIn = action.payload
            if (!action.payload) localStorage.removeItem('token')

        },
        handleOTP(state, action) {
            state.isOTPValidated = action.payload
        },
        getUser(state, action) {
            const { firstName, title, lastName, email, phone, address, lastLogin } = action.payload

            const formattedDate = formatDate(lastLogin, 'account');

            state.firstName = firstName;
            state.title = title
            state.lastName = lastName;
            state.email = email;
            state.phone = phone;
            state.address = address;
            state.lastLogin = formattedDate;
        },
        getAccountInformation(state, action) {

            const { accountType, sortCode, balance, accountNumber } = action.payload

            state.balance = balance;
            state.accountNumber = accountNumber;
            state.sortCode = sortCode;
            state.accountType = accountType.toUpperCase().charAt(0) + accountType.slice(1, accountType.length)

        },
        getTransactions(state, action) {
            const statement = action.payload

            const refinedStatement = statement.sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date))
                .map((tran) => ({
                    ...tran,
                    transaction_date: formatDate(tran.transaction_date, 'statement'),
                    isViewed: false,
                    referenceDate: formatDate(tran.transaction_date, 'referencedate'),
                    referenceTime: formatDate(tran.transaction_date, 'referencetime')
                }
                ))


            state.statement = refinedStatement
        },
        viewReference(state, action) {
            const index = action.payload
            const refinedStatement = state.statement.map((tran, ind) => {
                const stateIndex = ind === index
                return {
                    ...tran,
                    isViewed: stateIndex ? !tran.isViewed : tran.isViewed
                }
            })


            state.statement = refinedStatement
        }

    }
})

export const { handle_Login_Signout, handleOTP, getUser, getTransactions, viewReference, getAccountInformation } = authSlice.actions
export const authReducer = authSlice.reducer