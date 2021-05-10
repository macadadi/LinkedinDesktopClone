import React from 'react'
import './feeds.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import Posts from './Posts';

function Feed() {

    return (
        <div className="feedSection">
            <div className="inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
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
              <Posts />
        </div>
    )
}

export default Feed
