import React from 'react'

const DangerBtn = (props) => {
  return (
   <button
                {...props}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                {props.title}
              </button>
  )
}

export default DangerBtn