import * as S from './styles';

export default function IconBox({ icon, text }) {
  return (
    <S.IconBoxContainer>
      <S.IconBoxIcon>{icon}</S.IconBoxIcon>
      <S.IconBoxText>{text}</S.IconBoxText>
    </S.IconBoxContainer>
  );
}
