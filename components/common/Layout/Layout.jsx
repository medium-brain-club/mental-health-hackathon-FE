import styled from "styled-components"
import { MobileNav } from "../MobileNav"
import { useWindowSize } from "../../../hooks/useWindowSize"

export function Layout({ children }) {
  const { isMobile } = useWindowSize()

  return (
    <LayoutContainer>
      {isMobile ? null : <div />}
      <PageContainer>{children}</PageContainer>
      {isMobile ? <MobileNav /> : null}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.main`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 68px;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-rows: 100px minmax(0, 1fr);
  }
`
const PageContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100%;
`
