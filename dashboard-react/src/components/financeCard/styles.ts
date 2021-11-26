import styled from 'styled-components'

interface IContainerProps{
    color: string
}

interface ITagProgs{
    color: string,
}

export const Container = styled.li<IContainerProps> `
    background-color: ${props => props.color};
    list-style: none;
    border-radius: 5px;
    padding: 12px 10px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #4e4d4a;
        padding-left: 10px;
    }
    >h4{
        color: #4e4d4a;
    }
`;

export const Tag = styled.div <ITagProgs>`
    position: absolute;
    left:0;
    width: 3px;
    height: 30px;

    background-color: ${props =>props.color}
`;