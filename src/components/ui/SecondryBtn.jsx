import React from 'react'
import { twMerge } from 'tailwind-merge'

const SecondryBtn = (props) => {
  return (
    <button
              {...props}
              className={twMerge("bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600", props.className)}
            >
              {props.title}
            </button>
  )
}

export default SecondryBtn