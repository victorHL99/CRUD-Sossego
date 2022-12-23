/* eslint-disable jsx-a11y/alt-text */
import * as S from './styles';

export default function IconBox({ icon, text }) {
  return (
    <S.IconBoxContainer>
      <S.IconBoxIcon>
        <img src={icon} />
      </S.IconBoxIcon>
      <S.IconBoxText>{text}</S.IconBoxText>
    </S.IconBoxContainer>
  );
}
