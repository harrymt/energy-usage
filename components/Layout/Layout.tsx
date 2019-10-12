import styled from 'styled-components'
import { breakpoints } from './Variables'

export const Table = styled.table`
  color: rgb(0, 51, 102);
  text-align: left;
  width: 100%;

  thead {
    background: rgb(242, 242, 242);
  }

  th,
  td {
    padding: 1rem;
  }
`

export const FlexBox = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`

export const FlexChild = styled.div`
  padding-top: 7vh;
  flex-direction: column;
  width: 100%;
`
