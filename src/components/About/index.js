import React from "react"

import * as S from "./styled"
import skills from "./content"

const About = () => (
  <S.AboutWrapper>
    <S.AboutTitle>
      About me{" "}
      <span role="img" aria-label="Man Technologist">
        👨🏻‍💻
      </span>
    </S.AboutTitle>
    <S.AboutDescription>
      My name is Rafael Muttoni and I'm currently working on a Web App for
      therapists:{" "}
      <a
        href="https://terapeutapro.com.br"
        target="_blank"
        style={{ fontWeight: 600, textDecoration: "none" }}
      >
        Terapeuta Pro
      </a>
      .
    </S.AboutDescription>
    <S.AboutDescription>
      Since I was a kid I've always been very passionate about creating.
      Combining that passion with my interest in technology led me to become a
      web developer, which I'm very happy about.
    </S.AboutDescription>
    <S.AboutDescription>
      I love coding and all the process that involves creating a website. I'm
      very focused and dedicated to get that awesome final result I know it's
      achievable.
    </S.AboutDescription>
    <S.AboutSubtitle>
      tech tags{" "}
      <span role="img" aria-label="Laptop">
        💻
      </span>
    </S.AboutSubtitle>
    <S.SkillsList>
      {skills.map(skill => (
        <S.SkillsItem>{skill}</S.SkillsItem>
      ))}
    </S.SkillsList>
    <S.AboutDescription>
      it's always a matter of finding the right tool for the job{" "}
      <span role="img" aria-label="Hammer">
        🛠️
      </span>
    </S.AboutDescription>
  </S.AboutWrapper>
)

export default About
