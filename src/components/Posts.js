import React from 'react'
import { Avatar, Button } from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Posts() {
    const postFeeds=(feed)=>{
        return(
            <div className="post-feed">
               <p> {feed}</p>
            </div>
        )
    }
    return (
        <div className="mainpost">
        <div className="mainpost_top">
            <Avatar />
            <div className="mainpost_top_user">
                <h2>Mark Adadi</h2>
                <h4>Freelance developer and machine learning</h4>
                  <p>1 h</p>
            </div>
           
        </div>
        <div className="post_body">
                <p>
                        Material Icons
                        1,100+ React Material icons ready
                        to use from the official website.
                           <br/>Material Icons
                        1,100+ React Material icons ready
                        to use from the official website.
                        <br/>Material Icons
                        1,100+ React Material icons ready
                        to use from the official website.
                        <br/>Material Icons
                        1,100+ React Material icons ready
                        to use from the official website.
              </p>
            </div>
            <div className="postSection_bottom">
                <div className="post_feeds">
                    {postFeeds('Im curious ..')}
                    {postFeeds('This will help me ..')}
                    {postFeeds('Love this ..')}
                    {postFeeds('Thank so much ..')}
                </div>
                <div className="posts_comments">
                <InputOptions title={'like'} Icon={ThumbUpAltIcon} color={"gray"}/>
                <InputOptions title={'commend'} Icon={CommentIcon} color={"gray"}/>
                <InputOptions title={'share'} Icon={ShareIcon} color={"gray"}/>
                <InputOptions title={'Send'} Icon={SendIcon} color={"gray"}/>         
                </div>
            </div>
    </div>

    )
}

export default Posts
