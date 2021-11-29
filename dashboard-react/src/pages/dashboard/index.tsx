import React, { useState, useMemo, useCallback } from 'react';
import ContentHeader from '../../components/contentHeader'
import WalletBox from '../../components/walletBox'
import MessageBox from '../../components/messageBox';
import {Container,Content } from './styles'

import expenses from '../../expenses/expenses';
import gains from '../../expenses/gains';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/happy.svg';
import opsImg from '../../assets/sad.svg';
import PieChartBox from '../../components/pieCharBox';

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

    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }      
        else if(totalGains === 0 && totalExpenses === 0){
            return {
                title: "Op's!",
                description: "Neste mês, não há registros de entradas ou saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: opsImg
            }
        }
        else if(totalBalance === 0){
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
                icon: grinningImg
            }
        }
        else{
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    },[totalBalance, totalGains, totalExpenses]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0, 
                color: '#BCCC9A'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0, 
                color: '#C37B89'
            },
        ];

        return data;
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
                
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpensesVersusGains} />

            </Content>

        </Container>
    )
}

export default Dashboard