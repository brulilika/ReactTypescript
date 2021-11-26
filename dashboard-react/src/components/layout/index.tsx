import React from 'react'
import { Container } from './styles'

import HeaderBar from '../headerBar'
import MainContent from '../mainContent'
import NavigationBar from '../navigationBar'

const Layout : React.FC = ({children}) => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            <NavigationBar/>
            <HeaderBar/>
            <MainContent>
                {children}
            </MainContent>
        </Container>
    )
}

export default Layout