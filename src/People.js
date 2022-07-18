import React, { useReducer } from 'react'
import {useState } from "react";
import { data } from './data';
import Modal from './Modal';

// const reducer = (state, action) =>{

// }

// const defaultState ={
//     people: data, 

// }

const  People = () => {

  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState(data);

// const [state, dispatch] = useReducer(reducer, defaultState)


const addPerson = (e) =>{
e.preventDefault();

if(name){
// add a person
setShowModal(true);
const person = {id: new Date().getTime().toString(), name};

setEmployee((employee) =>{
    return[...employee, person]
})
// empty the input
setName(' ');

}else{

// display an error message

alert("Fill out the form !")

}


}

const closeModal = () => {
    setShowModal(false);
}


  return (
    <div className='people'>

    {showModal && <Modal closeModal={closeModal}/>}
        <h1>This is the People Component</h1>
<article>
<form className='form' onSubmit={addPerson}>

    <div className='form-control'>

<label htmlFor='name'> Name: </label>
<input 
type='text' 
id='name'
 value={name}
 onChange={(e) => setName(e.target.value)}
  /> 


    </div>
    <button type='submit'>Add an Employee</button>
</form>
{employee.map((person) =>{

    const {id, name} = person; 
    return (
        <div className='item' key={id}>

     <h4>{name}</h4>
     <button className='btn'>Delete</button>
        </div>
    )
})

}


</article>

    </div>
  )
}



export default People;