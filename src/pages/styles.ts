import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  background-color: var(--primary);

  padding: 20px;
  text-align: center;
  border: 2px solid var(--border);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    margin-bottom: 40px;

    h1 {
      color: var(--username);
    }

    button {
      width: 100px;
      height: 46px;
      border: 2px solid var(--border);
      background-color: var(--header);
      outline: none;

      color: var(--orange);
      cursor: pointer;
    }
  }

  nav {
    width: 100%;
    height: 60px;
    border-bottom: 2px solid var(--border);

    ul {
      width: 100%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        width: 80%;
        color: var(--primary);
        background-color: var(--link);
        padding: 10px;
        margin-left: 6px;
      }
    }
  }

  main {
    width: 100%;
    flex: 1;
    p {
      margin: 20px 0;
      color: var(--gray-dark);
    }
  }
`;

