// userprofile.js
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar5.jpeg'
import {FaEdit} from "react-icons/fa"
// import { FaCheck } from 'react-icons/fa';

const UserProfile=()=>{
    const [avatar, setAvatar]=useState(Avatar)
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [currentPassword, setCurrentPassword]=useState('')
    const [newPassword, setNewPassword]=useState('')
    const [confirmNewPassword, setConfirmNewPassword]=useState('')

    return(
        <section className="profile">
            <div className='container profile__container'>
                {/* <Link to={'/myposts/sdfsdf'} className='btn'>My posts</Link> */}
                <h2>My Profile</h2>
                <div className='profile__details'>
                    <div className='avatar__wrapper'>
                        <div className='profile__avatar'>
                            <img src={avatar} alt=""/>                       
                           
                    </div>
                    {/* form to update avatar */}
                    <form className='avatar__form'>
                        <input type='file' name="avatar" id="avatar" onChange={e=>setAvatar(e.target.files[0])}
                        accept='png, jpg, jpeg'/>
                    </form>
                    {/* <button className='profile__avatar-btn'><FaCheck/></button> */}
                </div>
                        <label htmlFor="avatar"><FaEdit/></label>
                
                {/* form to update user details */}
                 <form className='form profile__form'>
                 <h1>Simran</h1>
                    {/* <p className='form__error-message'>this is an error message</p> */}
                    <input style={{font:'16px'}} type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
                    <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Current password' value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)}/>
                    <input type='password' placeholder='New password ' value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
                    <input type='password' placeholder='Cinfirm new password' value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)}/>
                    <button type='submit' className='btn primary'>Update details</button>

                </form>
            </div> </div>
            </section>
    )
}
export default UserProfile