import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "white")};
`;

export const H3 = styled.h3`
  color: white;
  @media ${mobile} {
    font-size: 32px;
  }
`;
