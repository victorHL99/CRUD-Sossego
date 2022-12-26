import React from 'react';

import * as S from './styles';

import Input from '../Input';

export default function Address() {
  const [cep, setCep] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [reference, setReference] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [city, setCity] = React.useState('');

  return (
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
            type="number"
            placeholder="Digite o Número da sua casa"
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
        placeholder="Digite seu Ponto de Referência"
        width="874"
        height="79"
        onInput={reference}
        onSetInput={setReference}
      />
    </S.AddressContainer>
  );
}
