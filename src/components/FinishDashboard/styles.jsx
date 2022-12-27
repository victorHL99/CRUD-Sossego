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

export const FinalForm = styled.div`
  margin: 34px 0 0 69px;
  width: 442px;
  height: 100%;
`;

export const TopSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 20px;
`;

export const BottomContainer = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;

export const DividingLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 55px;
`;
