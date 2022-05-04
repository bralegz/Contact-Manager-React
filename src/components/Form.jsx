import { render } from '@testing-library/react';
import React, {useState} from 'react';

function Form() {
    const [contact, setContact] = useState({
        name:'',
        email:'',
        phone:'',
        country:'',
    });

    const [allNotes, setAllNotes] = useState([])

    function inputHandler(event) {
        const inputName = event.target.name
        const inputValue = event.target.value
       
        setContact(() => {
            return (
                {
                    ...contact,
                    [inputName]: inputValue
                }
            );
        })
    };

    function clickHandler() {
        setContact({
            name:'',
            email:'',
            phone:'',
            country:'',
        });

        setAllNotes(() => {
            return(
                [...allNotes, contact]
            );
        })

    }


    return(
        <div className='form-container'>
            <h4 className="mb-3">New Contact</h4>
            <form>
                <div className="mb-3">
                    <input type="text" placeholder='Full Name' className='form-control' name='name' onChange={inputHandler} value={contact.name}></input>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='Email' className='form-control' name='email' onChange={inputHandler} value={contact.email}></input>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Phone Number' className='form-control' name='phone' onChange={inputHandler} value={contact.phone}></input>  
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Country' className='form-control' name='country' onChange={inputHandler} value={contact.country}></input>
                </div>
                <button className="btn btn-primary form-control" type="button" onClick={clickHandler}>Add</button>
            </form>
        </div>
    );
}

export default Form;