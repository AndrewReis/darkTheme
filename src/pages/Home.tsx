import React from 'react';
import { ThemeName } from '../styles/themes';

import { Container } from './styles';

/*
  Interface criada para passar os atributos no arquivo App.tsx
*/

interface HomeProps {
  themeName: ThemeName;
  setThemeName: (newTheme: ThemeName) => void;
}

const Home: React.FC<HomeProps> = ({ themeName, setThemeName }) => {

  /*
    Função responsável por controlar a mudança de tema. Essa função sempre
      sera chama quando clicar no botão.

      Tem uma logica bem simples: Se o themeName for light então mude para dark.
  */
  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }


  return (
    <Container>
      <header>
        <h1>Dark Mode Example</h1>
        <button onClick={toggleTheme} >Ativar DarkTheme</button>
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta modi libero odit sequi facilis est, qui dolore velit quod,
          esse hic ducimus ab dignissimos minus reiciendis nam vero impedit
          similique.
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta modi libero odit sequi facilis est, qui dolore velit quod,
          esse hic ducimus ab dignissimos minus reiciendis nam vero impedit
          similique.
        </p>
      </main>
    </Container>
  );
}

export default Home;
