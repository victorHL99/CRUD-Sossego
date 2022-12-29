import * as S from './styles';

export default function Button({
  onClick,
  color,
  text,
  width,
  margin,
  nameDataCy,
}) {
  return (
    <S.ButtonContainer
      onClick={onClick}
      color={color}
      width={width}
      margin={margin}
      data-cy={nameDataCy}
    >
      {text}
    </S.ButtonContainer>
  );
}
