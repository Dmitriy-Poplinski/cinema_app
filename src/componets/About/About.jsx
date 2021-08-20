import styled from 'styled-components'

const AboutWrapper = styled.div`
margin-top: 100px;
height: 100vh;
padding-left: 30px;
width: 90%;
`

const AboutTitle = styled.p`
font-size: 28px;
font-weight: bold;
`

export function About () {
    return (
        <AboutWrapper>
            <AboutTitle>Про нас</AboutTitle>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quae tenetur adipisci eveniet mollitia necessitatibus consequuntur 
                maxime saepe fugit, alias maiores quasi accusantium! Numquam 
                rem repellat obcaecati vitae exercitationem eum cupiditate 
                accusantium quidem, a blanditiis perspiciatis cumque non fugiat 
                inventore reiciendis pariatur cum ab laudantium harum reprehenderit 
                unde ipsum iusto explicabo?</p>
        </AboutWrapper>
    )
}