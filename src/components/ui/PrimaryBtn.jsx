import React from 'react'

const PrimaryBtn = (props) => {
  return (
     <button
     {...props}
         
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {props.title}
        </button>
  )
}

export default PrimaryBtn