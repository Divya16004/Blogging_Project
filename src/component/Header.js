import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import logo from '../images/logo.jpeg';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import Button from './Button';
import SearchBar from './SearchBar';
import { useAuth } from "@clerk/clerk-react"; 
// import { CiSearch } from "react-icons/ci";

const Header = ({ buttonColor, onSearch }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const handleSignOut = () => {
      // Handle sign out logic here, if needed
    };
  
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo-container">
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="menu">
                        <li>
                           <div className="search_container">
                             <SearchBar onSearch={onSearch}/>  
                            </div>
                        </li>
                        <li><Link to="/profile/sdfsdf">Me</Link></li>
                        <li><Link to="/create">Create Post</Link></li>
                        <li><Link to="about">AboutUs</Link></li>
                        {/* <li><Link to="/authors">Authors</Link></li> */}
                        <li><div className="navbar-button text-white">
                  <SignedIn>
                    <UserButton onClick={handleSignOut} />
                  </SignedIn>
                  <SignedOut>
                      <SignInButton style={{backgroundColor:"skyblue",padding:"10px 20px",fontsize:"16px"}} className="md:px-3 md:py-2 px-1 py-2 rounded-md"/>
                  </SignedOut>
               </div></li>
                    </ul>
                </div>
                
               
            </nav>
        </>
    );
}

export default Header