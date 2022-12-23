import Button from './Button';
import IconBox from './IconBox';
import Input from './Input';
import TitleText from './TitleText';
import * as S from './styles';
import iconUser from '../../assets/images/iconUser.svg';
import iconHouse from '../../assets/images/iconHouse.svg';
import iconForm from '../../assets/images/iconForm.svg';

export default function Dashboard() {
  return (
    <S.DashboardContainer>
      <TitleText text="Criação de usuário" />
      <S.IconBoxContainer>
        <IconBox icon={iconUser} text="Identificação do Usuário" />
        <IconBox icon={iconHouse} text="Endereço do usuário" />
        <IconBox icon={iconForm} text="Sobre você" />
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
      <S.ContainerButton>
        <Button color="#5357B1" text="Próximo passo" />
      </S.ContainerButton>
    </S.DashboardContainer>
  );
}
