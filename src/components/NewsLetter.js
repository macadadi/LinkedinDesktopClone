import React from 'react'

function NewsLetter() {
    const newsfeed=(title,message,view)=>(
        
        <div><h4>{title}</h4>
        <p>{message}</p>
        <h6>{view} views</h6></div>
      
    )
    return (
        <div>
           <h2>feeds</h2>
           { newsfeed('React','There is a new react library...','234 ')}
           { newsfeed('New startup','Google to finance new... ','567')}
           { newsfeed('BlockChain','A new cryptocurrancy has...','800')}
        </div>
    )
}

export default NewsLetter
