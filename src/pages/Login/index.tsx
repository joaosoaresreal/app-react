import { Button } from "../../components/Button";
import { Title } from "../../components/Title";


export function Login() {
    return (
        <>
            <header>
                <Title text="Bem Vindo de Volta" />
            </header>
            <main>
                <form>
                    <h2>Login</h2>

                    <input type="email" name="email" placeholder="E-mail" />
                    <input type="password" name="password" placeholder="Senha" />

                    <div className="action-buttons">
                        <Button type="primary" text="Entrar" />
                    </div>

                </form>
                
            </main>
        </>
    )
}