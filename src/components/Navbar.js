import React from 'react'
import { Nav, Navbar as NavbarBs, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItems } = useCart()

    return (
        <NavbarBs expand="lg" className="navbar">
            <Container>
                <NavbarBs.Brand as={NavLink} to="/">
                    <i className="fa-solid fa-store me-2"></i>React-Store
                </NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="basic-NavbarBs-nav" />
                <NavbarBs.Collapse id="basic-NavbarBs-nav" className="ms-5">
                    <Nav className="me-auto w-100">
                        <Nav.Link as={NavLink} to="/">Store</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart">
                            <div className='cartIcon'>
                                <div className="cart">
                                    <i className="fa-solid fa-cart-shopping me-2"></i>
                                </div>
                                <div className="cartItemsIcon">{cartItems.length}</div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    )
}

export default Navbar