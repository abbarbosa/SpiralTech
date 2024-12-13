import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeImage from "../assets/homeImage.png"
import { Button, ButtonLogin } from "../components/Button"
import { Header } from "../components/Header"
import { faLaptop, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons"
import { ReactComponent as Abstracao } from "../assets/abstracao.svg"
import { ReactComponent as Voltair } from "../assets/voltair.svg"
import { ReactComponent as NevesAdvogados } from "../assets/nevesAdvogados.svg"
import { ReactComponent as TechConnect } from "../assets/techConnect.svg"
import { Link } from "react-router-dom"

import VoltairMockup from "../assets/Group 49.png"
import GetoMockup from "../assets/Group 50.png"
import TechMockup from "../assets/Group 51.png"

import CodeImage from "../assets/codeImage.png"
import LightImage from "../assets/lightImage.png"
import DigitalImage from "../assets/DigitalImage.png"
import { Footer } from "../components/Footer"

import { ReactComponent as Like } from "../assets/like.svg"
import { ReactComponent as Computer } from "../assets/computer.svg"
import { ReactComponent as Plant } from "../assets/plant.svg"


export const Home = () => {



    return (
        <div className="bg-primary-blue">
            <div
                className="h-screen flex items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${homeImage})` }}
            >
                <div className="absolute top-4 right-4 z-10">
                    <Link to="/login">
                        <ButtonLogin>
                            <FontAwesomeIcon icon={faUser} />
                        </ButtonLogin>
                    </Link>
                </div>


                <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-16">

                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                        <Header />
                    </div>

                    <div className="flex flex-col gap-[45px] items-center md:items-end w-full md:w-auto md:ml-8">
                        <h1 className="text-complementary-white text-[40px] md:text-[60px] text-center md:text-end">
                            Transformando <br />
                            <span className="font-semibold">tecnologia </span>
                            em <br />
                            <span className="font-semibold">solução</span>!
                        </h1>
                        <Link to="/nossas-solucoes">
                            <Button styles="bg-complementary-white">
                                Saiba mais
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>



            <div className="items-center justify-center flex">
                <div className="md:block hidden">
                    <div className=" items-center justify-center rounded-[20px] border h-[120px] w-[1000px] bg-primary-blue mt-[-20px] gap-[70px] flex">
                        <Abstracao className="w-[157px]" />
                        <Voltair className="w-[157px]" />
                        <TechConnect className="w-[157px]" />
                        <NevesAdvogados className="w-[157px]" />
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center mt-[120px] gap-[60px] px-4 md:px-8">
                <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-center text-complementary-white">
                    Nossa missão
                </h1>
                <div className="relative h-auto md:h-[434px] w-full max-w-[1200px] rounded-[20px] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-complementary-white bg-opacity-20 filter blur-[17.5px]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-[20px] w-full px-4 md:px-8">


                        <div className="flex flex-col items-center justify-center text-center">
                            <Plant className="h-[40px] sm:h-[50px] md:h-[55px]" />
                            <h1 className="text-complementary-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
                                Sustentabilidade e <br /> Ética
                            </h1>
                            <p className="text-complementary-white text-[14px] sm:text-[16px] md:text-[18px]">
                                Promover <span className="font-semibold">práticas <br /> responsáveis</span> no uso da <br /> tecnologia, respeitando <span className="font-semibold">princípios éticos</span> e contribuindo para a <span className="font-semibold">sustentabilidade</span>.
                            </p>
                        </div>


                        <div className="hidden md:block w-[2px] h-[100px] bg-gray-300"></div>


                        <div className="flex flex-col items-center justify-center text-center">
                            <Computer className="w-[50px] sm:w-[55px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[55px]" />
                            <h1 className="text-complementary-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
                                Nosso Propósito <br /> Central
                            </h1>
                            <p className="text-complementary-white text-[14px] sm:text-[16px] md:text-[18px]">
                                Transformar a <span className="font-semibold">experiência digital</span> através de <span className="font-semibold">soluções tecnológicas</span> inovadoras.
                            </p>
                        </div>


                        <div className="hidden md:block w-[2px] h-[100px] bg-gray-300"></div>


                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-complementary-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
                                Satisfação do <br /> Cliente
                            </h1>
                            <p className="text-complementary-white text-[14px] sm:text-[16px] md:text-[18px]">
                                Foco em <span className="font-semibold">entregar <br /> experiências</span> que superem as <br /> <span className="font-semibold">expectativas</span>, garantindo a <span className="font-semibold">qualidade</span> e a <span className="font-semibold">eficiência</span> das soluções.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="items-center justify-center flex flex-col mt-[120px] gap-[60px]">
                <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-center md:text-left text-complementary-white">Cases de sucesso</h1>

                <div className="flex flex-wrap gap-[30px] justify-center lg:justify-start">
                    <img src={VoltairMockup} className="h-[650px]" alt="" />
                    <img src={GetoMockup} className="h-[650px]" alt="" />
                    <img src={TechMockup} className="h-[650px]" alt="" />
                </div>
            </div>


            <div className="items-center justify-center flex flex-col mt-[120px] gap-[60px]">
                <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-center md:text-left text-complementary-white">Premiações</h1>

                <div
                    className="h-[342px] w-[1040px] rounded-[20px]  items-start flex justify-center pl-[100px] flex-col gap-10"
                    style={{ backgroundImage: `url(${CodeImage})` }} >
                    <h1 className="text-[28px] font-semibold text-complementary-white">Prêmio Segurança Digital do Ano</h1>
                    <p className="text-complementary-white text-[18px]">Concedido a empresas que <br /> lideram na implementação <br /> de práticas exemplares em  <br /> cibersegurança e proteção <br /> de dados.</p>
                    <p className="text-complementary-white text-[18px]">2017 - 2019 - 2023 - 2024</p>
                </div>

                <div
                    className="h-[342px] w-[1040px] rounded-[20px]  items-start flex justify-center pl-[100px] flex-col gap-10"
                    style={{ backgroundImage: `url(${LightImage})` }} >
                    <h1 className="text-[28px] font-semibold text-complementary-white">Prêmio Sustentabilidade Tecnológica</h1>
                    <p className="text-complementary-white text-[18px]">Reconhecimento por integrar  <br /> práticas sustentáveis em <br /> seus serviços, como  <br /> redução de consumo <br /> energético em data centers.</p>
                    <p className="text-complementary-white text-[18px]">2014 - 2017 - 2019 - 2024</p>
                </div>

                <div
                    className="h-[342px] w-[1040px] rounded-[20px]  items-start flex justify-center pl-[100px] flex-col gap-10"
                    style={{ backgroundImage: `url(${DigitalImage})` }} >
                    <h1 className="text-[28px] font-semibold text-complementary-white">Prêmio Líder em Transformação Digital</h1>
                    <p className="text-complementary-white text-[18px]">Concedido por realizar <br /> projetos bem-sucedidos de <br /> transformação digital em   <br /> diferentes indústrias,  <br /> garantindo maior eficiência e <br /> resultados para os clientes.</p>
                    <p className="text-complementary-white text-[18px]">2018 - 2020</p>

                </div>

                <div className="items-center justify-center flex flex-col mt-[120px] gap-[60px] mb-[120px]">
                    <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-center md:text-left text-complementary-white">Se interessou?</h1>
                    <Button>Entrar em contato</Button>
                </div>
            </div>

            <Footer />

        </div>
    );
};
