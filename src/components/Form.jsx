import React from 'react';

function Form(props) {


    return(
        <div className='form-container'>
            <h4 className="mb-3">New Contact</h4>
            <form>
                <div className="mb-3">
                    <input type='text' placeholder='Full Name' className='form-control' name='name' onChange={props.inputHandler} value={props.contactName}></input>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='Email' className='form-control' name='email' onChange={props.inputHandler} value={props.contactEmail}></input>
                </div>
                <div className="mb-3">
                    <input type='text' inputMode='numeric' placeholder='Phone Number' className='form-control' name='phone' onChange={props.inputHandler} value={props.contactPhone}></input>  
                </div>
                <div className="mb-3">
                    <input type='text' placeholder='Country' className='form-control' name='country' onChange={props.inputHandler} value={props.contactCountry}></input>
                </div>
                <button className="btn btn-primary form-control" type="button" onClick={props.clickHandler}>Add</button>
            </form>
        </div>
    );
}

export default Form;