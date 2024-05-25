
import React, { useState } from 'react';
import {
  Input,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ValidateUser = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log("Email:", Email);
    console.log("Password:", Password);
    const user = {
      Email,
      Password
    };
    fetch("https://tame-gold-cormorant-robe.cyclic.app/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      console.log("Response status:", response.status);
      return response.json();
    }).then((response) => {
      console.log("Response JSON:", response);
      if (response.Message === "Login Successful !") {
        localStorage.setItem("Current_User", JSON.stringify(response.user));
        localStorage.setItem("User_role", response.user.Role);
        localStorage.setItem("token", response.token);
        localStorage.setItem("islogged", true);
        onOpen(); // Open the modal on successful login
      } else {
        alert("Invalid Credentials");
      }
    }).catch((error) => {
      alert("Failed to login!");
      console.error("Error:", error);
    });
  };

  const handleModalClose = () => {
    onClose();
    navigate("/blogs");
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'url("/path-to-your-background-image.jpg") no-repeat center center/cover',
      padding: '20px'
    }}>
      <form onSubmit={ValidateUser} style={{
        width: "100%",
        maxWidth: "400px",
        padding: "30px",
        margin: "auto",
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{
          fontSize: "30px",
          fontWeight: "600",
          color: "white",
          textAlign: "center",
          marginBottom: "20px"
        }}>Login</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            borderBottom: "2px solid white",
            outline: "none"
          }}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={Password}
          onChange={(e) => SetPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            borderBottom: "2px solid white",
            outline: "none"
          }}
        />
        <Button type='submit' colorScheme='teal' variant='solid' style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "teal",
          borderRadius: "4px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}>Login</Button>
      </form>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Heading as='h2' size='2xl' style={{
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          Adventure is out there
        </Heading>
        <Link to='/signup' style={{
          color: "white",
          fontWeight: "600",
          textDecoration: "none"
        }}>
          Click to signup!
        </Link>
      </div>

      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Successful!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Welcome back!
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleModalClose}>Go to Blogs</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Login;