import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  padding-right: 83px;
  gap: 11px;
`;

export const TextInput = styled.textarea`
  border: none;
  height: 232px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;

  padding-left: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
  resize: none;
`;

export const AboutTitle = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-items: end;
  margin: 50px 29px 0px 0px;
  gap: 24px;
`;
