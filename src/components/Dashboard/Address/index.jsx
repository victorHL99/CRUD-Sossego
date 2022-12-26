import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import * as S from './styles';
import StageContext from '../../../contexts/StageContext';

import Button from '../Button';
import Input from '../Input';
import UserContext from '../../../contexts/UserContext';

export default function Address() {
  const { stage, setStage } = useContext(StageContext);
  const {
    cep,
    setCep,
    street,
    setStreet,
    reference,
    setReference,
    number,
    setNumber,
    district,
    setDistrict,
    city,
    setCity,
  } = useContext(UserContext);

  function validations() {
    const CheckIsNumber = /(\d+)| /g;

    if (!cep) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo CEP é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!cep.match(CheckIsNumber)) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo CEP deve conter apenas números!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (cep.length < 8) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo CEP deve ter no mínimo 8 números!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (cep.length > 8) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo CEP deve ter no máximo 8 números!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!street) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Rua é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (street.length < 6) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Rua deve ter no mínimo 6 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (street.length > 50) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Rua deve ter no máximo 50 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!number) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Número é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!number.match(CheckIsNumber)) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Número deve conter apenas números!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (number.length < 1) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Número deve ter no mínimo 1 número!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (number.length > 5) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Número deve ter no máximo 5 números!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!district) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Bairro é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (district.length < 3) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Bairro deve ter no mínimo 3 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (district.length > 50) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Bairro deve ter no máximo 50 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (!city) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Cidade é obrigatório!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (city.length < 3) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Cidade deve ter no mínimo 3 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    if (city.length > 50) {
      return Swal.fire({
        title: 'Erro!',
        text: 'O campo Cidade deve ter no máximo 50 caracteres!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    return stage < 3 ? setStage(stage + 1) : null;
  }

  function returnStage() {
    setStage(stage - 1);
  }

  function nextStage() {
    validations();
    return null;
  }

  return (
    <>
      <S.AddressContainer>
        <S.AddressTop>
          <Input
            label="CEP"
            type="text"
            placeholder="Digite seu CEP"
            width="407"
            height="79"
            onInput={cep}
            onSetInput={setCep}
          />
          <Input
            label="Rua"
            type="text"
            placeholder="Digite sua Rua"
            width="407"
            height="79"
            onInput={street}
            onSetInput={setStreet}
          />
        </S.AddressTop>
        <S.AddressMiddle>
          <S.AddressSubMiddle>
            <Input
              label="Número"
              type="text"
              placeholder="Digite o Número da casa "
              width="199"
              height="79"
              onInput={number}
              onSetInput={setNumber}
            />
            <Input
              label="Bairro"
              type="text"
              placeholder="Digite seu Bairro"
              width="199"
              height="79"
              onInput={district}
              onSetInput={setDistrict}
            />
          </S.AddressSubMiddle>
          <Input
            label="Cidade"
            type="text"
            placeholder="Digite sua Cidade"
            width="407"
            height="79"
            onInput={city}
            onSetInput={setCity}
          />
        </S.AddressMiddle>
        <Input
          label="Ponto de Referência"
          type="text"
          placeholder="Digite seu Ponto de Referência (Opcional)"
          width="874"
          height="79"
          onInput={reference}
          onSetInput={setReference}
        />
      </S.AddressContainer>
      <S.ContainerButton>
        <Button
          onClick={() => nextStage()}
          color="#5357B1"
          text="Próximo passo"
        />
        <Button onClick={() => returnStage()} color="#8C98A9" text="Anterior" />
      </S.ContainerButton>
    </>
  );
}
