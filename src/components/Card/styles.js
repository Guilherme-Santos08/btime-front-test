import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  max-width: 14.375rem;
  width: 100%;
  height: 16.25rem;

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
    z-index: 0;
  }

  h2 {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 1.875rem;
  }

  .medals {
    display: flex;
    justify-content: center;
    /* margin-top: 30px; */

    & div + div {
      margin-left: 0.625rem;
    }

    .medals__amount {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 1rem;
        margin-top: 0.25rem;
        font-weight: 500;
      }
    }
  }
  .medalists {
    text-align: center;
  }
  span {
    font-size: 0.85rem;
    text-decoration: none;
    color: #2b2c34;
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #6246ea;
      text-decoration: underline;
    }
  }

  img {
    width: 3.125rem;
    height: 3.125rem;
  }
`;

export const Medalist = styled.div`
  position: absolute;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  visibility: hidden;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  transition: background 0.2s ease-in;

  &.backgroundOpacity {
    background-color: rgba(0, 0, 0, 0.5);
    visibility: visible;
  }
`;

export const MedalistContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 18rem;
  height: 18.75rem;
  padding: 1.25rem;
  background-color: #fff;

  transform: translate(-50%, -50%);
  border: 2px solid #6246ea;
  border-radius: 8px;
  overflow-y: auto;

  opacity: 0;
  z-index: -999;
  transition: opacity 0.2s ease-in-out;

  &.showMedalists {
    opacity: 1;
    z-index: 0;
  }

  & > span {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: #ff0000;

    cursor: pointer;
  }

  h2 {
    text-align: center;
  }

  .medalists {
    position: relative;
  }
  .medalists__name {
    margin-top: 1.875rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span + span {
      margin-top: 10px;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #2b2c34;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6246ea;
    border-radius: 20px;
  }
`;
