import styled from 'styled-components';

export const BoxInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.black};
  }
`;
