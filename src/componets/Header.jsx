import classes from './Header.module.css'

export function Header () {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>Cinema App</span>
            </div>
            <div className={classes.headerMenu}>
                <div>
                    Фільми сьогодні
                </div>
                <div>
                    Фільми завтра
                </div>
                <div>
                    Вибрати дату
                </div>
                <div>
                    Про нас
                </div>
            </div>
        </header>
    )
}