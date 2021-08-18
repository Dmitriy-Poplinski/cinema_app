import classes from './Footer.module.css'

export function Footer () {
    return (
        <div className={classes.footer}>
            <span className={classes.copy}>&copy;Cinema</span>
        </div>
    )
}