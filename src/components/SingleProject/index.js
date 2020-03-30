import React from 'react'

import * as S from './styled'

const SingleProject = ({title, url, description, tags, dkImg, mbImg}) => {

  return (
    <S.ContentWrapper>
      <S.DevicesWrapper>
        <S.DesktopWrapper>
          <S.ProjectBar><S.BallsWrapper><S.RedBall /><S.YellowBall /><S.GreenBall /></S.BallsWrapper></S.ProjectBar>
          {dkImg}
        </S.DesktopWrapper>
        <S.PhoneWrapper>
          <S.PhoneContent>{mbImg}</S.PhoneContent>
        </S.PhoneWrapper>
      </S.DevicesWrapper>
      <S.ProjectTitle target="_blank" href={url}>{title}</S.ProjectTitle>
      <S.ProjectDesription>{description}</S.ProjectDesription>
      <S.ProjectTagsList>
        Technologies: 
        {tags.map(tag => <S.ProjectTagsItem>{tag}</S.ProjectTagsItem>)}
      </S.ProjectTagsList>
    </S.ContentWrapper>
  )
}

export default SingleProject