import classes from './Header.module.css'

export function Header () {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>Cinema App</span>
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
                    Про нас
                </div>
            </div>
        </header>
    )
}