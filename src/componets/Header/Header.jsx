import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { ModalDate } from '../ModalDate/ModalDate';

const HeaderWrapper = styled.header`
position: fixed;
width: 100%;
height: 100px;
background-color: #2d3540;
display: flex;
justify-content: space-between;
color: #fff;
`

const Logo = styled.div`
margin-left: 20px;
font-size: 30px;
text-align: center;
display: flex;
align-items: center;
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


export function Header () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Logo>
                        <NavLink to='/'>Cinema App</NavLink>
                    </Logo>
                </Navbar.Brand>
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
            </Container>
        </Navbar>    
    )
}