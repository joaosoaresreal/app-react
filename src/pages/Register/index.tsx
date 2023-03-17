import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function Register() {
    return (
        <>
            <header>
                <Title text="Criar Conta" />
            </header>
            <main>
                <form>
                    <input type="text" placeholder="Nome de Usuário" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirnmar Senha" />
                    <div className="action-buttons">
                        <Button type="primary" text="Criar Conta" />
                    </div>
                </form>
            </main>
        </>
    )
}