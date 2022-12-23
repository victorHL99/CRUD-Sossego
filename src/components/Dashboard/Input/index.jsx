import * as S from './styles';

export default function Input({ label, type, placeholder, width, height }) {
  return (
    <S.InputContainer width={width} height={height} label={label}>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputField type={type} placeholder={placeholder} />
    </S.InputContainer>
  );
}
