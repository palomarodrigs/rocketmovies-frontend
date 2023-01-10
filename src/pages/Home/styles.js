import styled from "styled-components";
import { Link } from "react-router-dom";

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

  > .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 50px 123px 40px 123px;

    > h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;

      text-align: center;

      color: ${({ theme }) => theme.COLORS.TITLE};
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: auto;

    padding: 1rem;
    margin: 0 106px;
    padding-right: 16px;
  }

  > .notes:nth-child(3) {
    width: 100%;
    display: flex;
    flex-direction: column;

    /* margin-bottom: 24px; */

    > span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  background: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
`;

export const NewMovie = styled(Link)`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-weight: 400;

    svg {
      margin-right: 8px;
    }
  }
`;
