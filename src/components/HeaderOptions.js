import { Avatar } from '@material-ui/core'
import React from 'react'

function HeaderOptions({Icon,tittle,avatar}) {
    return (
     <div className="headerOptions">
     <center> {Icon && <Icon className="headerOptionsicon"/>} 
     {avatar && <Avatar className="headerOptionsicons" src={avatar}/>}
     </center>

       <h4 className="headerOptions__title">{tittle}</h4>
     </div>
    )
}

export default HeaderOptions
