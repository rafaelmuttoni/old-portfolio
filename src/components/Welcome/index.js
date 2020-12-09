import React, { useEffect, useState } from "react"

import * as S from "./styled"

const Welcome = () => {
  const [firstVisible, setFirstVisible] = useState(false)
  const [secondVisible, setSecondVisible] = useState(false)
  const [thirdVisible, setThirdVisible] = useState(false)
  const [fourthVisible, setFourthVisible] = useState(false)

  const welcomeFunction = () => {
    setTimeout(() => setFirstVisible(true), 500)
    setTimeout(() => setSecondVisible(true), 1500)
    setTimeout(() => setThirdVisible(true), 3000)
    setTimeout(() => setFourthVisible(true), 4250)

    return
  }

  useEffect(() => welcomeFunction(), [])

  return (
    <S.WelcomeWrapper>
      <S.WelcomeText
        className={`strong ${firstVisible ? "display" : "hidden"}`}
      >
        Hi, my name is Rafael Muttoni!{" "}
        <span role="img" aria-label="Waving Hand">
          👋
        </span>
      </S.WelcomeText>
      <S.WelcomeText className={`${secondVisible ? "display" : "hidden"}`}>
        I'm a self-taught Web Developer and this is my website.
      </S.WelcomeText>
      <S.WelcomeText className={`${thirdVisible ? "display" : "hidden"}`}>
        Currently working on a web app called{" "}
        <a
          href="https://terapeutapro.com.br"
          target="_blank"
          rel="noreferrer noopener"
          className="terapeuta"
        >
          Terapeuta Pro
        </a>
        .
      </S.WelcomeText>
      <S.WelcomeText className={`${fourthVisible ? "display" : "hidden"}`}>
        Want to say hi or talk about a project? Click{" "}
        <S.WelcomeLink to="/contact" fade>
          here
        </S.WelcomeLink>
        .
      </S.WelcomeText>
    </S.WelcomeWrapper>
  )
}

export default Welcome
