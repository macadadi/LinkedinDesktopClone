import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)

    const RecentItem =(topic)=>{
        return( <div className="sidebar_recentItem">
            <p>{topic}</p>
        </div>)
    }
    return (
        <div className="sidebardiv">
            <div className="sidebartop">
                <img src="http://www.nextageafrica.co.ke/properties/wp-content/uploads/2018/10/cau-dat-tea-plantations-dalat-tourist-attractions-things-to-do-1-760x432.jpg" alt="not available" />
                <Avatar src={user?.photoUrl} className="sidebarAvatar"  >{ user.name[0]}</Avatar>
                <h2>{user.name}</h2>
                <p>{user.email}</p>

            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <h4>Viewers</h4>
                    <p className="sidebar_statNuber">
                        2300
                    </p>

                </div>
                <div className="sidebar_stat">
                <h4>followers</h4>
                    <p className="sidebar_statNuber">
                        1200
                    </p>
                    
                </div>
            </div>
            <div className="sidebar_bottom">
                <h3>Recent</h3>
                {RecentItem('Programming')}
                {RecentItem('Software Engineering')}
                {RecentItem('React development')}
                {RecentItem('Computer Security')}
                {RecentItem('design')}
                {RecentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
