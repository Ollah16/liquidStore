import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        isCurrencyClicked: false,
        amount: '',
        equivalent: '',
        rate: '',
        countries: [],
        selectedCountry: {},
        informationType: '',
        fullName: '',
        accountNumber: '',
        addressLineI: '',
        addressLineII: '',
        addressLineIII: '',
        bankName: '',
        bankaddressLineI: '',
        bankaddressLineII: '',
        bankaddressLineIII: ''
    },
    reducers: {
        getSelectedCountry(state, action) {
            state.selectedCountry = action.payload
        },
        getAllCountry(state, action) {
            state.countries = action.payload
        },
        handleMoreCurrency(state, action) {
            state.isCurrencyClicked = action.payload
        },
        getAmount(state, action) {
            state.amount = Number(action.payload)
        },
        getRate(state, action) {
            state.rate = action.payload
            state.equivalent = state.amount * state.rate
        },
        changeCurrency(state, action) {
            state.selectedCountry = action.payload
            state.isCurrencyClicked = !state.isCurrencyClicked
        },
        setInformation(state, action) {
            state.informationType = action.payload;
        },
        getFullName(state, action) {
            state.fullName = action.payload
        },
        getAccountNumber(state, action) {
            state.accountNumber = action.payload
        },
        getAddressLineI(state, action) {
            state.addressLineI = action.payload
        },
        getAddressLineII(state, action) {
            state.addressLineII = action.payload
        },
        getAddressLineIII(state, action) {
            state.addressLineIII = action.payload
        },
        getBankName(state, action) {
            state.bankName = action.payload

        },
        getBankAddressI(state, action) {
            state.bankaddressLineI = action.payload
        },
        getBankAddressII(state, action) {
            state.bankaddressLineII = action.payload
        },
        getBankAddressIII(state, action) {
            state.bankaddressLineIII = action.payload
        },
        clearCurrentInputs(state) {
            state.fullName = ''
            state.accountNumber = ''
            state.addressLineI = ''
            state.addressLineII = ''
            state.addressLineIII = ''
            state.bankName = ''
            state.bankaddressLineI = ''
            state.bankaddressLineII = ''
            state.bankaddressLineIII = ''
        }
    }
})

export const { getAllCountry, handleMoreCurrency, changeCurrency, getSelectedCountry,
    setInformation, getFullName, getAddressLineI, getAddressLineII, getAccountNumber, getRate,
    getAddressLineIII, getBankAddressI, getBankAddressII, getBankAddressIII, getBankName, clearCurrentInputs, getAmount } = paymentSlice.actions
export const paymentReducer = paymentSlice.reducer