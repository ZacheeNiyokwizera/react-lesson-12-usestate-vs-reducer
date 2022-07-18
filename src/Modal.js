import React from 'react'
import { useEffect } from 'react';

const Modal = ({closeModal}) => {

    useEffect(() => {
     setTimeout(() =>{
        closeModal(); 
     }, 2000)
        
    });


  return (
    <div>
      <h2>Hey There !</h2>
    </div>
  )
}

export default Modal
