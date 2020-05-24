import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import './style.css'


export default function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map( (repository) => {
        return ( 
          repositoriesName.push(repository.name)
        )
      });
      localStorage.setItem('repositoriesName', 
        JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }
  return (
    <S.Container> 
      <S.Title>Consulta de Repositórios</S.Title>
        <S.Content>
            <S.Input className = "usuarioInput" placeHolder="Usuário"
            value = {usuario} onChange = {e => setUsuario(e.target.value)}/>
            <S.Button type = "button" onClick = {handlePesquisa}>
              Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Nome do usuário foi digitado errado, ou não existe.</S.ErrorMsg> : ''}
    </S.Container>
  );
}

