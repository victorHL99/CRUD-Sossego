import styled from 'styled-components';

export const FinishContainer = styled.div`
  width: 545px;
  height: 90%;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  position: absolute;
  flex-direction: column;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Title = styled.h1`
  margin-top: 59px;
  padding-left: 140px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: ${({ theme }) => theme.colors.black};
`;
