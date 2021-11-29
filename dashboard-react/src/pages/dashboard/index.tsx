import React, { useState, useMemo, useCallback } from 'react';
import ContentHeader from '../../components/contentHeader'
import WalletBox from '../../components/walletBox'
import {Container,Content } from './styles'

import expenses from '../../expenses/expenses';
import gains from '../../expenses/gains';

const Dashboard : React.FC = () => {

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach((item: { amount: string; }) => {total += Number(item.amount) });
        return total;
    },[]);


    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach((item: { amount: string; }) => { total += Number(item.amount) });
        return total;
    },[]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    },[totalGains, totalExpenses]);

    //O retorno aqui deve ser em "pacote" unico
    return (
        <Container>       
            <ContentHeader title='Dashboard' lineColor='#ff87c9e1'>
            </ContentHeader>
            <Content>
                <WalletBox 
                        title="Saldo"
                        color="#F0C7DE"
                        amount={totalBalance}
                        footerlabel="atualizado com base nas entradas e saídas"
                        icon="dolar"
                    />

                    <WalletBox 
                        title="Entradas"
                        color="#ED7EBB"
                        amount={totalGains}
                        footerlabel="atualizado com base nas entradas e saídas"
                        icon="arrowUp"
                    />

                    <WalletBox 
                        title="Saídas"
                        color="#BA6393"
                        amount={totalExpenses}
                        footerlabel="atualizado com base nas entradas e saídas"
                        icon="arrowDown"
                    />
            </Content>

        </Container>
    )
}

export default Dashboard