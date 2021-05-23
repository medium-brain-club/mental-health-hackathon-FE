import styled from "styled-components"
import { Tag } from "../Tag"

export function Tags({ tags = [] }) {
  return (
    <TagsContainer>
      {tags?.map(tag => (
        <Tag tag={tag} key={tag.ID} />
      ))}
    </TagsContainer>
  )
}

const TagsContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary.primary};
  overflow-x: auto;
  margin-bottom: 16px;
  display: flex;
`
