import React from 'react'

function VerifyStatus(props) {
  return  (props.trigger) ?(
    <div>
    {/* <button classname="close-btn">close</button> */}
    {props.children}
    </div>
  )
  :
  ""
}

export {VerifyStatus}