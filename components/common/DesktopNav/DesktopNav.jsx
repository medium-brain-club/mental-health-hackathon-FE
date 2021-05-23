import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import { SearchIcon, AddIcon } from "../../icons"
import { Button, BorderlessButton } from "../../../styles/styled-components"

export function DesktopNav() {
  const router = useRouter()

  return (
    <DesktopNavContainer>
      <h1>Ventia</h1>

      <ElementWrapper>
        <SearchIcon />
        <SearchBar type="text" placeholder="Search..."></SearchBar>
      </ElementWrapper>

      <BorderlessButton onClick={() => router.push("/feed")}>
        <span>Home</span>
      </BorderlessButton>

      <Button isPrimary onClick={() => router.push("/add-post")}>
        <AddIcon />
        <span>Create Post</span>
      </Button>
    </DesktopNavContainer>
  )
}

const DesktopNavContainer = styled.nav`
  display: grid;
  grid-template-columns: max-content 1fr min-content auto;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  grid-gap: 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.main.border};
`

const ElementWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
`

const SearchBar = styled.input`
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 12px;
  padding-left: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
`
