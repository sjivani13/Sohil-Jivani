import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'




const ImageUpdater = ({handleFileChange, onFileSubmit}) => {
  return (
    <div>

    <div>
        
      <input type="file" name="File" id="File" onChange={handleFileChange}
       />
       
    </div>
    <button type="submit">Custom Image</button>
    
    </div>
  )
}

export default ImageUpdater
