import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: 'Droid serif', 'Open Sans', sans-serif;
    color: #6666ff;
    text-shadow: 1px 1px 1px #082b34;
    &:hover{
        color: #ff6600; 
        text-decoration: none;
    }
`;

export const Lista = styled.ul `
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li `
    border: 1px solid #fff;
    background: #1919ff;
    color: #fff;
    padding: .5rem;
    border-radius: 7px;
`;

export const LinkHome = styled(Link) `
    display: block;
    width: 5rem;
    text-align: center;
    margin: 2rem auto;
    background-color: blue;
    padding: .5rem 0;
    color: #fff;
    font-weight: bold;
    border-radius: 0 .5rem;
    text-decoration: none;
`;