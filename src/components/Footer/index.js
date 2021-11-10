import React from 'react'
import * as S from './style'

import { graphql, useStaticQuery } from 'gatsby'

export function Footer() {

  const data = useStaticQuery(graphql`
        query {
            alldata {
                footers {
                    instagram {
                      url
                    }
                    facebook {
                      url
                    }
                    twitter {
                      url
                    }
                    pinterest {
                      url
                    }
                    about
                    recipes
                    subscribe
                    info
                  }
            }
        }
    `)

  const {instagram, twitter, pinterest, facebook, recipes, subscribe, info, about } = data.alldata.footers[0]

  return (
    <div>
      <S.Container>
        <S.BoxSocial>
          <S.ImgSocial src={instagram.url} alt="" />
          <S.ImgSocial src={twitter.url} alt="" />
          <S.ImgSocial src={facebook.url} alt="" />
          <S.ImgSocial src={pinterest.url} alt="" />
        </S.BoxSocial>
        <S.BoxNav>
          <S.Btn>{about}</S.Btn>
          <S.Btn>{recipes}</S.Btn>
          <S.Btn>{subscribe}</S.Btn>
        </S.BoxNav>
      </S.Container>
      <S.BoxInfo>
        <S.Info>{info}</S.Info>
      </S.BoxInfo>
    </div>
  )
}
