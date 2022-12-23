import styled from 'styled-components';

export const InputContainer = styled.div`
  width: ${({ width }) => width || 'auto'}px !important;
  height: ${({ height }) => height}px !important;
  margin-top: ${({ label }) => (label === 'Nome' ? '47' : '0')}px;

  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputField = styled.input`
  border: none;
  height: 44px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;

  padding-left: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
