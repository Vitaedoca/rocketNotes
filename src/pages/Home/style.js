import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div `

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};


`

export const Brand = styled.div `

    grid-area: brand;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

`
export const Menu = styled.ul `

    grid-area: menu;

    list-style: none;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 64px;
    gap: 24px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

`

export const Search = styled.div `

    grid-area: search;

    padding: 64px;

`
export const Content = styled.div `

    grid-area: content;

    padding: 0 64px;
    overflow-y: auto;

`
export const NewNote = styled(Link) `

    grid-area: newnote;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme}) => theme.COLORS.ORANGE};

    
`