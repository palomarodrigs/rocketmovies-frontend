import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";

  main::-webkit-scrollbar {
    width: 6px;
  }

  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  > main {
    grid-area: content;
    max-width: 1366px;
    padding: 0 16px;

    overflow-y: scroll;

    margin: 40px auto 56px;

    button {
      display: flex;
      align-items: center;
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;

      margin: 24px 0;

      h1 {
        font-weight: 500;
        margin-right: 19px;

        font-size: 36px;

        color: ${({ theme }) => theme.COLORS.TITLE};
      }

      svg {
        width: 20px;
        height: 20px;

        margin-right: 10px;
        margin-top: 12px;
      }
    }

    > div:nth-child(3) {
      > img {
        width: 16px;
        border-radius: 50%;
        margin-right: 8px;
      }

      > svg {
        margin: 0 8px 0 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    > div:nth-child(4) {
      margin: 40px 0;
      > span {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }
    }

    p {
      margin-top: 40px;
      text-align: justify;
    }
  }
`;
