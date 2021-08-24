import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  max-width: 230px;
  width: 100%;
  height: 260px;

  border-radius: 8px;
  border: 1px solid red;

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
    font-size: 1.6rem;
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
    font-size: 0.8rem;
   
  }

  img {
    width: 50px;
    height: 50px;
  }
`