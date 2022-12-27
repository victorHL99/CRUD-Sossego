import * as S from './styles';

export default function Button({ onClick, color, text, width, margin }) {
  return (
    <S.ButtonContainer
      onClick={onClick}
      color={color}
      width={width}
      margin={margin}
    >
      {text}
    </S.ButtonContainer>
  );
}
