import Input from "../components/Input";

import { HiOutlineUser } from 'react-icons/hi'; 
import { RiLockPasswordLine } from 'react-icons/ri';

import { Container } from '../styles/SiginStyles';

const Signin: React.FC = () => {
    return (
        <Container >
            <Input placeholder="Nome de usuário" >
                <HiOutlineUser color={"white"} />
            </Input>

            <Input placeholder="Senha" >
                <RiLockPasswordLine color={"white"}  />
            </Input>
        </Container>
    )
}

export default Signin;