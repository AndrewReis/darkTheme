/**
 *  Esse é o arquivo que contém os temas da aplicação.
 *  O objeto "theme" tem duas chaves dentro dele: light e dark.
 * 
 * No final do arquivo contém as tipagens das variáveis. Dica: não se preocupe com tudo no inicío 
 * com o tempo e prática, tudo vai fazer sentido.
 */

export const themes = {
  light: {
    primary: '#fff',
    black: '#1b1f23',
    'gray-dark': '#24292e',
    orange: '#f9826c',
    username: '#9b9b9b',
    header: '#24292e',
    link: '#0366d6',
    border: '#e1e4e8',

  },
  dark: {
    primary: '#1D1D1D',
    black: '#c6c6c6',
    'gray-dark': '#c6c6c6',
    orange: '#fff',

    header: '#181818',
    username: '#f9826c',
    link: 'rgb(79, 140, 201)',
    border: '#343434',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
