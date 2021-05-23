import styled from "styled-components"

export function Tag({ tag }) {
  return (
    <StyledTag>
      #{tag.Name.split(" ").join("").toLowerCase().replace("+", "").replace("-", "")}
    </StyledTag>
  )
}

const StyledTag = styled.span`
  margin-left: 28px;
  width: fit-content;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 28px;
  }
`
