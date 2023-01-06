import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  /* grid-template-columns: auto; */
  grid-template-rows: 116px 1000px;
  grid-template-areas: "header" "content";
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    /* margin: 0px 106px; */
    margin: 0 106px;

    padding-right: 16px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin: 0 106px 40px;

    h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;

      margin-top: 50px;
      color: ${({ theme }) => theme.COLORS.TITLE};
    }

    > button:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 200px;
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;

      margin-top: 47px;
      margin-right: 15px;

      > svg {
        margin-right: 8px;
      }
    }
  }

  > .notes:nth-child(3) {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

    > span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  background: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
`;
