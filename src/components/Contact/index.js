import React from 'react'

import * as S from './styled'
import Icons from './icons'
import links from './content'

const Contact = () => (
  <S.ContactWrapper>
    <S.PageTitle>Get in touch <span role="img" aria-label="Envelope">📩</span></S.PageTitle>
    {links.map((link) => {
      const Icon = Icons[link.label]
    return <S.ContactLink href={link.url} target="_blank"><S.ContactIcon><Icon /></S.ContactIcon><S.ContactText className="options">{link.label}</S.ContactText></S.ContactLink>
    })}
  </S.ContactWrapper>
)

export default Contact