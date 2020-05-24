import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName != null ) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
     // localStorage.clear();
    } else {
      history.push('/');
    }
  }, [history] );

  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.Lista>
        { repositories.map(repository => {
          return (
            <S.ListItem key = {repository.toString()}>Repositório: { repository }</S.ListItem>
          )
        })}
      </S.Lista>
      <S.LinkHome to = "/">Retornar</S.LinkHome>
    </S.Container>
  );
}
