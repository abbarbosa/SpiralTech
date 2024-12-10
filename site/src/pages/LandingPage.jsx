import { Button, ButtonLanding, ButtonLogin } from "../components/Button"
import LandingImage from "../assets/LandingImage.png"
import carrouselImage from "../assets/carouselPhoto.png"
import gameLogo from "../assets/gameLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faBowlFood, faCubes, faHandshakeAngle, faMobile, faPumpSoap, faShirt, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { LandingFotter } from "../components/Footer"

export const Landing = () => {
    return (
        <div className="gap-[120px] flex flex-col">
            <div
                className="h-screen flex items-start bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${LandingImage})` }}
            >
                <div className="bg-complementary-white h-[125px] w-screen rounded-b-[20px] flex  gap-[50px] items-center pl-[120px] text-[#700561] font-dynapuff text-[30px] justify-between">

                    <div className=" gap-[50px] flex">
                        <button className="hover:underline hover: decoration-[#700561] underline-offset-[5px] font-bold"><h1>sobre</h1></button>
                        <button className="hover:underline hover: decoration-[#700561] underline-offset-[5px] font-bold"><h1>como ajudar</h1></button>
                        <button className="hover:underline hover: decoration-[#700561] underline-offset-[5px] font-bold"><h1>nosso jogo</h1></button>
                    </div>

                    {/* <ButtonLogin styles="border-[#700561] text-[#700561]  hover:text-[#330b2e] ">
                    <FontAwesomeIcon icon={faDoorOpen} />
                </ButtonLogin> */}
                </div>

            </div>

            {/* sobre */}
            <section>
                <div className="bg-[#700561] h-[1500px] rounded-t-[20px] mt-[-150px]  flex flex-col">

                    <div className="flex items-center justify-between mx-[120px]">
                        <div className="text-complementary-white mt-[50px]">
                            <h1>Spiral Tech apresenta:</h1>
                            <h1 className="text-[35px] font-dynapuff">Sorrisos do Amanhã</h1>
                        </div>

                        <ButtonLanding styles="border-complementary-white text-white hover:bg-[#FC8917] hover:text-[#700561] hover:border-transparent font-bold">como ajudar</ButtonLanding>
                    </div>

                    <div className=" flex justify-center flex-col items-center gap-5 ">
                        <h1 className="font-dynapuff text-[60px] text-[#FC8917] font-bold">Fique por dentro</h1>

                        <h2 className="font-dynapuff text-[36px] text-[#FC8917] mt-[50px]">Olá colaborador</h2>

                        <p className="font-dynapuff text-[30px]  font-regular text-center text-[#FC8917]">pensando em ajudar crianças carentes de Bertioga desenvolvemos <br /> essa campanha e contamos com vocês para trazer mais sorrisos para o futuro</p>
                    </div>


                </div>
            </section>


            {/* como ajudar */}
            <section>
                <div className="items-center justify-center flex flex-col gap-[100px]">
                    <h1 className="font-dynapuff text-[60px] text-[#700561] font-bold">como  funciona a sua ajuda</h1>

                    <div className="rounded-[20px] bg-[#700561] h-[425px] w-[1024px] flex items-center justify-center flex-col">
                        <h1 className="font-dynapuff text-[60px] text-[#FC8917] font-bold">1.</h1>
                        <h1 className="font-dynapuff text-[42px] text-[#FC8917] font-bold">Você doa</h1>
                        <hr className="w-[50%] border-[#FC8917] rounded " />
                        <p className="font-dynapuff text-[30px]  font-regular text-center text-[#FC8917]">com o valor que puder</p>

                    </div>
                    <div className="rounded-[20px] bg-[#FC8917] h-[425px] w-[1024px] flex items-center justify-center flex-col">
                        <h1 className="font-dynapuff text-[60px] text-[#700561] font-bold">2.</h1>
                        <h1 className="font-dynapuff text-[42px] text-[#700561] font-bold">A SpiralTech duplica</h1>
                        <hr className="w-[50%] border-[#700561] rounded " />
                        <p className="font-dynapuff text-[30px]  font-regular text-center text-[#700561]">Nós acrescentamos mais 100% <br /> do valor arrecadado</p>
                    </div>
                    <div className="rounded-[20px] bg-[#700561] h-[425px] w-[1024px] flex items-center justify-center flex-col">
                        <h1 className="font-dynapuff text-[60px] text-[#FC8917] font-bold">3.</h1>
                        <h1 className="font-dynapuff text-[42px] text-[#FC8917] font-bold">O retorno  vem no café</h1>
                        <hr className="w-[50%] border-[#FC8917] rounded" />
                        <p className="font-dynapuff text-[30px]  font-regular text-center text-[#FC8917]">Nós também voltamos esse valor <br /> em capsulas de café </p>
                    </div>
                    <div className="items-center justify-center flex flex-col gap-[100px]">
                        <h1 className="font-dynapuff text-[60px] text-[#700561] text-center font-bold">Outras formas de ajuda que <br /> são bem vindas</h1>
                        <div className="flex gap-[30px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faSquarePlus} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold" >Divulgando a ONG</h1>
                                </div>
                                <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faBowlFood} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold" >Doação de alimentos</h1>

                                </div>
                                <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center ">
                                    <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faPumpSoap} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold" >Doação de alimentos</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[50px] mt-[50px]">
                                <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faShirt} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold" >Doação de roupas e calçados</h1>
                                </div>
                                <img className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center" src={carrouselImage} alt="" />
                                <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faMobile} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold" >Doação de eletrônicos</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[50px]">
                                <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faBook} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold" >Doação de livros</h1>
                                </div>
                                <div className="w-[333px] h-[336px] bg-[#FC8917] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#700561] text-[60px]" icon={faCubes} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#700561] font-bold" >Doação de brinquedo</h1>
                                </div>
                                <div className="w-[333px] h-[336px] bg-[#700561] rounded-[20px] flex flex-col items-center justify-center">
                                    <FontAwesomeIcon className="text-[#FC8917] text-[60px]" icon={faHandshakeAngle} />
                                    <h1 className="font-dynapuff text-[42px] text-center text-[#FC8917] font-bold" >Voluntariado </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* jogo */}
            <section>
                <div className="items-center justify-center flex flex-col gap-[50px]">
                    <h1 className="font-dynapuff text-[60px] text-[#700561] text-center font-bold">antes de doar <br /> preparamos uma surpresa</h1>
                    <h2 className="font-dynapuff text-[36px] text-[#700561] text-center mt-[50px] font-regular">lançamos um jogo exclusivo que conecta diversão <br />    com solidariedade!</h2>

                    <img src={gameLogo} alt="" />

                    <h2 className="font-dynapuff text-[36px] text-[#700561] text-center mt-[50px] font-bold">Aprenda enquanto se diverte</h2>

                    <ButtonLanding>jogar</ButtonLanding>

                </div>
            </section>

            <LandingFotter/>
        </div >
        

    )
}