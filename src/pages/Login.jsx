import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonLink, ButtonLogin } from "../components/Button";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Modal from "../components/Modal"
import { useState } from "react";


export const Login = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [isOpenSecondary, setIsOpenDSecondary] = useState(false)

    return (
        <div className="flex items-center justify-center gap-[300px] h-screen bg-gradient-to-b from-primary-blue to-primary-purple">
            <div className="flex flex-col items-start">
                <Link to="/">
                    <ButtonLogin>
                        <FontAwesomeIcon icon={faHouse} />
                    </ButtonLogin>
                </Link>
                <h1 className="text-[60px] text-complementary-white mt-[60px]">Fazer login</h1>

                <p className="text-[27px] text-complementary-white mt-[50px]">
                    <span className="font-semibold">Área restrita</span> apenas <br />
                    para <span className="font-semibold">colaboradores</span> e <br />{" "}
                    <span className="font-semibold">funcionários</span>.
                </p>

                <ButtonLink
                    styles="text-[20px] text-complementary-white mt-[50px]"
                    onClick={() => { setIsOpenDSecondary(true) }}
                >
                    Primeiro acesso
                </ButtonLink>
            </div>
            <div className="flex flex-col items-start justify-start">
                <form action="" className="flex flex-col space-y-4">
                    <input
                        className="border rounded-[20px] bg-transparent border-primary-purple h-[50px] w-[303px] text-start"
                        placeholder="   Email"
                    />
                    <input
                        className="border rounded-[20px] bg-transparent border-primary-purple h-[50px] w-[303px] text-start"
                        placeholder="   Senha"
                        type="password"
                    />
                    <ButtonLink
                        styles="text-[20px] text-complementary-white text-start"
                        onClick={() => { setIsOpen(true) }}
                    >
                        Esqueceu a senha
                    </ButtonLink>
                    <Link to="/sorrisos-do-amanha">
                        <Button styles="bg-complementary-white">Entrar</Button>
                    </Link>
                </form>
            </div>

            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Esqueceu a senha?"}
                description={"Se esqueceu a sua senha, entre em contato com a equipe de segurança da empresa."}
            />

            <Modal
                isOpen={isOpenSecondary}
                setIsOpen={setIsOpenDSecondary}
                title={"Primeiro acesso?"}
                description={"Caso seja seu primeiro acesso entre em contato com a seção de recursos humanos"}
            />
        </div>
    );
};
