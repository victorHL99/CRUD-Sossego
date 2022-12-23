import styled from 'styled-components';

export const IconBoxContainer = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 33px;
  flex-direction: row;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const IconBoxIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBoxText = styled.p``;
