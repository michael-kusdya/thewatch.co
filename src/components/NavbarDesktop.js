import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MediaQuery from 'react-responsive'

function NavbarComponent (){
    return(
        <div>
            <MediaQuery query="(min-device-width: 1024px)">
                <Navbar expand="lg" className='navs'>
                    <Nav className="mr-auto top_nav">
                        <Nav.Link href="">FREE SHIPPING</Nav.Link>
                        <Nav.Link href="">LIFETIME BATTERY</Nav.Link>
                        <Nav.Link href="">0% INSTALLMENT</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end" >
                    <Nav.Link href="">ONLINE EXCLUSIVE - ALL STRAPS 30% OFF</Nav.Link>
                    </Nav>
                </Navbar>
            </MediaQuery>
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                    <img
                      src="https://thewatch.imgix.net/logos/logo-thewatchco-desktop.png?auto=compress"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Nav className="justify-content-center">
                        <Nav.Link href="">JAM TANGAN</Nav.Link>
                        <Nav.Link href="">STRAP</Nav.Link>
                        <Nav.Link href="">AKSESORIS</Nav.Link>
                        <Nav.Link href="">PERHIASAN</Nav.Link>
                        <Nav.Link href="">BRAND</Nav.Link>
                        <Nav.Link href="">JURNAL</Nav.Link>
                        <Nav.Link href="">DISKON</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            
        </div>
    )
}

export default NavbarComponent