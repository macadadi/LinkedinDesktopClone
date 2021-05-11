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




function Header() {
    const user= useSelector(selectUser)
    const dispatch = useDispatch()
     const logoutofApp=()=>{
         dispatch(logout())
         auth.signOut()
     }
    return (
        <div>
            {/* header*/}
            <div className="header" >
                {/*header left */}
                <div className="header_left">
                    <img src="https://www.smartrecruiters.com/blog/wp-content/uploads/2015/07/wpid-thumbnail-580b18bcf2d33f3c09c7407594e7f9651-1200x1200.png" alt="" />
                    {/*search part */}
                    <div className="header_search">
                       
                        <input type="text" placeholder="search" />
                        <SearchIcon />
                    </div>

                </div>
                {/*header right */}
                <div className="header_right">
                    {/*header options */}
                    <HeaderOptions  Icon={HomeIcon} tittle={'Home'}/>
                    <HeaderOptions  Icon={PeopleIcon} tittle={'My Network'}/>
                    <HeaderOptions  Icon={MessageIcon} tittle={'Messages'}/>
                    <HeaderOptions  Icon={WorkIcon} tittle={'Jobs'}/>
                    <HeaderOptions  Icon={NotificationsIcon} tittle={'Notifications'}/>
                    <HeaderOptions  avatar="https://www.compassion.com/Images/kenya-child-smiles-desert.jpg" tittle={user.name} onOut={logoutofApp}/>
                    

                </div>
            </div>
        </div>
    )
}

export default Header
