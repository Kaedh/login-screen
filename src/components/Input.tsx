import { InputContainer, BottomLine, ErrorWrapper } from '../styles/InputStyles';
import { HiOutlineUser } from 'react-icons/hi'; 

const Input: React.FC = () => 
{
    return (
        <InputContainer >
            <HiOutlineUser />
            <input type="text" placeholder={"Nome de usuário"} />
            <BottomLine />
            <ErrorWrapper />
        </InputContainer>
    )
}

export default Input;