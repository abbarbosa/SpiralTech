import { faEnvelope, faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {ReactComponent as Logotype} from "../assets/logotype.svg"

export const Header = (props) => {
    {
        return (
            <div className={`w-[157px] h-[569px] rounded-[30px] border border-primary-purple ${props.styles}`} >
                 <Logotype className="w-[90px]" />
                <div className="flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon={faHouse} />
                    <h1>Home</h1>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <h1>Soluções</h1>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h1>Contato</h1>
                </div>
            </div>
        )
    }
}