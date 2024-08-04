import { createSlice } from '@reduxjs/toolkit'
import MenuContents from '../constants/HomePageConstants/MenuContents'

const navlist = ['Personal', 'Business', 'Private Banking', 'International Banking']

const searchOptions = [
    'Open a Club Lloyds account',
    'Open a bank account',
    'Find a branch near me',
    'How can I apply for a Classic current account?',
    'How can I apply for travel insurance?',
    'How can I open a savings account?',
    'Explore your ISA options'
]

const { menuContent, menuSubContent } = MenuContents()


const initialState = {
    navlist,
    current: 'Personal',
    isExpanded: false,
    isLoginDropDown: false,
    searchOptions,
    isProducts: false,
    searchTitle: '',
    isMenu: false,
    isSearch: false,
    menuContent,
    menuSubContent,
    currentId: 0,
    currentMenuTitle: menuContent[0].title,
    currentMenuSubTitle: menuContent[0].subTitle,
    currentWelcome: {},
    isNavTopLess: false,
    currentClick: ''
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        getCurrent(state, action) {
            state.current = action.payload;
        },
        toggleProducts(state) {
            state.isProducts = !state.isProducts;
        },
        expandNav(state) {
            state.isExpanded = !state.isExpanded;
        },
        getInput(state, action) {
            state.searchTitle = action.payload;
        },
        toggleLoginBox(state, action) {
            state.isSearch = false;
            state.isMenu = false;
            state.isLoginDropDown = action.payload;
        },
        toggleMenu(state, action) {
            state.isLoginDropDown = false;
            state.isSearch = false;
            state.isMenu = action.payload;
        },
        toggleSearch(state, action) {
            state.isLoginDropDown = false;
            state.isMenu = false;
            state.isSearch = action.payload;
        },
        getClickedMenu(state, action) {
            const clickedMenu = state.menuContent.find(menu => menu.id === Number(action.payload));
            if (clickedMenu) {
                state.currentMenuTitle = clickedMenu.title;
                state.currentMenuSubTitle = clickedMenu.subTitle;
                state.currentId = clickedMenu.id;
            }
        },
        resetMenu(state, action) {
            state.currentId = action.payload;
        },
        handleNavOnScroll(state, action) {
            state.isNavTopLess = action.payload
        },
        resetNav(state) {
            state.isLoginDropDown = false
            state.isSearch = false
            state.isMenu = false
        },
        getCurrentClick(state, action) {
            const value = action.payload
            const isExist = value === state.currentClick
            state.currentClick = isExist ? '' : value
        }
    },
});

export const navReducer = navSlice.reducer
export const {
    expandNav,
    getCurrent,
    toggleLoginBox,
    getInput,
    toggleMenu,
    toggleSearch,
    getClickedMenu,
    resetMenu,
    handleNavOnScroll,
    toggleProducts,
    resetNav,
    getCurrentClick } = navSlice.actions
