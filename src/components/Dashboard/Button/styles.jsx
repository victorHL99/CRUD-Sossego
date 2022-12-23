import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 226px;
  height: 54px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  border: none;

  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
