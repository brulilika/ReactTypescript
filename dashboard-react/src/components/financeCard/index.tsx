import React from 'react'
import { Container, Tag } from './styles'

interface IFinanceCardProps{
    key? : string,
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string
}

const FinanceCard : React.FC<IFinanceCardProps> = (
    {
        key,
        tagColor,
        title,
        subtitle,
        amount 
    }) => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container color="#EED7CE">
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h4>{amount}</h4>
        </Container>
    )
}

export default FinanceCard