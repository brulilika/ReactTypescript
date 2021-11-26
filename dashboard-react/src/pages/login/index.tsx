import React from 'react'
import ContentHeader from '../../components/contentHeader'
import { Container } from './style'

const Login : React.FC = () => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>       
            <ContentHeader title='Login' lineColor='#ff87c9e1'>
                <h2>Conteudop de Lista</h2>
            </ContentHeader>
        </Container>
    )
}

export default Login