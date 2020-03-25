import React from 'react'

import * as S from './styled'
import Icons from './Icons'
import links from './content'

import { Bulb } from '@styled-icons/boxicons-regular/Bulb'

const Navbar = () => (
  <S.NavbarWrapper>
    <S.IconsUl>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.IconsLi key={i}>
            <S.IconsLink to={link.url}>
              <S.IconDiv>
                <Icon />
              </S.IconDiv>
              <S.IconText>{link.label}</S.IconText>
            </S.IconsLink>
          </S.IconsLi>
        )
      })}
      <S.IconsLi>
        <S.IconsLink>
          <S.IconDiv>
            <Bulb />
          </S.IconDiv>
          <S.IconText>Dark</S.IconText>
        </S.IconsLink>
      </S.IconsLi>
    </S.IconsUl>
  </S.NavbarWrapper>
)

export default Navbar