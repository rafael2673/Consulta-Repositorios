import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: 'Droid serif', 'Open Sans', sans-serif;
    color: #6666ff;
    position: absolute;
    top: 12rem;
    text-shadow: 1px 1px 1px #082b34;
    &:hover{
        color: #ff6600; 
        text-decoration: none;
    }
`;
export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div `
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    width: 32rem;
    height: 3rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    font-size: 16px;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    width: 5rem;
    height: 3.1rem;
    margin-top: .5px;
    border: 1px solid #000;
    background: blue;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    text-shadow: 1px 1px 2px #000;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.85rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;
