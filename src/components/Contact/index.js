import React from 'react'

import * as S from './styled'
import Icons from './icons'
import links from './content'

const Contact = () => (
  <S.ContactWrapper>
    <S.PageTitle>Get in touch</S.PageTitle>
    <S.ContactText>If you wanna get in touch there are 2 main options:</S.ContactText>
    <S.ContactText>• Send an e-mail to <S.ContactLink href="mailto:hi@muttoni.dev">hi@muttoni.dev</S.ContactLink>;</S.ContactText>
    <S.ContactText>• Contact me through my social medias:</S.ContactText>
    {links.map((link) => {
      const Icon = Icons[link.label]
      return <S.ContactIcon><Icon /></S.ContactIcon>
    })}
  </S.ContactWrapper>
)

export default Contact