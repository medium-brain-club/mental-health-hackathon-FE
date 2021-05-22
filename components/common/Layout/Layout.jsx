import styled from "styled-components"
import { MobileNav } from "../MobileNav"
import { useWindowSize } from "../../../hooks/useWindowSize"

export function Layout({ children }) {
  const { isMobile } = useWindowSize()

  return (
    <LayoutContainer>
      <PageContainer>{children}</PageContainer>
      {isMobile ? <MobileNav /> : null}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 68px;

  @media (min-width: 768px) {
    grid-template-rows: 100px 1fr;
  }
`
const PageContainer = styled.div``
