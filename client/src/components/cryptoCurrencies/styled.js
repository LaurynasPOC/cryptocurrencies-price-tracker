import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { mobile } from "../../styles/breakpoints";

export const ReactPaginateStyles = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: var(--text-color);
    list-style: none;
    border: 1px solid var(--primary-color);
    margin: 0 3px;
    border-radius: 4px;
    cursor: pointer;
  }
  li.active {
    color: var(--primary-color);
  }
  & > li:first-child,
  li:last-child {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  ${({ error }) =>
    error.length > 0 &&
    `
    & > div:first-child {
      position: absolute;
      top: -30px;
    }
  `}

  @media ${mobile} {
    & > div:first-child {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 240px;
  margin-right: 10px;
  outline: none;
  @media ${mobile} {
    font-size: 14px;
    width: 100%;
    border-radius: 4px 0 0 4px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--text-color);
  &:hover {
    background-color: #88d3dd;
  }
  @media ${mobile} {
    border-radius: 0 4px 4px 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f2f5f2;
  color: black;
  border-radius: 8px;
`;

export const Header = styled.thead`
  font-weight: bold;
  border-bottom: 1px solid var(--primary-color);
`;

export const Row = styled.tr`
  cursor: pointer;
  border-bottom: 1px solid var(--primary-color);
  height: 40px;
  & > td:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > td:last-child {
    color: ${({ changerate }) => (changerate > 0 ? "green" : "red")};
  }
  &:hover {
    color: black;
    background-color: rgba(53, 166, 182, 0.1);
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

export const Cell = styled.td`
  padding: 8px 12px;
  text-align: center;
  vertical-align: middle;

  & > img {
    margin-right: 10px;
  }
`;
