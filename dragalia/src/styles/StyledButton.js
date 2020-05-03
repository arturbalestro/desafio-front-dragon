import styled from 'styled-components';

export const StyledButton = styled.div`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    border-radius: 5px;
    border: none;
    color: white;
    background: #666;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    text-align: center;

    &.options {
        margin: 0 10px;
        padding: 10px;
        font-size: 0.8rem;
    }
`;