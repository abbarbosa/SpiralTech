import { faEnvelope, faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactComponent as Logotype } from "../assets/logotype.svg"
import { Link } from "react-router-dom"
import { Login } from "../pages/Login"

export const Header = (props) => {


    {
        return (
            <div className={`w-[157px] h-[569px] rounded-[30px] border border-primary-purple gap-[50px] flex flex-col items-center p-5 ${props.styles}`} >
                <Logotype className="w-[90px] text-complementary-white" />
                <div className="gap-[35px] text-[20px] text-complementary-white">
                    <div>
                        <Link to="/">
                            <button className="flex justify-start items-center gap-2 hover:underline hover:decoration-primary-purple hover:underline-offset-4 ">
                                <FontAwesomeIcon icon={faHouse} />
                                <h1>Home</h1>
                            </button>
                        </Link>

                    </div>
                    <div>
                        <Link to="/nossas-solucoes" >
                            <button className="flex justify-start items-center gap-2 hover:underline hover:decoration-primary-purple hover:underline-offset-4">
                                <FontAwesomeIcon icon={faLightbulb} />
                                <h1>Soluções</h1>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contato">
                            <button className="flex justify-start items-center gap-2 hover:underline hover:decoration-primary-purple hover:underline-offset-4">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <h1>Contato</h1>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}