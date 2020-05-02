import styled from 'styled-components';

export const StyledDragonsList = styled.div`
    background: #FFF;
    border: 5px solid olive;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    margin: 10px auto;
    color: olive;

    .dragon-item {
        margin-bottom: 20px;
    }

    h2 {
        margin: 0 0 5px 0;
    }
    h4 {
        margin: 0 25px;
    }
    p {
        margin: 5px 25px;
    }
`;