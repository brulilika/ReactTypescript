import React from 'react'
import { Container } from './styles'

interface ISlelectInputProps{
    options :{
        value: string | number;
        label: string | number;
    }[],
}

const SelectInput : React.FC<ISlelectInputProps> = ({options}) => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            <select>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }                
            </select>
        </Container>
    )
}

export default SelectInput