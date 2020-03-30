import React from 'react'

import * as S from './styled'
import Icons from './icons'
import { Envelope } from '@styled-icons/fa-solid/Envelope'
import links from './content'

const Contact = () => (
  <S.ContactWrapper>
    <S.PageTitle>contact info <span role="img" aria-label="Hand Pointing Down">👇</span></S.PageTitle>
    <S.InfoWrapper>
      <S.PageText>If you wanna get in touch you can either send me an e-mail <span role="img" aria-label="E-mail">📧</span></S.PageText>
      <S.ContactLink href={'mailto:hi@muttoni.dev'} target="_blank"><S.ContactIcon><Envelope /></S.ContactIcon><S.ContactLabel>hi@muttoni.dev</S.ContactLabel></S.ContactLink>
      <S.PageText>Or hit me up at my social medias <span role="img" aria-label="Mobile Phone">📱</span></S.PageText>
      {links.map((link) => {
        const Icon = Icons[link.label]
      return <S.ContactLink href={link.url} target="_blank"><S.ContactIcon><Icon /></S.ContactIcon><S.ContactLabel>{link.text}</S.ContactLabel></S.ContactLink>
      })}
    </S.InfoWrapper>
  </S.ContactWrapper>
)

export default Contact