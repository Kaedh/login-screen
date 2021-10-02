import styled from 'styled-components'

interface InputProps  {
    placeholder: string,
}

export const InputContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

`;

export const InputWrapper = styled.div`
    height: 80%;
    width: 100%;

    padding: 3%;

    display: flex;
    align-items: center;
    justify-content: center;
    

`;

export const UserInput = styled.input<InputProps>`
    color: var(--white);
    margin-left: 5%;
    font-size: 1rem;
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;

    ::placeholder {
        opacity: 1;
        color: white;
    }

`;

export const BottomWrapper = styled.div`
    height: 20%;
    width: 100%;
    margin-top: 3%;


`;

export const BottomLine = styled.hr`
    width: 100%;
    color: var(--white);
    

`;

export const ErrorWrapper = styled.span`
    color: var(--red);
    width: 100%;
    font-size: .8rem;
    margin-left: 68%;
`;

