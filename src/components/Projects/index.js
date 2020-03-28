import React from 'react'

import * as S from './styled'
import techs from './content'

const Projects = () => (
  <S.ProjectsWrapper>
    <S.ProjectsTitle>web developer projects <span role="img" aria-label="Laptop">💻</span></S.ProjectsTitle>
    <S.ProjectsDescription>recent projects I've worked on, you can filter them by technology</S.ProjectsDescription>
    <S.ProjectsFilterList>
      {techs.map(tech => <S.ProjectsFilterItem>{tech.label}</S.ProjectsFilterItem>)}
    </S.ProjectsFilterList>
  </S.ProjectsWrapper>
)

export default Projects