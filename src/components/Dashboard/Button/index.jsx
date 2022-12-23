import * as S from './styles';

export default function Button({ color, text }) {
  return <S.ButtonContainer color={color}>{text}</S.ButtonContainer>;
}
