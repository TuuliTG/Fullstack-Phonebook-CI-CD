import React from "react"

const Notification = ( props ) => {
    if (props.message === null) {
      return null
    }
  
    return (
      <div className={props.message.classText}>
        {props.message.text}
      </div>
    )
  }

export default Notification