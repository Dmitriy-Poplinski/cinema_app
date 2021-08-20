import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { ModalDate } from '../ModalDate/ModalDate';

const Logo = styled.div`
margin-left: 20px;
font-size: 30px;
text-align: center;
@media (max-width: 320px) {
    font-size: 16px;
}
`

const HeaderMenuWrapper = styled.div`
display: flex;
font-size: 20px;
margin-left: auto;
align-items: center;
`

const HeaderMenuItem = styled.div`
padding: 20px;
cursor: pointer;
`


export function Header (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        window.history.pushState({}, '', '/')
        props.redirectToMain()
    };
    const handleShow = () => {
        setShow(true)
        window.history.pushState({}, '', '/date')
        props.redirectToDate()
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed='top' collapseOnSelect>
                <Navbar.Brand href="#home" >
                    <Logo>
                        <NavLink to='/'>Cinema App</NavLink>
                    </Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse className='mr-2'>
                    <HeaderMenuWrapper>
                        <Nav className='mr-2'>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to='/today'>Фільми сьогодні</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to='/tommorow'>Фільми завтра</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to='/date' onClick={handleShow}>Вибрати дату</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <Nav.Link>
                                    <Link to='/about'>Про нас</Link>
                                </Nav.Link>
                            </HeaderMenuItem>
                        </Nav>
                        <ModalDate handleClose={handleClose} show={show}/>
                    </HeaderMenuWrapper>
                </Navbar.Collapse>
        </Navbar>
    )
}