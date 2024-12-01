import { Link } from "react-router-dom"
import { Button, ButtonLink, ButtonLogin } from "../components/Button"
import { Header } from "../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "../components/Footer"

export const Contact = () => {
    return (
        <div className="bg-gradient-to-b from-primary-blue to-primary-purple h-screen flex flex-col">
            <div className="flex-grow flex flex-row items-center gap-[190px]">
                <div className="absolute top-4 right-4 z-10">
                    <Link to="/login">
                        <ButtonLogin>
                            <FontAwesomeIcon icon={faUser} />
                        </ButtonLogin>
                    </Link>
                </div>
                <div>
                    <div className="flex gap-[20px] justify-center mt-[50px]">
                        <Header styles="ml-[120px]" />
                        <div>
                            <h1 className="font-semibold text-[60px] text-complementary-white">Se interessou?</h1>
                            <p className="text-[27px] text-complementary-white">
                                Entre em contato pelo <br /> e-mail ou telefone <br /> abaixo ou deixe sua <br /> mensagem.
                            </p>
                            <div className="flex gap-[20px] items-center mt-[60px]">
                                <FontAwesomeIcon className="text-[20px] text-complementary-white" icon={faEnvelope} />
                                <p className="text-complementary-white text-[27px]">E-mail</p>
                            </div>
                            <p className="text-primary-purple font-semibold text-[18px]">contatospiraltech@gmail.com</p>
                            <div className="flex gap-[20px] items-center mt-[60px]">
                                <FontAwesomeIcon className="text-[20px] text-complementary-white" icon={faPhone} />
                                <p className="text-complementary-white text-[27px]">Telefone</p>
                            </div>
                            <p className="text-primary-purple font-semibold text-[18px]">+55 11 940028922</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form action="" className="flex flex-col space-y-4">
                        <input
                            className="border rounded-[20px] bg-transparent border-primary-purple h-[50px] w-[303px] text-start"
                            placeholder="   Digite seu nome"
                        />
                        <input
                            className="border rounded-[20px] bg-transparent border-primary-purple h-[50px] w-[303px] text-start"
                            placeholder="    Seu melhor e-mail"
                        />
                        <input
                            className="border rounded-[20px] bg-transparent border-primary-purple h-[50px] w-[303px] text-start"
                            placeholder="   Seu telefone"
                        />
                        <input
                            className="border rounded-[20px] bg-transparent border-primary-purple h-[237px] w-[303px] text-start"
                            placeholder="   Deixe sua mensagem"
                        />
                        <Link to="/sorrisos-do-amanha">
                            <Button styles="bg-complementary-white">Enviar</Button>
                        </Link>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};
