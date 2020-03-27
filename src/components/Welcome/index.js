import React from 'react'

import * as S from './styled'

const Welcome = () => (
  <S.WelcomeWrapper>
    <S.WelcomeText className="strong">Hi, my name is Rafael Muttoni! <span role="img" aria-label="Waving Hand">👋</span></S.WelcomeText>
    <S.WelcomeText>I'm a self-taught Front-End Developer and this is my website.</S.WelcomeText>
    <S.WelcomeText>Currently looking for great <S.WelcomeLink to="/projects" fade>projects</S.WelcomeLink> to work on. Get to know more <S.WelcomeLink to="/about" fade>about me</S.WelcomeLink>.</S.WelcomeText>
  </S.WelcomeWrapper>
)

export default Welcome