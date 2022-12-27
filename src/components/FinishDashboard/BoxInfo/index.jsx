import * as S from './styles';

export default function BoxInfo({ title, text }) {
  return (
    <S.BoxInfoContainer>
      <h1>{title}</h1>
      <p>{text}</p>
    </S.BoxInfoContainer>
  );
}
