import { RowWrapper } from '../styled/Common.style.jsx'
import {Container, Row} from 'react-bootstrap'
import { Poster } from './Poster'
import { connect } from 'react-redux'

const Today = ({todayMovies}) => {
    const Items = () => (todayMovies.map((posters) => (
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
        todayMovies: state.aug_23
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Today)