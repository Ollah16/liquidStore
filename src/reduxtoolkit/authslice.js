import { createSlice } from "@reduxjs/toolkit";

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
    allTransactions: [],
};

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
        case 'allTransactions':
            return `${day} ${monthShort.slice(0, 3)} ${year}`;
        default:
            return `${day} ${monthShort.slice(0, 3)} ${year}`;
    }
};

// Check for token at the initialization
const token = localStorage.getItem('token');
if (token) {
    initialState.isLoggedIn = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handle_Login_Signout(state, action) {
            state.isLoggedIn = action.payload;
            if (!action.payload) {
                localStorage.removeItem('token');
                state.isOTPValidated = false;
                // Clear user data
                state.firstName = '';
                state.lastName = '';
                state.email = '';
                state.phone = '';
                state.address = {};
                state.balance = '';
                state.accountType = '';
                state.sortCode = '';
                state.lastLogin = '';
                state.allTransactions = [];
            }
        },
        handleOTP(state, action) {
            if (state.isLoggedIn) {
                state.isOTPValidated = action.payload;
            }
        },
        getUser(state, action) {
            if (state.isLoggedIn) {
                const { firstName, title, lastName, email, phone, address, lastLogin } = action.payload;
                const formattedDate = formatDate(lastLogin, 'account');
                state.firstName = firstName;
                state.title = title;
                state.lastName = lastName;
                state.email = email;
                state.phone = phone;
                state.address = address;
                state.lastLogin = formattedDate;
            }
        },
        getAccountInformation(state, action) {
            if (state.isLoggedIn) {
                const { accountType, sortCode, balance, accountNumber } = action.payload;
                const newAccount = accountNumber.split('').fill('*', 0, 4).join('')
                state.balance = balance;
                state.accountNumber = newAccount;
                state.sortCode = sortCode;
                state.accountType = accountType.charAt(0).toUpperCase() + accountType.slice(1);
            }
        },
        getTransactions(state, action) {
            if (!state.isLoggedIn) return;

            const allTransactions = action.payload;

            const refinedTransactions = allTransactions
                .sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date))
                .map(tran => ({
                    ...tran,
                    transaction_date: formatDate(tran.transaction_date, 'allTransactions'),
                    isViewed: false,
                    referenceDate: formatDate(tran.transaction_date, 'referencedate'),
                    referenceTime: formatDate(tran.transaction_date, 'referencetime'),
                }));

            const mappedTransactions = refinedTransactions.reduce((acc, tran) => {
                const group = acc.find(group => group.groupDate === tran.transaction_date);
                if (group) {
                    group.groupTransaction.push(tran);
                } else {
                    acc.push({
                        groupDate: tran.transaction_date,
                        groupTransaction: [tran]
                    });
                }
                return acc;
            }, []);

            state.allTransactions = mappedTransactions;
        },
        viewReference(state, action) {
            if (state.isLoggedIn) {
                const { index, date } = action.payload
                const refinedallTransactions = state.allTransactions.map((tran) => {
                    const tDate = tran.groupDate === date;
                    return {
                        ...tran,
                        groupTransaction: tDate ? tran.groupTransaction.map((gt, ind) => {
                            const stateIndex = ind === index;
                            return {
                                ...gt,
                                isViewed: stateIndex ? !gt.isViewed : gt.isViewed,
                            }
                        }) : tran.groupTransaction,
                    };
                });

                state.allTransactions = refinedallTransactions;
            }
        },
        clearState(state) {
            state.isLoggedIn = false;
            state.isOTPValidated = false;
            state.firstName = '';
            state.lastName = '';
            state.email = '';
            state.phone = '';
            state.address = {};
            state.balance = '';
            state.accountType = '';
            state.sortCode = '';
            state.lastLogin = '';
            state.allTransactions = [];
        },
    },
});

export const {
    handle_Login_Signout,
    handleOTP,
    clearState,
    getUser,
    getTransactions,
    viewReference,
    getAccountInformation,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
