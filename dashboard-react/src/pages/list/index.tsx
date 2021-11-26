import React, {useMemo, useState, useEffect} from 'react'
import ContentHeader from '../../components/contentHeader'
import FinanceCard from '../../components/financeCard'
import SelectInput from '../../components/selectInput'
import { Container, Content, Filters } from './style'
import {useParams} from 'react-router-dom'

import gain from '../../expenses/gains'
import expenses from '../../expenses/expenses'
import { MenuItemLink } from '../../components/navigationBar/styles'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'

interface IData{
    id: string,
    description: string,
    amountFormatted: string,
    frequency: string,
    dateFormatted: string,
    tagColor: string
}

const List : React.FC = () => {
    //desestruturacao de retorno
    const { type } = useParams()
    const title = useMemo( () =>{
        return type==='entry-balance' ? 'Entrada' : 'Saída';
    }, [type])
    const lineColor = useMemo( () =>{
        return type==='entry-balance' ? '#BCCC9A' : '#C37B89';
    }, [type])

    const listData = useMemo( () =>{
        return type==='entry-balance' ? gain : expenses;
    }, [type])

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

    const [data, setData] = useState<IData[]>([])
    
    useEffect( () => {
        const response = listData.map(item=>{
                return {
                    id: (Math.random() * data.length).toString(),
                    description: item.description,
                    amountFormatted: formatCurrency(Number(item.amount)) ,
                    frequency: item.frequency,
                    dateFormatted: formatDate(item.date),
                    tagColor: '#EED7CE',
                }
        })
        setData(response)
    },[])

    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>       
            <ContentHeader title={title} lineColor={lineColor}>
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
                {
                    data.map(item=> (
                        <FinanceCard key={item.id} cardColor="#EED7CE" tagColor={item.tagColor} title={item.description} subtitle={item.dateFormatted} amount={item.amountFormatted}/>
                    ))
                }
                
            </Content>
        </Container>
    )
}

export default List