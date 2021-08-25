import { RowWrapper } from '../styled/Common.style.jsx'
import {Container, Row} from 'react-bootstrap'
import { Poster } from './Poster'
import { connect } from 'react-redux'

const Tommorow = ({tommorowMovies}) => {
    const Items = () => (tommorowMovies.map((posters) => (
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

const mapStateToProps = state => {
    return {
        tommorowMovies: state.aug_24
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Tommorow)