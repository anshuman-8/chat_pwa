import React from 'react'

export default function SelfMessage({chat}) {
  return (
    <div className='flex flex-row space-x-2 mx-3 my-5 justify-end'>
        <div className="max-w-xs p-2 shadow-lg rounded-t-2xl rounded-s-2xl font-light text-gray-100 bg-blue-600">
        {chat.message}
      </div>
    </div>
  )
}
