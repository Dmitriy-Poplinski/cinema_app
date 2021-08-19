import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

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
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Logo>
                        <NavLink to='/'>Cinema App</NavLink>
                    </Logo>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

            // <HeaderWrapper>
                // <Navbar bg="dark" variant="dark">
                //     <Container>
                //     {/* <Logo> */}
                //     <Navbar.Brand href="#home">
                //         Cinema App
                //         {/* <span><NavLink to='/'>Cinema App</NavLink></span> */}
                //     </Navbar.Brand>
                //     {/* </Logo> */}
                //     {/* <HeaderMenuWrapper> */}
                //     <Nav className="me-auto">
                //         {/* <HeaderMenuItem> */}
                //         <Nav.Link href="#home">
                //             Фільми сьогодні
                //         </Nav.Link>
                //         {/* </HeaderMenuItem> */}
                //         {/* <HeaderMenuItem> */}
                //         <Nav.Link href="#home">
                //         Фільми завтра
                //         </Nav.Link>
                            
                //         {/* </HeaderMenuItem> */}
                //         {/* <HeaderMenuItem> */}
                //             <Nav.Link href="#home">
                //                 Вибрати дату
                //             </Nav.Link>
                //         {/* </HeaderMenuItem> */}
                //         {/* <HeaderMenuItem> */}
                //             <NavLink to='/about'>Про нас</NavLink>
                //         {/* </HeaderMenuItem> */}
                //         </Nav>
                //     {/* </HeaderMenuWrapper> */}
                //     </Container>
                // </Navbar>
            // </HeaderWrapper>        
    )
}