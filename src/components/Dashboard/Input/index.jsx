import * as S from './styles';

export default function Input({
  label,
  type,
  placeholder,
  width,
  height,
  onInput,
  onSetInput,
  nameDataCy,
}) {
  return (
    <S.InputContainer width={width} height={height} label={label}>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputField
        data-cy={nameDataCy}
        type={type}
        placeholder={placeholder}
        value={onInput}
        onChange={e => onSetInput(e.target.value)}
      />
    </S.InputContainer>
  );
}
