import styled, { css } from "styled-components"

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.main.disabled};
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  height: fit-content;
  cursor: pointer;

  transition: background-color 150ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.main.primary};
  }

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.text.white};
    font-weight: 500;
  }

  ${({ isActive, isPrimary }) =>
    (isActive || isPrimary) &&
    css`
      background: ${({ theme }) => theme.colors.main.primary};
    `};
`
