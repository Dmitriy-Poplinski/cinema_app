import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

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
            <HeaderWrapper>
                <Logo>
                    <span><NavLink to='/'>Cinema App</NavLink></span>
                </Logo>
                <HeaderMenuWrapper>
                    <HeaderMenuItem>
                        Фільми сьогодні
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        Фільми завтра
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        Вибрати дату
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        <NavLink to='/about'>Про нас</NavLink>
                    </HeaderMenuItem>
                </HeaderMenuWrapper>
            </HeaderWrapper>        
    )
}