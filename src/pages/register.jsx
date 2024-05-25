

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

const Register = ({ setUsers }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.password2) {
      alert('Passwords do not match');
      return;
    }

    setUsers(prevUsers => [...prevUsers, userData]);
    alert('User registered successfully');

    setUserData({
      name: '',
      email: '',
      password: '',
      password2: ''
    });

    navigate('/login');
  };

  return (
    <section className="register">
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-heading">Sign Up</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input type="password" id="password2" name="password2" value={userData.password2} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn primary">Register</button>
          </form>
          <div className="horizontal-line"></div>
          <small>Already have an account?</small> <br />
          <Link to="/login" className="signInLink">Sign in</Link>
        </div>
      </div>
    </section>
  );
};

export default Register

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './register.css';

// const Register = ({ setUsers }) => {
//   useEffect(() => {
//     console.log('setUsers:', setUsers); // Check if setUsers is received correctly
//   }, [setUsers]);

//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password2: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (userData.password !== userData.password2) {
//       alert('Passwords do not match');
//       return;
//     }

//     if (typeof setUsers === 'function') {
//       setUsers((prevUsers) => [...prevUsers, userData]);
//       alert('User registered successfully');

//       setUserData({
//         name: '',
//         email: '',
//         password: '',
//         password2: ''
//       });

//       navigate('/login');
//     } else {
//       console.error('setUsers is not a function');
//     }
//   };

//   return (
//     <section className="register">
//       <div className="register-container">
//         <div className="register-box">
//           <h2 className="register-heading">Sign Up</h2>
//           <form className="register-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password2">Confirm Password</label>
//               <input type="password" id="password2" name="password2" value={userData.password2} onChange={handleChange} required />
//             </div>
//             <button type="submit" className="btn primary">Register</button>
//           </form>
//           <div className="horizontal-line"></div>
//           <small>Already have an account?</small> <br />
//           <Link to="/login" className="signInLink">Sign in</Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;
