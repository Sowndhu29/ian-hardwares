import { createContext } from 'react';

export const urls = {
    landing: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
    home: '/home',
    stocks: '/stocks',
    stockList: '/stock-list',
    materialCatalogue: '/material-catalogue',
    materialList: '/material-list',
    vendors: '/vendors',
    cart: '/cart',
    order: '/purchase-order'
}

const UrlContext = createContext(urls);
export default UrlContext;