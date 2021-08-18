import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';


export function Header () {
    return (
            <header className={classes.header}>
                <div className={classes.logo}>
                    <span><NavLink to='/'>Cinema App</NavLink></span>
                </div>
                <div className={classes.headerMenu}>
                    <div className={classes.headerMenuItem}>
                        Фільми сьогодні
                    </div>
                    <div className={classes.headerMenuItem}>
                        Фільми завтра
                    </div>
                    <div className={classes.headerMenuItem}>
                        Вибрати дату
                    </div>
                    <div className={classes.headerMenuItem}>
                        <NavLink to='/about'>Про нас</NavLink>
                    </div>
                </div>
            </header>        
    )
}