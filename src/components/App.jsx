import React, {useState}  from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Contact from './Contact';  


function App() {

    const [contact, setContact] = useState({
      name:'',
      email:'',
      phone:'',
      country:'',
  });

  const [allContacts, setAllContacts] = useState([])

  function inputHandler(event) {
    const {name, value} = event.target
   
    setContact(() => {
        return (
            {
                ...contact,
                [name]: value
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

  setAllContacts(() => [...allContacts, contact])
}

function deleteHandler(id) {
  setAllContacts( () => allContacts.filter((contact, index) => id !== index) );
}


  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-3'>
          <Form 
          clickHandler={clickHandler} 
          inputHandler={inputHandler}
          contactName={contact.name}
          contactEmail={contact.email}
          contactPhone={contact.phone}
          contactCountry={contact.country}  
          />
        </div>
        <div className='col-9 contacts-container'>
          <div className='row'>
            {allContacts.map((contact, index) => {
              return(
                <Contact 
                  key={index}
                  id={index}
                  renderName={contact.name}
                  renderEmail={contact.email}
                  renderPhone={contact.phone}
                  renderCountry={contact.country}
                  deleteHandler={deleteHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
