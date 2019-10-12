import React from 'react'
import styled from 'styled-components'
import { H2, StyledLink } from './Typography'

const Content = styled.section`
  background: rgb(242, 242, 242);
  border-radius: 0.3rem;
  padding: 1.5rem;
  max-width: 750px;
`

const P = styled.p`
  font-size: 20px;
`

export const ContentHighlight = ({}) => (
  <Content>
    <H2>Estimated Energy</H2>
    <P>
      blah blah bla bah blah bla bla bla bah blah bla bla bla bah blah bla bla
      bla bah blah bla bla bla bah blah bla bla bla bah blah bla bla bla bah
      blah bla bla <StyledLink href="">a link too</StyledLink> bla bah blah bla
      bla bla bah blah bla bla bla bla bla blah blah bla
    </P>
    <P>
      blah blah la blah blah bla blah blah blablah blah bla blah blah bla blah
      blah bla blah blah bla
    </P>
    <P>
      blah blah bla blah blah bla blah blah bla blah blah blablah blah bla blah
      blah bla blah blah bla blah blah bla
    </P>
  </Content>
)

export default ContentHighlight
