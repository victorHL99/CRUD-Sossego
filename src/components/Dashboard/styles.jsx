import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 1017px;
  height: 90%;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  position: absolute;
  flex-direction: column;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 56px 0 0 60px;
`;

export const IconBoxContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 33px;
  margin-top: 47px;
`;

export const InputContainer = styled.div``;

export const InputSubContainer = styled.div`
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px 60px;
`;
