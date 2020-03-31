import React from 'react'

import * as S from './styled'
import Icons from './icons'
import links from './content'

const Contact = () => (
  <S.ContactWrapper>
    <S.ContactTitle>Contact info <span role="img" aria-label="Hand Pointing Down">👇</span></S.ContactTitle>
    <S.ContactText>If you wanna talk to me about a project, maybe working together or just say hi you can either...</S.ContactText>
      <S.ContactText><span role="img" aria-label="Check Mark">✅</span> Send an e-mail to <S.ContactLink href={'mailto:hi@rafaelmuttoni.com'} target="_blank">hi@rafaelmuttoni.com</S.ContactLink></S.ContactText> 
      <S.SocialWrapper><S.ContactText><span role="img" aria-label="Check Mark">✅</span> Hit me up at my social medias</S.ContactText><S.IconWrapper>
      {links.map(link => {
        const Icon = Icons[link.label]
        return <S.ContactLink href={link.url}><S.ContactIcon><Icon/></S.ContactIcon></S.ContactLink>
      })}
      </S.IconWrapper></S.SocialWrapper>
  </S.ContactWrapper>
)

export default Contact