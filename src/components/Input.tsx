import { HiOutlineUser } from 'react-icons/hi'; 

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
}

const Input = ({ placeholder } : InputProps) => 
{
    return (
        <InputContainer >

            <InputWrapper> 
                <HiOutlineUser color={"white"} />
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