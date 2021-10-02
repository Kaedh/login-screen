import Input from "../components/Input";

import { Container } from '../styles/SiginStyles';

const Signin: React.FC = () => {
    return (
        <Container >
            <Input placeholder="Nome de usuário" />
            <Input placeholder="Senha" />
        </Container>
    )
}

export default Signin;