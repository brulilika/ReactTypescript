import React from 'react'
import { Container, Controller, TitleContainer } from './styles'
interface IContentHeaderProps{
    title: string
    lineColor: string
    children: React.ReactNode
}

const ContentHeader : React.FC<IContentHeaderProps> = (
    {
        title, lineColor, children
    }) => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>

            <Controller>
                {children}
            </Controller>
        </Container>
    )
}

export default ContentHeader