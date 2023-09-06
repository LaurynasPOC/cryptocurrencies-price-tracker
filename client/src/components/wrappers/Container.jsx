import styled from "styled-components";
import { desktop, tablet } from "../../styles/breakpoints";

export const Container = styled.div`
  max-width: 1000px;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  @media ${desktop} {
    padding: 30px;
  }
  @media ${tablet} {
    padding: 20px;
  }
`;
