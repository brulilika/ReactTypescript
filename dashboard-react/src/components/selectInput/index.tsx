import React from 'react'
import { uuid } from 'uuidv4'
import { Container } from './styles'

interface ISlelectInputProps{
    options :{
        value: string | number;
        label: string | number;
    }[],
    defaultValue? : string | number,
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined,
}

const SelectInput : React.FC<ISlelectInputProps> = ({options, onChange, defaultValue}) => {
    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map(option => (
                        <option value={uuid()}>{option.label}</option>
                    ))
                }                
            </select>
        </Container>
    )
}

export default SelectInput