import styled, { css } from "styled-components"

export const BorderlessButton = styled.a`
  font-size: 14px;
  border: none;
  background-color: ${({ theme }) => theme.colors.main.white};

  span {
    color: ${({ theme }) => theme.colors.text.purple};
    font-weight: 500;
  }
`
