import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from './firebase';

function Navbar() {
    const user= useSelector(selectUser)
    const dispatch = useDispatch()
     const logoutofApp=()=>{
         dispatch(logout())
         auth.signOut()
     }
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top options2">
  <div class="container-fluid ">
              <div>
                <a class="navbar-brand" href="#">
                <img src="https://www.smartrecruiters.com/blog/wp-content/uploads/2015/07/wpid-thumbnail-580b18bcf2d33f3c09c7407594e7f9651-1200x1200.png" alt="" width="120" height="40"/>
                </a>
                </div>
                <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse  navbar-collapse" id="navbarSupportedContent ">
                    {/*header options */}
                    <HeaderOptions  Icon={HomeIcon} tittle={'Home'}/>
                    <HeaderOptions  Icon={PeopleIcon} tittle={'My Network'}/>
                    <HeaderOptions  Icon={MessageIcon} tittle={'Messages'}/>
                    <HeaderOptions  Icon={WorkIcon} tittle={'Jobs'}/>
                    <HeaderOptions  Icon={NotificationsIcon} tittle={'Notifications'}/>
                    <HeaderOptions  avatar={user.photoUrl} tittle={user.name} onOut={logoutofApp}/>
              
                </div>
                </div>
  </div>
</nav>

    )
}

export default Navbar
