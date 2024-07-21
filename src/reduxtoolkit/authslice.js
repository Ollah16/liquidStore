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
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    if (type === 'account') return `${day} ${month} ${year} at ${formattedHours}:${minutes} ${ampm}`;
    if (type === 'statement') return `${day}/${month}/${year}`;

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
            const { firstName, lastName, email, phone, balance, accountNumber, address, accountType, sortCode, lastLogin } = action.payload

            const formattedDate = formatDate(lastLogin, 'account');

            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.phone = phone;
            state.address = address;
            state.balance = balance;
            state.accountNumber = accountNumber;
            state.accountType = accountType;
            state.sortCode = sortCode;
            state.lastLogin = formattedDate;
        },

        getTransactions(state, action) {
            const statement = action.payload

            const refinedStatement = statement.sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date))
                .map((tran) => ({
                    ...tran,
                    transaction_date: formatDate(tran.transaction_date, 'statement')
                }
                ))


            state.statement = refinedStatement
        }

    }
})

export const { handle_Login_Signout, handleOTP, getUser, getTransactions } = authSlice.actions
export const authReducer = authSlice.reducer