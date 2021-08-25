import {Container, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { RowWrapper } from '../styled/Common.style.jsx'
import { Poster } from './Poster'


export const Today = () => {
    const state = useSelector(state => state.aug_23)

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