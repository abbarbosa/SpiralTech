import { Button, ButtonExit, ButtonLanding, ButtonLogin } from "../components/Button";
import LandingImage from "../assets/LandingImage.png";
import carrouselImage from "../assets/carouselPhoto.png";
import gameLogo from "../assets/gameLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBowlFood,
    faCubes,
    faDoorOpen,
    faHandshakeAngle,
    faMobile,
    faPumpSoap,
    faShirt,
    faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { LandingFotter } from "../components/Footer";
import { Link } from "react-router-dom";


import { ReactComponent as Logo } from "../assets/logoCampanha.svg"
import { ReactComponent as Icon } from "../assets/icon.svg"
import VideoComponent from "../components/Video";


export const Landing = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="gap-[120px] flex flex-col w-screen">
            <div
                className="h-screen w-screen flex items-start bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${LandingImage})` }}
            >


                <div className="bg-complementary-white h-[125px] w-screen rounded-b-[20px] flex gap-[50px] items-center pl-[100px] text-[#700561] font-dynapuff text-[30px] justify-between">
                    <div className="gap-[50px] flex items-center">
                        <Icon />
                        <button
                            onClick={() => scrollToSection("about")}
                            className="hover:underline hover:decoration-[#700561] underline-offset-[5px] font-bold"
                        >
                            <h1>Sobre</h1>
                        </button>
                        <button
                            onClick={() => scrollToSection("howHelp")}
                            className="hover:underline hover:decoration-[#700561] underline-offset-[5px] font-bold"
                        >
                            <h1>Como Ajudar</h1>
                        </button>
                        <button
                            onClick={() => scrollToSection("game")}
                            className="hover:underline hover:decoration-[#700561] underline-offset-[5px] font-bold"
                        >
                            <h1>Nosso Jogo</h1>
                        </button>
                    </div>

                    <div className="mr-[50px]">
                        <Link to="/">
                            <ButtonExit />
                        </Link>

                    </div>
                </div>




            </div>


            <div id="about" className="bg-[#700561] w-screen h-[1500px] rounded-t-[20px] mt-[-150px] flex flex-col">
                <div className="flex items-center justify-center gap-[600px]">
                    <div className="text-complementary-white mt-[50px] flex flex-col items-start justify-start">
                        <h1>Spiral Tech apresenta:</h1>
                        <Logo className="h-[35px]" />
                    </div>
                    <ButtonLanding
                        styles="border-complementary-white text-[#FC8917] hover:bg-[#FC8917] hover:text-[#700561] hover:border-transparent font-bold"
                        iconStyles="text-[#FC8917] hover:text-white"
                    >
                        Como Ajudar
                    </ButtonLanding>
                </div>

                <div className="flex justify-center flex-col items-center gap-5 mt-[100px]">
                    <h1 className="font-dynapuff text-[60px] text-[#FC8917] font-bold">Fique por dentro</h1>
                    <h2 className="font-dynapuff text-[36px] text-[#FC8917] mt-[50px]">Olá colaborador</h2>
                    <p className="font-dynapuff text-[30px] text-center text-[#FC8917]">
                        Pensando em ajudar crianças carentes de Bertioga, desenvolvemos
                        <br />
                        essa campanha e contamos com vocês para trazer mais sorrisos
                        <br />
                        para o futuro.
                    </p>

                    <VideoComponent/>

                </div>
            </div>


            <div id="howHelp" className="items-center justify-center flex flex-col gap-[100px]">
                <h1 className="font-dynapuff text-[60px] text-[#700561] font-bold">
                    Como funciona a sua ajuda
                </h1>

                {/* Cards de Ajuda */}
                {[...Array(3)].map((_, index) => {
                    const cards = [
                        {
                            bgColor: "#700561",
                            textColor: "#FC8917",
                            title: "1.",
                            subtitle: "Você doa",
                            description: "Com o valor que puder",
                        },
                        {
                            bgColor: "#FC8917",
                            textColor: "#700561",
                            title: "2.",
                            subtitle: "A SpiralTech duplica",
                            description: "Nós acrescentamos mais 100% do valor arrecadado",
                        },
                        {
                            bgColor: "#700561",
                            textColor: "#FC8917",
                            title: "3.",
                            subtitle: "O retorno vem no café",
                            description: "Nós também voltamos esse valor em cápsulas de café",
                        },
                    ];
                    return (
                        <div
                            key={index}
                            className={`rounded-[20px] bg-[${cards[index].bgColor}] h-[425px] w-[1024px] flex items-center justify-center flex-col`}
                        >
                            <h1 className={`font-dynapuff text-[60px] text-[${cards[index].textColor}] font-bold`}>
                                {cards[index].title}
                            </h1>
                            <h1 className={`font-dynapuff text-[42px] text-[${cards[index].textColor}] font-bold`}>
                                {cards[index].subtitle}
                            </h1>
                            <hr
                                className={`w-[50%] border-[${cards[index].textColor}] rounded`}
                            />
                            <p
                                className={`font-dynapuff text-[30px] text-center text-[${cards[index].textColor}]`}
                            >
                                {cards[index].description}
                            </p>
                        </div>
                    );
                })}

                {/* Formas Adicionais de Ajuda */}
                {/* Formas Adicionais de Ajuda */}
                <h1 className="font-dynapuff text-[60px] text-[#700561] text-center font-bold">
                    Outras formas de ajuda que <br /> são bem-vindas
                </h1>
                <div className="flex gap-[30px]">
                    <div className="flex flex-col gap-[50px]">
                        <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faSquarePlus} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold">Divulgando a ONG</h1>
                        </div>
                        <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faBowlFood} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold">Doação de alimentos</h1>
                        </div>
                        <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faPumpSoap} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold">Doação de alimentos</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[50px] mt-[50px]">
                        <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faShirt} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold">Doação de roupas e calçados</h1>
                        </div>
                        <img className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center" src={carrouselImage} alt="" />
                        <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faMobile} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold">Doação de eletrônicos</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[50px]">
                        <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faBook} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold">Doação de livros</h1>
                        </div>
                        <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faCubes} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold">Doação de brinquedo</h1>
                        </div>
                        <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faHandshakeAngle} />
                            <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold">Voluntariado</h1>
                        </div>
                    </div>
                </div>


            </div>



            {/* Jogo */}
            <section>
                <div id="game" className="items-center justify-center flex flex-col gap-[50px]">
                    <h1 className="font-dynapuff text-[60px] text-[#700561] text-center font-bold">
                        Antes de doar <br /> preparamos uma surpresa
                    </h1>
                    <h2 className="font-dynapuff text-[36px] text-[#700561] text-center mt-[50px] font-regular">
                        Lançamos um jogo exclusivo que conecta diversão <br /> com
                        solidariedade!
                    </h2>
                    <img src={gameLogo} alt="Logo do Jogo" />
                    <h2 className="font-dynapuff text-[36px] text-[#700561] text-center mt-[50px] font-bold">
                        Aprenda enquanto se diverte
                    </h2>
                    <ButtonLanding>Jogar</ButtonLanding>
                </div>
            </section>

            <LandingFotter />
        </div>
    );
};
