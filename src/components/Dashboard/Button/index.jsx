import * as S from './styles';

export default function Button({ onClick, color, text }) {
  return (
    <S.ButtonContainer onClick={onClick} color={color}>
      {text}
    </S.ButtonContainer>
  );
}
