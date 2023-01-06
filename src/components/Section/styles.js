import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
