import React from 'react'
import * as S from './style'

import { graphql, useStaticQuery } from 'gatsby'

export function Header() {

    const data = useStaticQuery(graphql`
        query {
            alldata {
                headers {
                    about
                    background {
                      url
                    }
                    logo {
                      url
                    }
                    recipes
                    subscribe
                    title
                  }
            }
        }

    `)

    const { about, background, logo, recipes, subscribe, title} = data.alldata.headers[0]

    return (
        <S.ContainerHeader back={background.url}>
            <S.SectionStart>
                <div>
                    <S.Logo src={logo.url} alt="" />
                </div>
                <S.BoxBtn>
                    <S.Btn>{about}</S.Btn>
                    <S.Btn>{recipes}</S.Btn>
                    <S.Btn>{subscribe}</S.Btn>
                </S.BoxBtn>
            </S.SectionStart>
            <S.BoxTitle>
                <S.Title>{title}</S.Title>
            </S.BoxTitle>
        </S.ContainerHeader>
    )
}