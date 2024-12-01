import { Footer } from "../components/Footer"
import SolutionsImage from "../assets/SolutionsImage.png"
import { Header } from "../components/Header"
import { Link } from "react-router-dom"
import { ButtonLogin } from "../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export const Solutions = (props) => {
    return (
        <div className="bg-primary-blue">

            <div className="absolute top-4 right-4 z-10">
                <Link to="/login">
                    <ButtonLogin>
                        <FontAwesomeIcon icon={faUser} />
                    </ButtonLogin>
                </Link>

            </div>

            <div
                className="h-screen flex items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SolutionsImage})` }}
            >
                <div className="flex w-[100%] flex-col-reverse items-start">
                    <div className="flex gap-[20px] justify-center">
                        <Header styles="ml-[120px]" />

                        <div className="flex flex-col gap-[45px] items-start">
                            <h1 className="text-complementary-white text-[60px]">
                                Conheça mais <br /> sobre
                                <span className="font-semibold"> nossos <br /> serviços </span>
                            </h1>

                            <p className="text-[27px] text-complementary-white">Sua <span className="font-semibold">jornada digital</span> <br />começa com as <br /><span className="font-semibold">nossas soluções</span> </p>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}