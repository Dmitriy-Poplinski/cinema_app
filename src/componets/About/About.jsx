import { Fragment } from 'react'
import classes from './About.module.css'

export function About () {
    return (
        <div className={classes.aboutMain}>
            <p className={classes.aboutMainTitle}>Про нас</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quae tenetur adipisci eveniet mollitia necessitatibus consequuntur 
                maxime saepe fugit, alias maiores quasi accusantium! Numquam 
                rem repellat obcaecati vitae exercitationem eum cupiditate 
                accusantium quidem, a blanditiis perspiciatis cumque non fugiat 
                inventore reiciendis pariatur cum ab laudantium harum reprehenderit 
                unde ipsum iusto explicabo?</p>
        </div>
    )
}