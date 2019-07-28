import Styled from 'styled-components'; 
export const ButtonContainer = Styled.button`
    text-transform: capitalize; padding: 0.2 rem 0.5rem; cursor: pointer; margin: 0.2rem 0.5rem 0;
    font-size: 1.4 rem; background: transparent; border-radius: 3px; border:  2px solid var(--lightBlue); color: var(--lightBlue);
    transition: all 0.25s ease-in-out; &:hover{background: var(--lightBlue); color:var(--mainBlue);}
    &:focus{
        outline: none;
    }
`

