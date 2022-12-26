import React, { useContext } from 'react';
import * as S from './styles';
import Button from '../Button';
import StageContext from '../../../contexts/StageContext';

export default function AboutYou() {
  const { stage, setStage } = useContext(StageContext);
  const [about, setAbout] = React.useState('');

  function returnStage() {
    setStage(stage - 1);
  }

  return (
    <>
      <S.AboutContainer>
        <S.AboutTitle>Conte-nos um pouco sobre você</S.AboutTitle>
        <S.TextInput
          type="text"
          placeholder="Digite Aqui"
          value={about}
          onChange={e => setAbout(e.target.value)}
        />
      </S.AboutContainer>
      <S.ContainerButton>
        <Button
          onClick={() => setStage(stage + 1)}
          color="#5357B1"
          text="Próximo passo"
        />
        <Button onClick={() => returnStage()} color="#8C98A9" text="Anterior" />
      </S.ContainerButton>
    </>
  );
}
