import styled from 'styled-components';

export const BackgroundPageContainerLeft = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayVeryLight};
`;

export const BackgroundPageContainerRight = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;
