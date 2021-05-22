import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import { AddIcon, FeedIcon, HomeIcon } from "../../icons"

export function MobileNav() {
  const router = useRouter()

  return (
    <MobileNavContainer>
      <IconWrapper isActive={router.pathname === "/feed"} onClick={() => router.push("/feed")}>
        <FeedIcon />
      </IconWrapper>
      <Button onClick={() => router.push("/add-post")}>
        <AddIcon />
        <span>Create Post</span>
      </Button>
      <IconWrapper isActive={router.pathname === "/"} onClick={() => router.push("/")}>
        <HomeIcon />
      </IconWrapper>
    </MobileNavContainer>
  )
}

const IconWrapper = styled.div`
  padding: 12px;
  border-radius: 8px;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.colors.secondary.primary};
    `}
`

const MobileNavContainer = styled.nav`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  padding: 0 20px;
  place-items: center;
  grid-gap: 16px;
  border-top: 2px solid ${({ theme }) => theme.colors.main.border};
`

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.main.primary};
  border-radius: 8px;
  padding: 12px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.text.white};
    font-weight: bolder;
  }
`
