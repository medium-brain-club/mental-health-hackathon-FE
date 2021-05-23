import { useRouter } from "next/router"
import { useState } from "react"
import styled, { css } from "styled-components"
import { LovesIcon, LikesIcon, OptionsIcon, SupportsIcon } from "../../icons"

export function PostCard({ post }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const router = useRouter()
  function toggleOptions(e) {
    e.stopPropagation()
    setIsOptionsOpen(!isOptionsOpen)
  }

  return (
    <PostCardContainer
      onClick={e => {
        e.stopPropagation()
        router.push(`/post/${post.id}`)
      }}
    >
      <OptionsWrapper>
        <MOptionsIcon onClick={toggleOptions} isOpened={isOptionsOpen} />
        {isOptionsOpen ? (
          <Options>
            <Option>
              <LikesIcon />
              <span>Like</span>
            </Option>
            <Option>
              <SupportsIcon />
              <span>Support</span>
            </Option>
            <Option>
              <LovesIcon />
              <span>Love</span>
            </Option>
          </Options>
        ) : null}
      </OptionsWrapper>
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
  cursor: pointer;
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

const MOptionsIcon = styled(OptionsIcon)`
  cursor: pointer;
  path {
    transition: fill 150ms ease-in-out;
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.main.primary};
    }
  }
  ${({ isOpened }) =>
    isOpened &&
    css`
      path {
        fill: ${({ theme }) => theme.colors.main.primary};
      }
    `}
`

const OptionsWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
`
const Options = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  border: 2px solid ${({ theme }) => theme.colors.main.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.text.white};
  padding: 8px;
  display: flex;
  flex-direction: column;
  z-index: 100;
`
const Option = styled.span`
  display: flex;
  align-items: center;
  position: static;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  span {
    margin-left: 12px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.main.light};
  }
`
const Tag = styled.span``
