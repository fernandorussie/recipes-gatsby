import styled from 'styled-components'

export const ContainerHeader = styled.div`
    background-image: url(${props => props.back});
    background-position: center;
    background-size: cover;
    height: 125vh;
`

export const SectionStart = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
`
export const Logo = styled.img`
    width: 70%;
`
export const BoxBtn = styled.ul`
    width: 35vw;
    height: 7vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
`

export const Btn = styled.li`
    width: 33%;
    text-align: center;
    cursor: pointer;
    font-size: 1.8vw;
    
    &:hover {
        width: none;
        padding: 10px;
        border: solid 2px;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 47vh;
`

export const Title = styled.h1`
    font-size: 8rem;
    color: #373737;
    text-transform: uppercase;
    font-weight: 500;
`