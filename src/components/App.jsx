import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Contact from './Contact';  


function App() {
  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-3'>
          <Form />
        </div>
        <div className='col-9 contacts-container'>
          <div className='row'>
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
