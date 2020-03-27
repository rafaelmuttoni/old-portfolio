import React, { useState, useEffect } from 'react'

import * as S from './styled'
import Icons from './Icons'
import links from './content'

import { Moon as Dark } from '@styled-icons/boxicons-solid/Moon'
import { Sun as Light } from '@styled-icons/boxicons-solid/Sun'

const Navbar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.NavbarWrapper>
      <S.IconsUl>
        {links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <S.IconsLi key={i}>
              <S.IconsLink activeClassName="active" to={link.url} duration={0.8} cover bg={isDarkMode ? '#21222C' : '#F0F0F3'}>
                <S.IconDiv>
                  <Icon />
                </S.IconDiv>
                <S.IconText>{link.label}</S.IconText>
              </S.IconsLink>
            </S.IconsLi>
          )
        })}
        <S.IconsLi>
          <S.ThemeDiv onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}>
            <S.ThemeSpan>
              {isDarkMode ? <Dark /> : <Light />}
            </S.ThemeSpan>
            <S.IconText>Theme</S.IconText>
          </S.ThemeDiv>
        </S.IconsLi>
      </S.IconsUl>
    </S.NavbarWrapper>
  )
}

export default Navbar