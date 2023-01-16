import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

  display: flex;
  justify-content: space-between;

  padding: 24px 140px;

  a,
  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin: -17px 0;
    font-size: 24px;
  }

  > div {
    margin: 10px 0;

    input {
      width: 630px;
    }
  }

  button {
    margin-top: 5px;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
    margin-left: 115px;
  }

  strong {
    font-size: 14px;
    margin-left: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
