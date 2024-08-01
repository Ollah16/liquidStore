import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        isCurrencyClicked: false,
        amount: '',
        paymentRef: '',
        equivalent: '',
        rate: '',
        countries: [],
        selectedCountry: {},
        informationType: '',
        recipientFullName: '',
        recipientActNumber: '',
        addressLineI: '',
        addressLineII: '',
        addressLineIII: '',
        bankName: '',
        bankaddressLineI: '',
        bankaddressLineII: '',
        bankaddressLineIII: '',
        total: ''
    },
    reducers: {
        getSelectedCountry(state, action) {
            if (!action.payload) return
            state.selectedCountry = action.payload
        },
        getAllCountry(state, action) {
            if (!action.payload) return
            state.countries = action.payload
        },
        handleMoreCurrency(state, action) {
            if (!action.payload) return
            state.isCurrencyClicked = action.payload
        },
        getAmount(state, action) {
            if (!action.payload) return
            state.amount = Number(action.payload)
        },
        getPaymentref(state, action) {
            if (!action.payload) return
            state.paymentRef = action.payload
        },
        getRate(state, action) {
            if (!action.payload) return
            state.rate = action.payload
            state.equivalent = (state.amount * state.rate).toFixed(2)
            state.total = state.amount ? (state.amount + Number(9.50)).toFixed(2) : null
        },
        changeCurrency(state, action) {
            if (!action.payload) return
            state.selectedCountry = action.payload
            state.isCurrencyClicked = !state.isCurrencyClicked
        },
        setInformation(state, action) {
            if (!action.payload) return
            state.informationType = action.payload;
        },
        getFullName(state, action) {
            if (!action.payload) return
            state.recipientFullName = action.payload
        },
        getAcctNumber(state, action) {
            if (!action.payload) return
            state.recipientActNumber = action.payload
        },
        getAddressLineI(state, action) {
            if (!action.payload) return
            state.addressLineI = action.payload
        },
        getAddressLineII(state, action) {
            if (!action.payload) return
            state.addressLineII = action.payload
        },
        getAddressLineIII(state, action) {
            if (!action.payload) return
            state.addressLineIII = action.payload
        },
        getBankName(state, action) {
            if (!action.payload) return
            state.bankName = action.payload
        },
        getBankAddressI(state, action) {
            if (!action.payload) return
            state.bankaddressLineI = action.payload
        },
        getBankAddressII(state, action) {
            if (!action.payload) return
            state.bankaddressLineII = action.payload
        },
        getBankAddressIII(state, action) {
            if (!action.payload) return
            state.bankaddressLineIII = action.payload
        },
        clearCurrentInputs(state) {
            state.recipientFullName = ''
            state.recipientActNumber = ''
            state.addressLineI = ''
            state.addressLineII = ''
            state.addressLineIII = ''
            state.bankName = ''
            state.bankaddressLineI = ''
            state.bankaddressLineII = ''
            state.bankaddressLineIII = ''
            state.paymentRef = ''
            state.amount = ''
        }
    }
})

export const { getAllCountry, handleMoreCurrency, changeCurrency, getSelectedCountry,
    setInformation, getFullName, getAddressLineI, getAddressLineII, getAcctNumber, getRate, getPaymentref,
    getAddressLineIII, getBankAddressI, getBankAddressII, getBankAddressIII, getBankName, clearCurrentInputs, getAmount } = paymentSlice.actions
export const paymentReducer = paymentSlice.reducer