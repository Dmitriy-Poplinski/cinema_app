import { useState, useEffect } from 'react'
import { Row, Carousel } from 'react-bootstrap'

import { Slider } from './Slider';
import {
    MainPageTitleWrapper, 
    InnerContainerStyle,
} from './../styled/MainPage.style'

import { axiosAPI } from './../api';

export const MainPage = () => {
    const [showInfo, setShowInfo] = useState(true)
    const [premieres, setPremieres] = useState([])

    useEffect(() => {
        axiosAPI.fetchPremieres(setPremieres)
    }, [])

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (premieres.map((state) => (
        <Carousel.Item>
            <Slider
                showInfo={showInfo} 
                posterImage = {state.posterImage}
                altText = {state.altText}
                title = {state.title}
                text = {state.text}
                showInfoToggle = {showInfoToggle}
                key={state.id}
            />
        </Carousel.Item>
    )
        )
    )

    return (
        <InnerContainerStyle>
            {showInfo && <Row><MainPageTitleWrapper>Прем'єри</MainPageTitleWrapper></Row>}
            <Row>
                 <Carousel>
                    {Items()}
                </Carousel> 
            </Row>
        </InnerContainerStyle>
    )
}
