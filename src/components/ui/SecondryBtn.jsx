import React from 'react'

const SecondryBtn = (props) => {
  return (
    <button
              {...props}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              {props.title}
            </button>
  )
}

export default SecondryBtn