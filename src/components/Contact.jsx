import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faTrash,
    faPhone,
    faEarthAmericas,
    faUser
} from '@fortawesome/free-solid-svg-icons';


function Contact(props) {

    return(
                <div className='card-wrapper'>
                        <div className='picture-column'>
                            <img src='https://www.citypng.com/public/uploads/preview/address-contact-book-black-icon-11640520529mhwu7ngb7h.png' className='img-fluid rounded-start' alt='contact'/>
                        </div>
                            <div className='info-column'>
                                <h5 className="card-title"><FontAwesomeIcon icon={faUser} /> {props.renderName}</h5>
                                <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> {props.renderEmail}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faPhone} /> {props.renderPhone}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faEarthAmericas} /> {props.renderCountry}</p>
                                <button onClick={() => props.deleteHandler(props.id)}><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                </div>
    );
};

export default Contact;
