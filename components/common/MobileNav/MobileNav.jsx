import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import { AddIcon, FeedIcon, HomeIcon } from "../../icons"
import { Button } from "../../../styles/styled-components"

export function MobileNav({ buttonAction }) {
  const router = useRouter()
  function handleOnClick() {
    const atAddPost = router.pathname === "/add-post"
    if (atAddPost) {
      buttonAction()
    } else {
      router.push("/add-post")
    }
  }

  return (
    <MobileNavContainer>
      <IconWrapper
        isActive={router.pathname === "/feed"}
        onClick={() => router.push("/feed?sort-by=interactions")}
      >
        <FeedIcon />
      </IconWrapper>
      <Button onClick={handleOnClick} isPrimary>
        <AddIcon />
        <span>{router.pathname === "/add-post" ? "Submit Post" : "Create Post"}</span>
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
  display: grid;
  place-content: center;

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
  grid-gap: 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.main.border};
`
