import styled from "styled-components";

export const Container = styled.div`
 
  border-bottom: 100px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Logo = styled.a`

  padding: 1.2rem 0;
  background-color: #f8f8f8;

  img {
    width: 5rem;
    margin: 0 1rem;
    border-radius: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    a {
      text-decoration: none;
      color: #90a10d;
      font-weight: 700;
      padding: 0 1rem;
      font-size: 0.9em;
      display: flex;
      align-items: center;

      span {
        padding: 0 0.2rem;
      }

      &:hover {
        color: #90a10d;
        cursor: pointer;
        transition: all 200ms ease;
      }
    }
  }
`;