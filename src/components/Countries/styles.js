import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 1rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 0.9rem;
    text-align: center;
    max-width: 72px;
    margin-bottom: 0.625rem;
  }


  > div {
    display: flex;
    flex-direction: column;

    overflow-y: auto;
    width: 4.375rem;
    height: 90vh;

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

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
      padding: 0.625rem;
      margin-right: 8px;

      border-radius: 4px;
      border: 1px solid #2b2c34;
      cursor: default;

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #6246ea;
        color: white;
      }
    }
    span + span {
      margin-top: 0.625rem;
    }
  }
`;
