import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import GlobalStyles from './styles/globalStyles';
import { ThemeName, themes } from './styles/themes';

function App() {

  /**
   * O useState armazenara no estado da aplicação o tema atual. 
   * Aplicação será iníciada no light.
   */
  const [themeName, setThemeName] = useState<ThemeName>('light');

  /**
   * currenteTheme receberá o Objeto "themes" criado no arquivo themes.ts  na pasta styles.
   * Após isso o seu index será o tema armazenado no useState: "themes[themeName] => themes[light]".
   */
  const currentTheme = themes[themeName];


  /**
   * ThemeProvider é um componente exportado da biblioteca styled-components.
   * Ele será responsável por repassar as propriedades para o Home. E apartir disto o componente Home
   * tera acesso a os temas. 
  */

  return (
    <ThemeProvider theme={currentTheme} >
      <Home themeName={themeName} setThemeName={setThemeName} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
