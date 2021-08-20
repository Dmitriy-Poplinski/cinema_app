import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { ModalDate } from '../ModalDate/ModalDate';

const Logo = styled.div`
margin-left: 20px;
font-size: 30px;
text-align: center;
display: flex;
align-items: center;
@media (max-width: 320px) {
    font-size: 16px;
}
`

const HeaderMenuWrapper = styled.div`
display: flex;
font-size: 20px;
align-items: center;
margin-right: 50px;
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
            <Container>
                <Navbar.Brand href="#home">
                    <Logo>
                        <NavLink to='/'>Cinema App</NavLink>
                    </Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse>
                    <HeaderMenuWrapper>
                        <Nav className="me-auto">
                            <HeaderMenuItem>
                                <NavLink to='/today'>Фільми сьогодні</NavLink>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <NavLink to='/tommorow'>Фільми завтра</NavLink>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <NavLink to='/date' onClick={handleShow}>Вибрати дату</NavLink>
                            </HeaderMenuItem>
                            <HeaderMenuItem>
                                <NavLink to='/about'>Про нас</NavLink>
                            </HeaderMenuItem>
                        </Nav>
                        <ModalDate handleClose={handleClose} show={show}/>
                    </HeaderMenuWrapper>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}