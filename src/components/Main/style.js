import styled from 'styled-components'


export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F2F4F1;
`
export const ContainerRecipes = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
export const BoxTitle = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
export const Title = styled.h2`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-size: 3vw;
`
export const BoxCards = styled.div`
    width: 85vw;
    display: flex;
    justify-content: space-around;
`
export const Card = styled.div`
    height: 90vh;
    background-color:#FFFFFF;
    box-shadow: 0px 7px 6px #00000029;
    cursor: pointer;
`
export const ImageFood = styled.img`
    width: 26vw;
    height: 50vh;
`
export const BoxTitleFood = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 25vh;
`
export const TitleFood = styled.p`
    font-size: 2.2vw;

    &:before {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        display: block;
        position: relative;
        bottom: 30px;
        left: 75px;
    }
`
export const ContainerAbout = styled.section`
    width: 100%;
    height: 150vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
export const BoxInfo = styled.div`
    height: 75%;
    display: flex;
    justify-content: center;
`
export const Figure = styled.figure`
    width: 50%;
`
export const ImgColher = styled.img`
    width: 100%;
    height: 100%;
`
export const BoxAbout = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const AboutTitle = styled.h2`
    font-size: 2.9vw;
    text-transform: uppercase;
    margin-bottom: 50px;
    &:after {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        display: block;
        position: relative;
        left: 3rem;
    }
`
export const ParagraphAbout = styled.p`
    width: 70%;
    font-size: 20px;
`
export const ContainerSubscribe = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DFE4DE;
`

export const SubTitle = styled.h2`
    font-size: 2vw;
    text-transform: uppercase;
    margin: 10px 0;
`
export const ParagraphNews = styled.p`
    font-size: 1.2vw;
`
export const InputEmail = styled.input`
    width: 40vw;
    height: 70px;
    border: 0;
    padding-left: 20px;
    margin: 25px 0;
`

export const BtnSub = styled.button`
    width: 12vw;
    height: 10vh;
    font-size: 1.3vw;
    text-transform: uppercase;
    background: transparent;
    border: solid 4px;
    cursor: pointer;
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
`