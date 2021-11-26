import React from 'react'
import { Container } from './styles'


const MainContent : React.FC = ({children}) => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MainContent