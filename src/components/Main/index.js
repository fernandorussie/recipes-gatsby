import React from 'react'
import * as S from './style'

import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

    const data = useStaticQuery(graphql`
        query {
            alldata {
                mains {
                    about
                    btnsubmit
                    imgcake {
                      url
                    }
                    imgcolher {
                      url
                    }
                    imgpizza {
                      url
                    }
                    imgsmoothiee {
                      url
                    }
                    latesttitle
                    newslater
                    paragraph
                    subscribe
                    titlecake
                    titlepizza
                    titlesmoothie
                }
            }
        }
    `)

    const {about, btnsubmit, imgcake, imgcolher, imgpizza, imgsmoothiee, latesttitle, newslater, paragraph, subscribe, titlecake, titlepizza, titlesmoothie} = data.alldata.mains[0]

    return (
        <S.ContainerMain>
            <S.ContainerRecipes>
                <S.BoxTitle>
                    <S.Title>{latesttitle}</S.Title>
                </S.BoxTitle>
                <S.BoxCards>
                    <S.Card>
                        <div>
                            <S.ImageFood src={imgcake.url} alt="" />
                        </div>
                        <S.BoxTitleFood>
                            <S.TitleFood>{titlecake}</S.TitleFood>
                        </S.BoxTitleFood>
                    </S.Card>
                    <S.Card>
                        <div>
                            <S.ImageFood src={imgpizza.url} alt="" />
                        </div>
                        <S.BoxTitleFood>
                            <S.TitleFood>{titlepizza}</S.TitleFood>
                        </S.BoxTitleFood>
                    </S.Card>
                    <S.Card>
                        <div>
                            <S.ImageFood src={imgsmoothiee.url} alt="" />
                        </div>
                        <S.BoxTitleFood>
                            <S.TitleFood>{titlesmoothie}</S.TitleFood>
                        </S.BoxTitleFood>
                    </S.Card>
                </S.BoxCards>
            </S.ContainerRecipes>
            <S.ContainerAbout>
                <S.BoxInfo>
                    <S.Figure>
                        <S.ImgColher src={imgcolher.url} alt="" />
                    </S.Figure>
                    <S.BoxAbout>
                        <S.AboutTitle>{about}</S.AboutTitle>
                        <S.ParagraphAbout>{paragraph}</S.ParagraphAbout>
                    </S.BoxAbout>
                </S.BoxInfo>
            </S.ContainerAbout>
            <S.ContainerSubscribe>
                <S.SubTitle>{subscribe}</S.SubTitle>
                <S.ParagraphNews>{newslater}</S.ParagraphNews>
                <S.InputEmail type="email" placeholder="Your Email" />
                <S.BtnSub>{btnsubmit}</S.BtnSub>
            </S.ContainerSubscribe>
        </S.ContainerMain>
    )
}

