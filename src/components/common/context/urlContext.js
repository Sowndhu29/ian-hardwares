import { createContext } from 'react';

export const urls = {
    landing: '/',
    signIn: '/sign-in',
    signUp: './sign-up',
    home: './home'
}

const UrlContext = createContext(urls);
export default UrlContext;