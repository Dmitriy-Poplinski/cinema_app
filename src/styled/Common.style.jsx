import styled from "styled-components";

export const RowWrapper = styled.div`
margin-top: 100px;
@media (max-width: 1200px) {
    margin: 100px auto;
    width: 400px;
    img {
        width: 360px;
    }
}
`

export const AppWrapper = styled.div`
position: relative;
height: 100%;
@media (max-width: 426px) {
  width: 400px;
}
`