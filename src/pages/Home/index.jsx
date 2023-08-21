
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/input";
import {FiPlus} from "react-icons/fi";
export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos" $isactive/>
                </li>
                <li>
                    <ButtonText title="Frontend"/>
                </li>
                <li>
                    <ButtonText title="Node"/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" />
            </Search>

            <Content>
            
            </Content>

            <NewNote>
                <FiPlus/>
                Criar Nota
            </NewNote>

        </Container>
    );
}