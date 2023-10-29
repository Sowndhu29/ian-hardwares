import { ConfigProvider } from 'antd';
import React from 'react';
import './App.css';
import UrlContext, { urls } from './components/common/context/urlContext';
import Router from './router';
import DefaultTheme from './components/common/theme/defaultTheme.json'

function App() {

  return (
    <React.Fragment>
      <ConfigProvider
        theme={DefaultTheme}
      >
        <UrlContext.Provider value={urls}>
          <Router />
        </UrlContext.Provider>
      </ConfigProvider>
    </React.Fragment >
  );
}

export default App;
