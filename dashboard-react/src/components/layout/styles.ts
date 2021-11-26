import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 60px auto;
    grid-template-areas: 
        'AS MH'
        'AS CT';
    height: 100vh;
    margin: 0;
    padding: 0;
`
