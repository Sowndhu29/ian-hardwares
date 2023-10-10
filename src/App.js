import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from 'antd';
import UrlContext, { urls } from './components/common/context/urlContext';
import './App.css';

import LandingPage from './components/landingPage/landingPage';
import SignInPage from './components/auth/signIn';
import SignUpPage from './components/auth/signUp';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [],
    },
    {
      path: "sign-in",
      element: <SignInPage />,
    },
    {
      path: "sign-up",
      element: <SignUpPage />,
    },
  ], { basename: "/" });

  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#000',
            borderRadius: 5,
          },
        }}
      >
        <UrlContext.Provider value={urls}>
          <RouterProvider router={router} />
        </UrlContext.Provider>
      </ConfigProvider>
    </React.Fragment >
  );
}

export default App;
