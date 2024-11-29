import { Button } from "../components/Button"

export const Login = (props) => {
    return (
        <div >
            <p>Login</p>

            <form action="" className="flex flex-col space-y-4">
                <input
                    className="border rounded-[20px] border-primary-purple h-[50px] w-[303px] text-center"
                    placeholder="digite seu e-mail"
                />
                <input
                    className="border rounded-[20px] border-primary-purple h-[50px] w-[303px] text-center"
                    placeholder="digite sua senha"
                    type="password"
                />

                <Button>Entrar</Button>
            </form>
        </div>
    )
}