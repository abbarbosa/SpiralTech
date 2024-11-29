import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonLogin } from "../Button"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Header } from "../components/Header"

export const Home = () => {
    return (
        <div>
            <Button> Saiba mais</Button>

            <ButtonLogin >
                <FontAwesomeIcon icon={faUser} />
            </ButtonLogin>

            <Header />
        </div>
    )
}