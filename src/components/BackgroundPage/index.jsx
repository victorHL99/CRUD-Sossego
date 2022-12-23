/* eslint-disable react/prop-types */
import * as S from './styles';

export default function BackgroundPage({ position }) {
  return position === 'left' ? (
    <S.BackgroundPageContainerLeft />
  ) : (
    <S.BackgroundPageContainerRight />
  );
}
