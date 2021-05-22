import styled from "styled-components"
import { OptionsIcon } from "../../icons"

export function PostCard({ post }) {
  return (
    <PostCardContainer>
      <OptionsIcon />
      <TagsContainer>
        {post.tags.map(tag => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagsContainer>
      <Title>{post.title}</Title>
      <Body>{post.body.slice(0, 80)}...</Body>
    </PostCardContainer>
  )
}

const PostCardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 12px;
  padding: 12px;
  position: relative;

  svg {
    position: absolute;
    top: 8px;
    right: 12px;
  }
`
const Title = styled.h3`
  margin-bottom: 16px;
`
const Body = styled.p`
  font-size: 14px;
`
const TagsContainer = styled.div`
  margin-bottom: 16px;
  span {
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.text.light};
    &:first-child {
      margin-left: 0;
    }
  }
`
const Tag = styled.span``
const IconWrapper = styled.div``
const Count = styled.span``
