/* eslint-disable no-useless-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
import React, { useContext } from 'react';

import IconBox from './IconBox';
import TitleText from './TitleText';
import * as S from './styles';
import iconUser from '../../assets/images/iconUser.svg';
import iconHouse from '../../assets/images/iconHouse.svg';
import iconForm from '../../assets/images/iconForm.svg';
import UserStage from './UserStage';
import StageContext from '../../contexts/StageContext';
import Address from './Address';
import AboutYou from './AboutYou';

export default function Dashboard() {
  const { stage } = useContext(StageContext);

  return (
    <S.DashboardContainer>
      <TitleText text="Criação de usuário" />
      <S.IconBoxContainer>
        <IconBox icon={iconUser} text="Identificação do Usuário" />
        <IconBox icon={iconHouse} text="Endereço do usuário" />
        <IconBox icon={iconForm} text="Sobre você" />
      </S.IconBoxContainer>
      {stage === 1 ? <UserStage /> : null}
      {stage === 2 ? <Address /> : null}
      {stage === 3 ? <AboutYou /> : null}
    </S.DashboardContainer>
  );
}
