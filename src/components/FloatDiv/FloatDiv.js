import React from 'react'
import './FloatDiv.css'

const FloatDiv = ({image, txt1, txt2}) => {
  return (
    <div className="floatingdiv">
        <img src={image}/>
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatDiv
