import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }


  > div {
    display: flex;
    flex-direction: column;

    overflow-y: auto;
    width: 70px;
    height: 90vh;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #2b2c34;
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
      padding: 10px;
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
      margin-top: 10px;
    }
  }
`;
