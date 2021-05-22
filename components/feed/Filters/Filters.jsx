import { useRouter } from "next/router"
import styled from "styled-components"
import { Button } from "../../../styles/styled-components"

export function Filters() {
  const router = useRouter()

  return (
    <FiltersContainer>
      <Button
        onClick={() => router.push("/feed?sort-by=interactions")}
        isActive={router.query["sort-by"] === "interactions"}
      >
        Interactions
      </Button>
      <Button
        onClick={() => router.push("/feed?sort-by=views")}
        isActive={router.query["sort-by"] === "views"}
      >
        Views
      </Button>
      <Button
        onClick={() => router.push("/feed?sort-by=recent")}
        isActive={router.query["sort-by"] === "recent"}
      >
        Recent
      </Button>
    </FiltersContainer>
  )
}

const FiltersContainer = styled.div`
  display: flex;
  padding: 0 20px;
  margin-bottom: 16px;

  @media (min-width: 1080px) {
    padding: 0;
  }

  button {
    width: fit-content;
    color: ${({ theme }) => theme.colors.text.white};
    margin-right: 8px;
  }
`
