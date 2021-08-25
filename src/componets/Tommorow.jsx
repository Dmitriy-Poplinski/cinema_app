import {Container, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { Poster } from './Poster'

import { RowWrapper } from '../styled/Common.style'



export const Tommorow = () => {
    const state = useSelector(state => state.aug_24)

    const Items = () => (state.map((posters) => (
        <Poster poster={posters} key={posters.id}/>
    )))

    return (
        <Container>
            <RowWrapper>
                <Row>
                    {Items()}
                </Row>
            </RowWrapper>
        </Container>
    )
}