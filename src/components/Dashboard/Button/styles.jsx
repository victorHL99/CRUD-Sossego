import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: ${({ width }) => width || 226}px !important;
  height: 54px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  border: none;
  margin-top: ${({ margin }) => margin || 0}px;

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
