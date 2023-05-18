import React from 'react';
import MessageHolder from './MessageHolder';
import SelfMessage from './SelfMessage';

export default function MainThread({chats}) {
  return (
    <div className=''>   
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
