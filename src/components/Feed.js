import React, { useState,useEffect } from 'react'
import './feeds.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Posts from './Posts';
import{ db} from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Feed() {
    const user = useSelector(selectUser)
    const [chat,setChat]= useState('')
    const [postfeed,setPostfeed]=useState([])

    useEffect(() => {
      db.collection("post").orderBy('timestamp','desc').onSnapshot((Snapshot)=>
      setPostfeed(
          Snapshot.docs.map((doc)=>({
              id:doc.id,
              data : doc.data()
          }))
      ))
    }, [])
    const handleform = (e)=>{
        e.preventDefault()
        db.collection("post").add(
            {name : user.name ,
            position : user.email ,
            message :chat,
            photoUrl :'',
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),

            }
        )
        setChat('')
    }

    return (
        <div className="feedSection">
            <div className="inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form onSubmit={handleform} className='feedform'>
                        <input  type="text" placeholder='Type to send a message' value={chat} onChange={e=>setChat(e.target.value)}/>
                        <button type="submit" >Send</button>
                    </form>
                   
                </div>
                <div className="input_options">
                <InputOptions title={'Photos'} Icon={PhotoIcon} color={"blue"}/>
                <InputOptions title={'video'} Icon={VideocamIcon} color={"red"}/>
                <InputOptions title={'Event'} Icon={EventAvailableIcon} color={"yellow"}/>
                <InputOptions title={'write Article'} Icon={AssignmentIcon} color={"gray"} />
                </div>
          
            </div>
            <div className="horizontal_line">
                <hr/> Sorted by:
            </div>
            {postfeed.map((pst)=>(<Posts key={pst.id} name={pst.data.name} position={pst.data.position}
               message={pst.data.message}/>))}
            
        </div>
    )
}

export default Feed
