import { Link } from "react-router-dom"
import ColorfullLogotype from "../assets/colorfulLogotype.png"
import { Button, ButtonLogin } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
    return (
        <div className="bg-complementary-white w-screen h-[328px] border-t-2 rounded-tl-[20px] rounded-tr-[20px] flex items-center justify-between gap-[200px] px-[250px] py-[5px] text-primary-blue">
            <div className="flex gap-[40px] flex-col">
                <img src={ColorfullLogotype} className="h-[90px] w-[157px]" alt="" />
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <div className="gap-[40px] flex flex-row">
                    <a href="https://www.instagram.com/">
                        <button
                            className="text-primary-blue text-[40px] hover:bg-slate-300 rounded-full h-[50px] w-[50px] justify-center items-center flex"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>

                    </a>

                    <a href="https://www.linkedin.com/">
                        <button
                            className="text-primary-blue text-[40px] hover:bg-slate-300 rounded-full h-[50px] w-[50px] justify-center items-center flex"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>


                    </a>

                </div>
            </div>

            <div className="flex flex-col items-start text-[20px] text-primary-blue gap-[30px] justify-center">
                <Link to="/">
                    <button className="hover:border hover:underline hover:rounded hover:decoration-primary-blue">Home</button>
                </Link>
                <Link to="/nossas-solucoes">
                    <button className="hover:border hover:underline hover:rounded hover:decoration-primary-blue">Soluções</button>
                </Link>

                <Link to="/contato">
                    <button className="hover:border hover:underline hover:rounded hover:decoration-primary-blue">Contato</button>
                </Link>
            </div>

        </div>
    )
}

export const LandingFotter = () => {
return(
    <div className="bg-[#700561] w-screen h-[200px] rounded-t-[20px] justify-center items-center flex">
        <h1 className="font-semibold text-[16px] text-complementary-white font-dynapuff">Uma campanha desenvolvida por Spiral Tech - 2024 </h1>
    </div>
)
}