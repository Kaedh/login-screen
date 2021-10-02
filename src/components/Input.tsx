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
}

const Input = ({ placeholder, children,  } : InputProps) => 
{
    return (
        <InputContainer data-testid="custom-input" >

            <InputWrapper> 
                { children }
                <UserInput placeholder={placeholder} />
            </InputWrapper>

            <BottomWrapper> 
                <BottomLine />
                <ErrorWrapper></ErrorWrapper>
            </BottomWrapper>

        </InputContainer>
    )
}

export default Input;