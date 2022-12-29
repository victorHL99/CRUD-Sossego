import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import * as S from './styles';
import Button from '../Button';
import UserContext from '../../../contexts/UserContext';
import StageContext from '../../../contexts/StageContext';

export default function AboutYou() {
  const { stage, setStage } = useContext(StageContext);
  const { about, setAbout } = useContext(UserContext);

  function returnStage() {
    setStage(stage - 1);
  }

  return (
    <>
      <S.AboutContainer>
        <S.AboutTitle>Conte-nos um pouco sobre você</S.AboutTitle>
        <S.TextInput
          autoFocus
          type="text"
          placeholder="Digite Aqui"
          value={about}
          onChange={e => setAbout(e.target.value)}
          data-cy="about"
        />
      </S.AboutContainer>
      <S.ContainerButton>
        <Button
          onClick={() => {
            setStage(stage + 1);
            Swal.fire({
              title: 'Pronto!',
              text: 'Usuário Criado com Sucesso!',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
          }}
          color="#5357B1"
          text="Próximo passo"
          nameDataCy="nextStep"
        />
        <Button onClick={() => returnStage()} color="#8C98A9" text="Anterior" />
      </S.ContainerButton>
    </>
  );
}
