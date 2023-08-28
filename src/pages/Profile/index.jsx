import { FiArrowLeft} from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";


export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img 
                    src="https://github.com/Vitaedoca.png" 
                    alt="Foto do usuário" 
                />

                    <label htmlFor="avatar">

                        <FiCamera/>

                        <input 
                            id="avatar" 
                            type="file" 
                        />
                    </label>
                </Avatar>

                <Input
                    icon={FiUser}
                    placeholder="Nome"
                />

                <Input
                    icon={FiMail}
                    placeholder="E-mail"
                />

                <Input
                    icon={FiLock}
                    placeholder="Senha atual"
                    type="password"
                />

                <Input
                    icon={FiLock}
                    placeholder="Nova senha"
                    type="password"
                />

                <Button title="Salvar"/>

            </Form>
        </Container>
    )
}