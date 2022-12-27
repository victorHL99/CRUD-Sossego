import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import * as S from './styles';
import Buttom from '../Dashboard/Button';
import BoxInfo from './BoxInfo';

export default function FinishDashboard() {
  const { name, email, street, number, cep } = useContext(UserContext);

  function formatCep() {
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  return (
    <S.FinishContainer>
      <S.Title>Usuário Criado!</S.Title>
      <S.FinalForm>
        <S.TopSubContainer>
          <BoxInfo title="Nome" text={name} />
          <BoxInfo title="Email" text={email} />
        </S.TopSubContainer>
        <S.DividingLine />
        <S.BottomContainer>
          <BoxInfo title="Endereço" text={street} />
          <BoxInfo title="Número" text={number} />
          <BoxInfo title="CEP" text={formatCep()} />
        </S.BottomContainer>
      </S.FinalForm>
      <S.ButtonContainer>
        <Buttom
          onClick={() => {
            console.log('testeee');
          }}
          color="#5357B1"
          text="Novo usuário"
          width="442"
          margin="40"
        />
      </S.ButtonContainer>
    </S.FinishContainer>
  );
}
