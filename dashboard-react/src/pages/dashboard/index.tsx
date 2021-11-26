import React from 'react'
import {Container} from './styles'
import ContentHeader from '../../components/contentHeader'
import SelectInput from '../../components/selectInput'
const Dashboard : React.FC = () => {
    const pessoas = [
        {value:'Bruna', label: 'Bruna'},
        {value:'Lika', label: 'Lika'},
        {value:'Tamake', label: 'Tamake'},
    ]
    const alimentos = [
        {value:'Banana', label: 'Banana'},
        {value:'Caju', label: 'Caju'},
        {value:'Carne', label: 'Carne'},
    ]
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>       
            <ContentHeader title='Dashboard' lineColor='#ff87c9e1'>
                <SelectInput options={pessoas}/>
                <SelectInput options={alimentos}/>
            </ContentHeader>
            <h2>Conteudop de Dash</h2>
        </Container>
    )
}

export default Dashboard