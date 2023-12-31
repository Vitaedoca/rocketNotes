import { Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {FiMail, FiLock} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background} from "./style";


export function Signin() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha" type="password"/>

                <Button title="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background/>
        </Container>
    )
}