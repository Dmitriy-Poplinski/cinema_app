import { useState } from 'react'
import {Button , Col} from 'react-bootstrap'
import { PosterImg, PosterStyledButton, PosterStyledColumn, PosterTimeWrapper } from '../styled/Poster.style'

export const Poster = (props) => {
    const [showInfo, setShowInfo] = useState(true)

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    return (
        <Col>
        {showInfo ? 
            <PosterStyledColumn>
                <PosterImg src={props.poster.posterImage} alt="Постера ещё нет"/>
                <PosterTimeWrapper>
                    <span>{props.poster.date}</span><span>{props.poster.time}</span>
                </PosterTimeWrapper>
                <PosterStyledButton>
                    <Button variant="info" onClick={showInfoToggle}>Детальніше</Button>
                </PosterStyledButton>
            </PosterStyledColumn>
        :   
            <PosterStyledColumn>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Animi, cum. Ea, facilis obcaecati. Deleniti rerum optio 
                        aliquam corrupti similique modi vero facere, commodi 
                        molestias ullam eligendi, veritatis ducimus veniam facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Animi, cum. Ea, facilis obcaecati. Deleniti rerum optio 
                        aliquam corrupti similique modi vero facere, commodi 
                        molestias ullam eligendi, veritatis ducimus veniam facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Animi, cum. Ea, facilis obcaecati. Deleniti rerum optio 
                        aliquam corrupti similique modi vero facere, commodi 
                        molestias ullam eligendi, veritatis ducimus veniam facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Animi, cum. Ea, facilis obcaecati. Deleniti rerum optio 
                        aliquam corrupti similique modi vero facere, commodi 
                        molestias ullam eligendi, veritatis ducimus veniam facilis!
                    </p>
                </div>
                <PosterStyledButton>
                    <Button variant="info" onClick={showInfoToggle}>Назад</Button>
                </PosterStyledButton>
            </PosterStyledColumn>
        }
        </Col>
    )
    
}
