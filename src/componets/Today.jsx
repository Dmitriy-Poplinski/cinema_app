import { RowWrapper } from '../styled/Common.style.jsx'
import {Container, Row} from 'react-bootstrap'
import { Poster } from './Poster'
import { useSelector, connect } from 'react-redux'

const Today = () => {
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

export default connect(null, null)(Today)