/* eslint-disable no-useless-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Swal from 'sweetalert2';

import Button from './Button';
import IconBox from './IconBox';
import Input from './Input';
import TitleText from './TitleText';
import * as S from './styles';
import iconUser from '../../assets/images/iconUser.svg';
import iconHouse from '../../assets/images/iconHouse.svg';
import iconForm from '../../assets/images/iconForm.svg';

// import fieldEmptyValidate from '../../utils/validations/fieldEmptyValidate';

export default function Dashboard() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [date, setDate] = React.useState('');

  function validateName() {
    const onlyLetters = /^[a-zA-Z ]*$/;

    if (!name) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo nome é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (name.length < 10) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo nome deve ter no mínimo 10 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (name.length > 50) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo nome deve ter no máximo 50 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!name.match(onlyLetters)) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo nome deve conter apenas letras!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return true;
  }

  function validatePassword() {
    if (!password) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo senha é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (password.length < 8) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo senha deve ter no mínimo 8 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (password.length > 16) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo senha deve ter no máximo 16 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return true;
  }

  function validateConfirmPassword() {
    if (!confirmPassword) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo confirmar senha é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (confirmPassword !== password) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo confirmar senha deve ser igual ao campo senha!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return true;
  }

  function validateEmail() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo email é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (email.length > 50) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo email deve ter no máximo 50 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!email.includes('@')) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo email deve conter um @!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!email.match(emailRegex)) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo email deve ser válido!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return true;
  }

  function validateDate() {
    if (!date) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo data de nascimento é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return true;
  }

  function handleSubmit() {
    // fieldEmptyValidate(name, password, confirmPassword, email, date);
    const vName = validateName();
    const vPassword = validatePassword();
    const vConfirmPassword = validateConfirmPassword();
    const vEmail = validateEmail();
    const vDate = validateDate();

    if (vName || vPassword || vConfirmPassword || vEmail || vDate !== true) {
      return Swal.fire({
        title: 'Sucesso!',
        text: 'Identificação do usuário realizada com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }
    return null;
  }

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
          onInput={name}
          onSetInput={setName}
        />
        <S.InputSubContainer>
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            width="407"
            height="79"
            onInput={password}
            onSetInput={setPassword}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            placeholder="Digite sua senha novamente"
            width="407"
            height="79"
            onInput={confirmPassword}
            onSetInput={setConfirmPassword}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu email"
            width="407"
            height="79"
            onInput={email}
            onSetInput={setEmail}
          />
          <Input
            label="Data de nascimento"
            type="date"
            placeholder="Digite sua data de nascimento"
            width="407"
            height="79"
            format="dd/MM/yyyy"
            onInput={date}
            onSetInput={setDate}
          />
        </S.InputSubContainer>
      </S.InputContainer>
      <S.ContainerButton>
        <Button
          onClick={() => handleSubmit()}
          color="#5357B1"
          text="Próximo passo"
        />
      </S.ContainerButton>
    </S.DashboardContainer>
  );
}
