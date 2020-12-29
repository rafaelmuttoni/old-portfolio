import React from "react"

import * as S from "./styled"

const SingleProject = ({ title, url, description, tags, Img }) => {
  return (
    <S.ContentWrapper>
      <S.DevicesWrapper>
        <S.DesktopWrapper href={url} target="_blank">
          <S.ProjectBar>
            <S.BallsWrapper>
              <S.RedBall />
              <S.YellowBall />
              <S.GreenBall />
            </S.BallsWrapper>
          </S.ProjectBar>
          {Img}
        </S.DesktopWrapper>
      </S.DevicesWrapper>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDesription>{description}</S.ProjectDesription>
      <S.ProjectTagsList>
        Tags: 
        {tags.map(tag => (
          <S.ProjectTagsItem>{tag}</S.ProjectTagsItem>
        ))}
      </S.ProjectTagsList>
    </S.ContentWrapper>
  )
}

export default SingleProject
