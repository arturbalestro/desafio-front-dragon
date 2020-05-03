import styled from 'styled-components';

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    background: #FFF;
    padding: 20px;
    border: 5px solid olive;
    border-radius: 20px;

    .form-group {
        margin-bottom: 0;
    }

    label {
        color: #666;
        font-weight: bold;
    }

    input {
        color: #666;
        margin-bottom: 20px;
    }
`;