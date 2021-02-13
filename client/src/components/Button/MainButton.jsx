import styled from 'styled-components';

export const MainButton = styled.button`
    display: inline-block;
    background: var(--main-blue);
    text-transform: uppercase;
    border: none;
    outline: none;
    color: var(--main-grey);
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &hover {
        background: #d30913;

`;