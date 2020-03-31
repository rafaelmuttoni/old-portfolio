import React from 'react'

import * as S from './styled'
import skills from './content'

const About = () => (
  <S.AboutWrapper>
    <S.AboutTitle>About me <span role="img" aria-label="Man Technologist">👨🏻‍💻</span></S.AboutTitle>
    <S.AboutDescription>My name is Rafael Muttoni and I was born in Porto Alegre <span role="img" aria-label="Brazilian Flag">🇧🇷</span>. Currently, I work as a Freelance Web Developer.</S.AboutDescription>
    <S.AboutDescription>Since I was a kid I've always been very passionate about creating. Combining that passion with my interest in technology led me to become a web developer, which I'm very happy about.</S.AboutDescription>
    <S.AboutDescription>I love coding and all the process that involves creating a website. I'm very focused and dedicated to get that awesome final result I know it's achievable.</S.AboutDescription>
    <S.AboutSubtitle>tech skills <span role="img" aria-label="Laptop">💻</span></S.AboutSubtitle>
    <S.AboutDescription>"Always start from the basics", that's what I did and recommend to everyone who wants to learn how to code.</S.AboutDescription>
    <S.SkillsList>
        {skills.map(skill => <S.SkillsItem>{skill}</S.SkillsItem>)}
    </S.SkillsList>
  </S.AboutWrapper>
)

export default About