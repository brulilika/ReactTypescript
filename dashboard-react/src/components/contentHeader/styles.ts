import styled from 'styled-components'

interface ITitleContainerPropos{
    lineColor:string
}

export const Container= styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerPropos> `
    >h1{
        color: #FF87CA;
        &:after{
            content: '';
            display:block;
            width: 60px;
            border-bottom: 5px solid ${props => props.lineColor};
        }
    }
`;

export const Controller = styled.div `
    display: flex;
    justify-content: space-between;
`;