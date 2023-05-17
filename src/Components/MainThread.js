import React from 'react';
import MessageHolder from './MessageHolder';
import SelfMessage from './SelfMessage';

export default function MainThread({chats}) {
  return (
    <div className=''>   
        {/* <MessageHolder/>
        <SelfMessage/>
        <MessageHolder/>
        <MessageHolder/>
        <MessageHolder/>
        <SelfMessage/>
        <MessageHolder/>
        <MessageHolder/>
        <MessageHolder/>
        <SelfMessage/>
        <MessageHolder/> */}
        {
          chats.map((chat, index) => {
            return (
              <div key={index}>
                {chat.sender.self?<SelfMessage chat={chat}/>:<MessageHolder chat={chat}/>}
              </div>
            )
          }
          )
        }
    </div>
  )
}
