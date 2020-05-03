import styled from 'styled-components';

export const StyledDragonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    border-bottom: 3px solid olive;
    margin-bottom: 20px;

    &:last-child {
        border-bottom: none;
    }

    .dragon-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        min-width: 50%;

        h2 {
            color: #666;
            margin: 0 0 5px 0;
        }
        h4 {
            margin: 0 25px;
        }
        p {
            margin: 5px 25px;
        }
    }
`;