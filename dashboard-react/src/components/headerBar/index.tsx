import React, {useMemo} from 'react'
import { Container, Profile ,Welcome, UserName } from './styles'
import Emojis from '../../utils/emojis'

const HeaderBar : React.FC = () => {
    
    const emoji = useMemo(()=> {
        const indice = Math.floor(Math.random()*Emojis.length)
        return Emojis[indice]
    },[])

    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName> Bruna Tamake </UserName>
            </Profile>
        </Container>
    )
}

export default HeaderBar