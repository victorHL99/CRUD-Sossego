/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StageContext from '../contexts/StageContext';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Routes from '../routes/Routes';

function App() {
  const [stage, setStage] = React.useState(1);
  return (
    <StageContext.Provider value={{ stage, setStage }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StageContext.Provider>
  );
}

export default App;
