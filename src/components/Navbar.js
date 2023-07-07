import React from 'react'
import { Nav, Navbar as NavbarBs, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';

const Navbar = () => {
    return (
        <NavbarBs expand="lg" className="navbar">
            <Container>
                <NavbarBs.Brand sas={NavLink} to="/">
                    <i className="fa-solid fa-store me-2"></i>React-Ecommerce
                </NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="basic-NavbarBs-nav" />
                <NavbarBs.Collapse id="basic-NavbarBs-nav" className="ms-5">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart">
                            <div className='cartIcon'>
                                <i className="fa-solid fa-cart-shopping me-2"></i>
                            </div>
                        </Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    )
}

export default Navbar