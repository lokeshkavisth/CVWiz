import React from 'react'
import { twMerge } from 'tailwind-merge'


const PrimaryBtn = (props) => {
  return (
     <button
     {...props}
         
          className={twMerge("bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", props.className)}
        >
          {props.title}
        </button>
  )
}

export default PrimaryBtn