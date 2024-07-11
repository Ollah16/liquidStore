import { createSlice } from '@reduxjs/toolkit'
import MenuContents from '../constants/MenuContents'

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
    isLoginDropDown: false,
    searchOptions,
    searchTitle: '',
    isMenu: false,
    isSearch: false,
    menuContent,
    menuSubContent,
    currentId: 0,
    currentMenuTitle: '',
    currentMenuSubTitle: '',
    currentWelcome: {}
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        getCurrent(state, action) {
            state.current = action.payload;
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
            state.currentId = 0;
            state.currentMenuTitle = menuContent[0].title;
            state.currentMenuSubTitle = menuContent[0].subTitle;
        },
        toggleSearch(state) {
            state.isLoginDropDown = false;
            state.isMenu = false;
            state.isSearch = !state.isSearch;
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
        }
    },
});

export const navReducer = navSlice.reducer
export const { getCurrent, toggleLoginBox, getInput, toggleMenu, toggleSearch, getClickedMenu, resetMenu } = navSlice.actions
