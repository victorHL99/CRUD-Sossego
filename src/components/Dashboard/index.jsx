/* eslint-disable no-useless-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
import React, { useContext } from 'react';

import IconBox from './IconBox';
import TitleText from './TitleText';
import * as S from './styles';
import iconUser1 from '../../assets/images/iconUser1.svg';
import iconUser2 from '../../assets/images/IconUser2.svg';
import iconHouse1 from '../../assets/images/iconHouse1.svg';
import iconHouse2 from '../../assets/images/IconHouse2.svg';
import IconHouse3 from '../../assets/images/IconHouse3.svg';
import iconForm1 from '../../assets/images/iconForm1.svg';
import iconForm2 from '../../assets/images/IconFrom2.svg';
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
        {stage === 1 ? (
          <>
            <IconBox icon={iconUser1} text="Identificação do Usuário" />
            <IconBox icon={iconHouse1} text="Endereço do usuário" />
            <IconBox icon={iconForm1} text="Sobre você" />
          </>
        ) : null}
        {stage === 2 ? (
          <>
            <IconBox icon={iconUser2} text="Identificação do Usuário" />
            <IconBox icon={iconHouse2} text="Endereço do usuário" />
            <IconBox icon={iconForm1} text="Sobre você" />
          </>
        ) : null}
        {stage === 3 ? (
          <>
            <IconBox icon={iconUser2} text="Identificação do Usuário" />
            <IconBox icon={IconHouse3} text="Endereço do usuário" />
            <IconBox icon={iconForm2} text="Sobre você" />
          </>
        ) : null}
      </S.IconBoxContainer>
      {stage === 1 ? <UserStage /> : null}
      {stage === 2 ? <Address /> : null}
      {stage === 3 ? <AboutYou /> : null}
    </S.DashboardContainer>
  );
}
