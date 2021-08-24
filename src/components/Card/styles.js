import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  max-width: 230px;
  width: 100%;
  height: 260px;

  border-radius: 8px;
  background-color: #d1d1e9;
  border: 3px solid #2b2c34;

  position: relative !important;

  > span {
    font-size: 1.1rem;
    font-weight: bold;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    z-index: 999;
  }

  h2 {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 30px;
  }

  .medals {
    display: flex;
    justify-content: center;
    /* margin-top: 30px; */

    & div + div {
      margin-left: 10px;
    }

    .medals__amount {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 1rem;
        margin-top: 4px;
        font-weight: 500;
      }
    }
  }
  .medalists {
    text-align: center;
  }
  a {
    font-size: 0.85rem;
    text-decoration: none;
    color: #2b2c34;
    transition: color .2s ease-in-out;

    &:hover {
      color: #6246ea;
      text-decoration: underline;
    }
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
