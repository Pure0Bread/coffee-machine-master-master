import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Modal from "react-bootstrap/Modal";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    
    return (
        <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CM <i className="fas fa-mug-hot"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <li
                className='nav-links'
                onClick={handleShow}
              >
                Profile
              </li>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  Profile Image <br></br>
                  Name: Adam
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    
                    <Link to='/' onClick={closeMobileMenu}>
                    Close
                    </Link>
                  </Button>
              
                </Modal.Footer>
              </Modal>
            </li>
  
            
            {/* <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/log-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--signup'>SIGN UP</Button>}
        </div>
      </nav>
    </>
    )
}



export default Navbar
