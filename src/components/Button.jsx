import { faArrowRight, faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const Button = (props) => {
    return (
        <button className={`flex justify-center items-center rounded-[30px] border border-[#937AFA] text-primary-purple h-[50px] w-[306px] hover:bg-primary-purple hover:text-white  ${props.styles}`}>
            <div className="flex items-center justify-center gap-5 ">
                {props.children}
                <div className={`flex items-center justify-center -rotate-45 border rounded-full  border-primary-purple h-9 w-9 text-4 bg-transparent ${props.styles}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </button>
    )
}


export const ButtonBg = (props) => {
    return (
        <button className="flex items-center justify-center gap-5 text-complementary-white bg-[#937AFA] h-[50px] w-[306px] rounded-[20px]  ">
            {props.children}
            <div className={`flex items-center justify-center -rotate-45 border rounded-full  bg-primary-purple h-9 w-9 text-4  ${props.styles}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </button>
    )
}

export const ButtonLanding = (props) => {
    return (
        <button
            className={`flex justify-center items-center rounded-[30px] border border-[#700561] text-[#700561] h-[50px] w-[306px] hover:bg-[#700561] hover:text-white ${props.styles}`}
        >
            <div className="flex items-center justify-center gap-5">
                {props.children}
                <div
                    className={`flex items-center justify-center -rotate-45 border rounded-full hover:border-transparent border-[#700561] h-9 w-9 bg-transparent ${props.iconStyles}`}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </button>
    );
};


export const ButtonExit = (props) => {
    return (
        <div>
            <button className={`rounded-full border-[#700561]  text-[#700561]  border w-12 h-12  hover:text-[#3f2a3c] ${props.styles}`
            }>
                <FontAwesomeIcon icon={faDoorOpen} />
            </button>
        </div>
    )
}


export const ButtonLogin = (props) => {
    return (
        <button className={`rounded-full border-primary-purple border w-12 h-12 text-complementary-white hover:text-primary-purple ${props.styles}`}>
            {props.children}
        </button>
    )
}

export const ButtonLink = (props) => {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className={`text-[20px] underline decoration-primary-purple ${props.styles}`}>
            {props.children}
        </button>
    )
}