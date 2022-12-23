import IconBox from './IconBox';
import Input from './Input';
import TitleText from './TitleText';
import * as S from './styles';

export default function Dashboard() {
  return (
    <S.DashboardContainer>
      <TitleText text="Criação de usuário" />
      <S.IconBoxContainer>
        <IconBox text="Identificação do Usuário" />
        <IconBox text="Endereço do usuário" />
        <IconBox text="Sobre você" />
      </S.IconBoxContainer>
      <S.InputContainer>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          width="874"
          height="79"
        />
        <S.InputSubContainer>
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            width="407"
            height="79"
          />
          <Input
            label="Confirmar Senha"
            type="password"
            placeholder="Digite sua senha novamente"
            width="407"
            height="79"
          />
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu email"
            width="407"
            height="79"
          />
          <Input
            label="Data de nascimento"
            type="date"
            placeholder="Digite sua data de nascimento"
            width="407"
            height="79"
          />
        </S.InputSubContainer>
      </S.InputContainer>
    </S.DashboardContainer>
  );
}
