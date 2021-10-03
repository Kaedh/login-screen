import { useState } from 'react';
import 
{ 
    InputContainer, 
    InputWrapper, 
    BottomWrapper, 
    BottomLine, 
    ErrorWrapper, 
    UserInput 

} from '../styles/InputStyles';

type InputProps = {
    placeholder: string,
    children?: Object,
    errorMessage?: string,
    type?: string,
}

const Input = ({ placeholder, children, errorMessage, type } : InputProps) => 
{
    const [ value, setValue ] = useState("");

    const handleInput = (e : any) => {
        const userInput = e.target.value
        return setValue(userInput)
    }

    return (
        <InputContainer data-testid="custom-input" >

            <InputWrapper> 
                { children }
                <UserInput
                    type={type} 
                    placeholder={placeholder} 
                    value={value}
                    onChange={handleInput}
                />
            </InputWrapper>

            <BottomWrapper> 
                <BottomLine />
                <ErrorWrapper>{errorMessage}</ErrorWrapper>
            </BottomWrapper>

        </InputContainer>
    )
}

export default Input;