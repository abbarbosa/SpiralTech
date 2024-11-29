import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeImage from "../assets/homeImage.png"
import { Button, ButtonLogin } from "../components/Button"
import { Header } from "../components/Header"
import { faLaptop, faSeedling, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons"
import { ReactComponent as Abstracao } from "../assets/abstracao.svg"
import { ReactComponent as Voltair } from "../assets/voltair.svg"
import { ReactComponent as NevesAdvogados } from "../assets/nevesAdvogados.svg"
import { ReactComponent as TechConnect } from "../assets/techConnect.svg"
import { Link } from "react-router-dom"

import VoltairMockup from "../assets/voltairmockup.png"
import GetoMockup from "../assets/getomockup.png"
import TechMockup from "../assets/techmockup.png"

export const Home = () => {
    return (
        <div className="bg-primary-blue">
            <div
                className="h-screen flex items-center"
                style={{ backgroundImage: `url(${homeImage})` }}
            >

                <div className="absolute top-4 right-4 z-10">
                    <Link to="/login">
                        <ButtonLogin>
                            <FontAwesomeIcon icon={faUser} />
                        </ButtonLogin>
                    </Link>

                </div>

                <div>
                    <div className="flex w-[100%] flex-col-reverse items-end">
                        <div className="flex gap-[20px] justify-center">
                            <Header styles="ml-[120px]" />
                            <div className="flex flex-col gap-[45px] items-start">
                                <h1 className="text-complementary-white text-[60px]">
                                    Transformando <br />
                                    <span className="font-semibold">tecnologia </span>
                                    em <br />
                                    <span className="font-semibold">solução</span>!
                                </h1>

                                <Button styles="bg-complementary-white">
                                    Saiba mais
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center flex">
                <div className=" h-[120px] w-[80%] items-center justify-center rounded-[20px] border bg-primary-blue mt-[-20px] flex gap-[70px]">
                    <Abstracao className="w-[157px]" />
                    <Voltair className="w-[157px]" />
                    <TechConnect className="w-[157px]" />
                    <NevesAdvogados className="w-[157px]" />
                </div>
            </div>

            <div className="items-center justify-center flex flex-col mt-[120px] gap-[60px]">
                <h1 className="text-[48px] font-semibold text-center text-complementary-white">Nossa missão</h1>
                <div className="relative h-[434px] w-[80%] rounded-[20px] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-complementary-white bg-opacity-20 filter blur-[17.5px]"></div>
                    <div className="relative z-10 flex justify-between items-center gap-[20px] w-[90%]">
                        {/* Primeiro bloco */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <FontAwesomeIcon icon={faSeedling} className="text-[48px] text-complementary-white" />
                            <h1 className="text-complementary-white text-[24px] font-semibold">Sustentabilidade e <br /> Ética</h1>
                            <p className="text-complementary-white text-[18px]">
                                Promover práticas responsáveis no uso da tecnologia, respeitando princípios éticos e contribuindo para a sustentabilidade.
                            </p>
                        </div>
                        <div className="w-[2px] h-[100px] bg-gray-300 mx-4"></div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <FontAwesomeIcon icon={faLaptop} className="text-[48px] text-complementary-white" />
                            <h1 className="text-complementary-white text-[24px] font-semibold">Nosso Propósito <br /> Central</h1>
                            <p className="text-complementary-white text-[18px]">
                                Transformar a experiência digital através de soluções tecnológicas inovadoras.
                            </p>
                        </div>
                        <div className="w-[2px] h-[100px] bg-gray-300 mx-4"></div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <FontAwesomeIcon icon={faThumbsUp} className="text-[48px] text-complementary-white" />
                            <h1 className="text-complementary-white text-[24px] font-semibold">Satisfação do <br /> Cliente</h1>
                            <p className="text-complementary-white text-[18px]">
                                Foco em entregar experiências que superem as expectativas, garantindo a qualidade e a eficiência das soluções.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="items-center justify-center flex flex-col mt-[120px] gap-[60px]">
                <h1 className="text-[48px] font-semibold text-center text-complementary-white">Cases de sucesso</h1>

                <div className="flex gap-[45px]">
                    <div
                        className="h-[510px] w-[336px] rounded-[20px] items-end flex justify-end"
                        style={{ backgroundImage: `url(${TechMockup})` }} >
                        <div className="h-[175px] w-[100%] bg-complementary-black rounded-bl-[20px] rounded-br-[20px] justify-center flex items-center ">
                            <p className="text-complementary-white text-[18px] text-center">Implementação de soluções de cibersegurança para uma rede social</p>
                        </div>
                    </div>

                    <div
                        className="h-[510px] w-[336px] rounded-[20px] items-end flex justify-end"
                        style={{ backgroundImage: `url(${VoltairMockup})` }} >
                        <div className="h-[175px] w-[100%] bg-complementary-black rounded-bl-[20px] rounded-br-[20px] justify-center flex items-center ">
                            <p className="text-complementary-white text-[18px] text-center">1° aplicativo de recarga para carros elétricos.</p>
                        </div>
                    </div>
                    <div
                        className="h-[510px] w-[336px] rounded-[20px] items-end flex justify-end"
                        style={{ backgroundImage: `url(${GetoMockup})` }} >
                        <div className="h-[175px] w-[100%] bg-complementary-black rounded-bl-[20px] rounded-br-[20px] justify-center flex items-center ">
                            <p className="text-complementary-white text-[18px] text-center">Desenvolvimento de uma plataforma de vendas online para uma loja de moda ESG.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="items-center justify-center flex flex-col mt-[120px] gap-[60px]">
                <h1 className="text-[48px] font-semibold text-center text-complementary-white">Premiações</h1>
            </div>

        </div>
    );
};
