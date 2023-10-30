import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from './components/auth/signIn';
import SignUpPage from './components/auth/signUp';
import { urls } from './components/common/context/urlContext';
import HomePage from './components/homePage/homePage';
import LandingPage from './components/landingPage/landingPage';
import VendorList from './components/vendorManagement/vendorList';
import StockLanding from './components/stockManagement/stockLanding';
import StockList from './components/stockManagement/stockList';
import MaterialLanding from './components/materialManagement/materialLanding';
import MaterialList from './components/materialManagement/materialList';
import CartList from './components/cart/cartList';
import PurchaseOrder from './components/cart/purchaseOrder';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: urls.landing,
            element: <LandingPage />,
            children: [],
        },
        {
            path: urls.signIn,
            element: <SignInPage />,
        },
        {
            path: urls.signUp,
            element: <SignUpPage />,
        },
        {
            path: urls.home,
            element: <HomePage />,
        },
        {
            path: urls.vendors,
            element: <VendorList />,
        },
        {
            path: urls.stocks,
            element: <StockLanding />,
        },
        {
            path: urls.stockList,
            element: <StockList/>,
        },
        {
            path: urls.materialCatalogue,
            element: <MaterialLanding/>,
        },
        {
            path: urls.materialList,
            element: <MaterialList/>,
        },
        {
            path: urls.cart,
            element: <CartList/>,
        },
        {
            path: urls.order,
            element: <PurchaseOrder/>,
        },
    ], { basename: '/' });

    return <RouterProvider router={router} />

}

export default Router;
