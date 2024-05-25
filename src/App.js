import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { PostProvider } from './component/PostContext';
import Layout from './component/layout';
import Errorpage from './pages/Errorpage';
import HOME from './pages/HOME';
import Postdetail from './pages/Postdetail';
import Register from './pages/register';
import Login from './pages/Login';
import Authors from './pages/Authors';
 import UserProfile from './pages/userProfile';
import Createpost from './pages/Createpost';
import Editpost from './pages/Editpost';
// import AuthorPosts from './pages/Authorposts';
// import Dashboard from './pages/Dashboard';
import AboutUs from './pages/Aboutus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <HOME /> },
      { path: "posts/:id", element: <Postdetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
       { path: "profile/:id", element: <UserProfile /> },
      { path: "author", element: <Authors /> },
      { path: "create", element: <Createpost /> },
      // { path: "posts/users/:id", element: <AuthorPosts /> },
      // { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <Editpost /> },
       { path: "about", element: <AboutUs /> }
    ]
  }
]);

const App = () => {
  return (
    // <PostProvider>
      <RouterProvider router={router} />
    // </PostProvider>
  );
};

export default App;