/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StageContext from '../contexts/StageContext';
import UserContext from '../contexts/UserContext';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Routes from '../routes/Routes';

function App() {
  const [stage, setStage] = React.useState(1);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [date, setDate] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [city, setCity] = React.useState('');
  const [reference, setReference] = React.useState('');
  const [about, setAbout] = React.useState('');

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        email,
        setEmail,
        date,
        setDate,
        cep,
        setCep,
        street,
        setStreet,
        number,
        setNumber,
        district,
        setDistrict,
        city,
        setCity,
        reference,
        setReference,
        about,
        setAbout,
      }}
    >
      <StageContext.Provider value={{ stage, setStage }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </StageContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
