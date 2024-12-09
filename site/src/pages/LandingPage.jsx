import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonLogin } from "../components/Button"
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import LandingImage from "../assets/LandingImage.png"

export const Landing = () => {
    return (
        <div className="bg-[#700561]">
            <div
                className="h-screen flex items-start bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${LandingImage})` }}
            >
                <div className="bg-complementary-white h-[125px] w-screen rounded-b-[20px] flex  gap-[50px] items-center pl-[120px] text-[#700561] font-dynapuff text-[30px] justify-between">

                    <div className=" gap-[50px] flex">
                        <button className="hover:underline hover: decoration-[#700561] underline-offset-[5px]"><h1>sobre</h1></button>
                        <button className="hover:underline hover: decoration-[#700561] underline-offset-[5px]"><h1>como ajudar</h1></button>
                        <button className="hover:underline hover: decoration-[#700561] underline-offset-[5px]"><h1>nosso jogo</h1></button>
                    </div>

                    {/* <ButtonLogin styles="border-[#700561] text-[#700561]  hover:text-[#330b2e] ">
                    <FontAwesomeIcon icon={faDoorOpen} />
                </ButtonLogin> */}
                </div>

            </div>


            <div className="bg-[#700561] h-[1500px] rounded-t-[20px] mt-[-10px ">

                <div className="flex items-center justify-between mx-[120px]">
                    <div className="text-complementary-white mt-[50px]">
                        <h1>Spiral Tech apresenta:</h1>
                        <h1 className="text-[35px] font-dynapuff">Sorrisos do Amanhã</h1>
                    </div>

                    <Button styles="border-complementary-white  text-white hover:bg-transparent">como ajudar</Button>
                </div>

                
            </div>


        </div>

    )
}