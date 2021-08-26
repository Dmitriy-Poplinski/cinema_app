import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

import { ModalDate } from './ModalDate'
import { HeaderLogo, HeaderMenuWrapper, HeaderMenuItem } from '../styled/Header.style'

export const Header = ({redirectToMain, redirectToDate}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        window.history.pushState({}, '', '/')
        redirectToMain()
    }

    const handleShow = () => {
        setShow(true)
        window.history.pushState({}, '', '/date')
        redirectToDate()
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
                <Navbar.Brand href="#home" >
                    <HeaderLogo>
                        <NavLink to="/">Cinema App</NavLink>
                    </HeaderLogo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="mr-2">
                    <HeaderMenuWrapper>
                        <Nav className="mr-2">
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to="/today">Фільми сьогодні</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to="/tommorow">Фільми завтра</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to="/date" onClick={handleShow}>Вибрати дату</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to="/about">Про нас</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                        </Nav>
                        <ModalDate handleClose={handleClose} show={show}/>
                    </HeaderMenuWrapper>
                </Navbar.Collapse>
        </Navbar>
    )
}
