import React from 'react'
import { Container } from './styles'

import HeaderBar from '../headerBar'
import MainContent from '../mainContent'
import NavigationBar from '../navigationBar'

const Layout : React.FC = () => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            <NavigationBar/>
            <HeaderBar/>
            <MainContent/>
            {/* <h1>Layout</h1> */}
        </Container>
    )
}

export default Layout