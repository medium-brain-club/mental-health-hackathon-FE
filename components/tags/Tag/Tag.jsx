import styled from "styled-components"

export function Tag({ tag }) {
  return <StyledTag>#{tag.name}</StyledTag>
}

const StyledTag = styled.span`
  margin-left: 28px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 28px;
  }
`
