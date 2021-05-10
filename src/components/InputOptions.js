import React from 'react'

function InputOptions({Icon,title,color}) {
    return (
        <div className="inputOptions_main">
      <Icon style={{color:color}}/>
      <p style={{paddingLeft:'5px'}}>{title}</p>  
        </div>
    )
}

export default InputOptions
