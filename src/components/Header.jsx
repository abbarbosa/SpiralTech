import { faEnvelope, faHouse, faLightbulb, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logotype } from "../assets/logotype.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`w-full lg:w-[157px] h-auto lg:h-[569px] lg:rounded-[30px] lg:border border-primary-purple flex flex-col lg:flex-col items-start lg:items-center p-5 ${props.styles}`}
        >
            
            <div className="w-full flex items-center justify-between lg:flex-col lg:items-center lg:gap-5 mb-4 lg:mb-0">
                <Logotype className="w-[90px] text-complementary-white" />
                <button
                    className="block lg:hidden text-complementary-white text-2xl"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

           
            <div
                className={`${
                    isOpen || "hidden"
                } w-full lg:flex flex flex-col pt-[20px] gap-[35px] text-[20px] text-complementary-white`}
            >
                <div>
                    <Link to="/">
                        <button className="flex items-center gap-2 hover:underline hover:decoration-primary-purple hover:underline-offset-4">
                            <FontAwesomeIcon icon={faHouse} />
                            <h1>Home</h1>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/nossas-solucoes">
                        <button className="flex items-center gap-2 hover:underline hover:decoration-primary-purple hover:underline-offset-4">
                            <FontAwesomeIcon icon={faLightbulb} />
                            <h1>Soluções</h1>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/contato">
                        <button className="flex items-center gap-2 hover:underline hover:decoration-primary-purple hover:underline-offset-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h1>Contato</h1>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

