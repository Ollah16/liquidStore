import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: { isCurrencyClicked: false, countries: [], selectedCountry: {}, informationType: '' },
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
        changeCurrency(state, action) {
            state.selectedCountry = action.payload
            state.isCurrencyClicked = !state.isCurrencyClicked
        },
        setInformation(state, action) {
            state.informationType = action.payload;

        }


    }
})

export const { getAllCountry, handleMoreCurrency, changeCurrency, getSelectedCountry, setInformation } = paymentSlice.actions
export const paymentReducer = paymentSlice.reducer