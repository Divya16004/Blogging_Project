

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is the CreatePost page ("/create")
  const isCreatePostPage = location.pathname === "/create";

  return (
    <>
      <Header />
      <Outlet />
      {/* Render the Footer only if it's not the CreatePost page */}
      {!isCreatePostPage && <Footer />}
    </>
  );
}

export default Layout;