import React from 'react'
import styled from 'styled-components'
import { H2, StyledLink, P } from './Layout/Typography'

const Content = styled.section`
  background: rgb(242, 242, 242);
  border-radius: 0.3rem;
  padding: 1.5rem;
  max-width: 750px;
`

export const ContentHighlight = ({}) => (
  <Content>
    <H2>How we estimate energy usage</H2>
    <P>
      The calculation is based on previous energy meter readings. We use the
      last couple of months as a gage for how much we think you are going to use
      next month. This simple calculation helps you to budget and allows us to
      provide you with more accurate bills. My name is Harry Mumford-Turner and
      this application can be found on{' '}
      <StyledLink href="https://www.github.com/harrymt">my GitHub</StyledLink>{' '}
      too! Technically speaking there are two parts to this magic.
    </P>
    <P>
      The first is a web application front end, however, I'm using <StyledLink href="https://nextjs.org/docs">Next.js</StyledLink>,
      another JavaScript library to provide Server-Side rendering! This means
      the pages are pretty fast loading and we rarely see flashes of content
      when we are fetching data from APIs.
    </P>
    <P>
      Talking of APIs, the second part of this application is the backend
      Next.js powered data API. This provides the meter readings you are viewing
      on screen! I am only mocking it for now as I sadly don't have real data,
      as of yet!
    </P>
  </Content>
)

export default ContentHighlight
