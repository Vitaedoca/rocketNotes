
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { FiPlus } from "react-icons/fi";
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
                <Section title="Minhas notas"/>

                <Note data={{
                    title: 'React Modal', 
                    tags: [
                        {id: '1', name:'react'},
                        {id: '2', name:'node'},
                    ]
                    }}
                    />

                <Note data={{
                    title: 'Exemplo de Middleware', 
                    tags: [
                        {id: '1', name:'express'},
                        {id: '2', name:'node'},
                    ]
                    }}
                    />                
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>

        </Container>
    );
}