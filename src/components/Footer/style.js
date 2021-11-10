import styled from 'styled-components'

export const Container = styled.div`
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F4F1;

`
export const BoxSocial = styled.div`
    width: 15vw;
    display: flex;
    justify-content: space-around;
`
export const ImgSocial = styled.img`
    width: 3vw;
    cursor: pointer;
`
export const BoxNav = styled.ul`
    width: 35vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Btn = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    padding: 12px;
    font-size: 1.8vw;
    text-transform: uppercase;

    &:hover {
        width: none;
        padding: 10px;
        border: solid 2px;
    }
`
export const BoxInfo = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #446061;
`
    
export const Info = styled.p`
    color: #fff;
    cursor: pointer;
`