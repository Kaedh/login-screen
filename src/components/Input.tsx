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
}

const Input = ({ placeholder, children, errorMessage } : InputProps) => 
{
    return (
        <InputContainer data-testid="custom-input" >

            <InputWrapper> 
                { children }
                <UserInput placeholder={placeholder} />
            </InputWrapper>

            <BottomWrapper> 
                <BottomLine />
                <ErrorWrapper>{errorMessage}</ErrorWrapper>
            </BottomWrapper>

        </InputContainer>
    )
}

export default Input;