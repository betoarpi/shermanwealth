import React from 'react';
import Header from './Header/index';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

export default Layout;
