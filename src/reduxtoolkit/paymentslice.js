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
            state.equivalent = (state.amount * state.rate).toFixed(2)
            state.total = state.amount ? (state.amount + Number(9.50)).toFixed(2) : null
        },
        changeCurrency(state, action) {
            state.selectedCountry = action.payload
            state.isCurrencyClicked = !state.isCurrencyClicked
        },
        setInformation(state, action) {
            state.informationType = action.payload;
        },
        getFullName(state, action) {
            state.recipientFullName = action.payload
        },
        getAcctNumber(state, action) {
            state.recipientActNumber = action.payload
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
            state.recipeintFullName = ''
            state.recipeintActNumber = ''
            state.addressLineI = ''
            state.addressLineII = ''
            state.addressLineIII = ''
            state.bankName = ''
            state.bankaddressLineI = ''
            state.bankaddressLineII = ''
            state.bankaddressLineIII = ''
            state.amount = ''
            state.rate = ''
            state.equivalent = ''
        }
    }
})

export const { getAllCountry, handleMoreCurrency, changeCurrency, getSelectedCountry,
    setInformation, getFullName, getAddressLineI, getAddressLineII, getAcctNumber, getRate,
    getAddressLineIII, getBankAddressI, getBankAddressII, getBankAddressIII, getBankName, clearCurrentInputs, getAmount } = paymentSlice.actions
export const paymentReducer = paymentSlice.reducer