import React from 'react'
import ContentHeader from '../../components/contentHeader'
import FinanceCard from '../../components/financeCard'
import SelectInput from '../../components/selectInput'
import { Container, Content, Filters } from './style'

const List : React.FC = () => {
    const monthsOptions =
    [
        {value:7, label:'Julho' },
        {value:8, label:'Agosto' },
        {value:9, label:'Setembro' },
        {value:10, label:'Outubro' },
        {value:11, label:'Novembro' },
        {value:12, label:'Dezembro' }
    ]

    const yearsOptions =
    [
        {value:2022, label:'2022' },
        {value:2021, label:'2021' },
        {value:2020, label:'2020' }
    ]
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>       
            <ContentHeader title='Listagem' lineColor='#ff87c9e1'>
                <SelectInput options={monthsOptions}/>
                <SelectInput options={yearsOptions}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter">
                    Recorrentes
                </button>
                <button type="button" className="tag-filter">
                    Fixos
                </button>
            </Filters>

            <Content>
                <FinanceCard cardColor="#EED7CE" tagColor="#BCCC9A" title="Conta de luz" subtitle="26/11/2021" amount="R$ 65,00"/>
                
            </Content>
        </Container>
    )
}

export default List