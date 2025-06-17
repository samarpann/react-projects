// filepath: /C:/Users/Samarpan/OneDrive/Desktop/react.practice/Css/src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header.jsx/Header';
import Footer from './Components/Footer.jsx/Footer';

function Layout() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   
   
   </>
  );
}

export default Layout;