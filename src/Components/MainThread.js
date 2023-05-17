import React from 'react';
import MessageHolder from './MessageHolder';
import SelfMessage from './SelfMessage';
import InputHolder from './InputHolder';

export default function MainThread() {
  return (
    <div className=''>   
        <MessageHolder/>
        <SelfMessage/>
        <MessageHolder/>
        <MessageHolder/>
        <MessageHolder/>
        <SelfMessage/>
        <MessageHolder/>
        <MessageHolder/>
        <MessageHolder/>
        <SelfMessage/>
        <MessageHolder/>
        <MessageHolder/>
        <div>
        <InputHolder /> 
        </div>
    </div>
  )
}
