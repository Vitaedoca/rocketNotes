import styled from "styled-components";

export const Container = styled.button`

    width: 100%;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    padding: 16px 22px;
    margin-bottom: 16px;
    display: flex;
    align-items: start;
    flex-direction: column;
    border-radius: 10px;


    > footer {
        margin-top: 24px;
    }

`