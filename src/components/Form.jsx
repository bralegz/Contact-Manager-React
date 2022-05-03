import React from 'react';

function Form() {
    return(
        <div className='form-container'>
            <h4 className="mb-3">New Contact</h4>
            <form>
                <div className="mb-3">
                    <input type="text" placeholder='Full Name' className='form-control'></input>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='Email' className='form-control'></input>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Phone Number' className='form-control'></input>  
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Country' className='form-control'></input>
                </div>
                <button className="btn btn-primary form-control" type="button">Add</button>
            </form>
        </div>
    );
}

export default Form;