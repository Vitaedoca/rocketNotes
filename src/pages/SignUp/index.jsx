import { Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {FiMail, FiLock, FiUser} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background} from "./style";


export function SignUp() {
    return (
        <Container>
            <Background/>

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus links úteis</p>

                <h2>Crie usa conta</h2>

                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha" type="password"/>

                <Button title="Cadastrar"/>

                <Link to="/">Voltar para login</Link>
            </Form>
        </Container>
    )
}