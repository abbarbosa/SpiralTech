import { Footer } from "../components/Footer"
import SolutionsImage from "../assets/SolutionsImage.png"
import { Header } from "../components/Header"
import { Link } from "react-router-dom"
import { Button, ButtonLogin } from "../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import { ReactComponent as Code } from "../assets/Code Learner.svg"
import { ReactComponent as Security } from "../assets/Security Shield.svg"
import { ReactComponent as SocialMedia } from "../assets/Social Media.svg"
import { ReactComponent as Inventing } from "../assets/Inventing.svg"
import { ReactComponent as AnalyseData } from "../assets/Analyze Data.svg"

import { ReactComponent as MachineLearning } from "../assets/Machine Learning.svg"

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
            <div >
                <div className="flex items-center justify-center gap-[180px]">
                    <div className="my-[100px] flex flex-col justify-center items-center">
                        <Code className="h-[140px]" />
                        <h1 className="text-[27px] font-light text-complementary-white">Desenvolvimento de Software</h1>
                        <p className="text-complementary-white text-center"> <span className="font-semibold">Processo de criação</span>, <br /> <span className="font-semibold">teste </span> e <span className="font-semibold" >manutenção </span>de <br /> <span className="font-semibold">aplicativos</span> , sistemas e <span className="font-semibold">plataformas</span>. <br /> Envolve desde a <span className="font-semibold">concepação</span > da <br />ideia até a <span className="font-semibold"> programação</span>.</p>
                    </div>
                    <div className="my-[100px] flex flex-col justify-center items-center">
                        <Security className="h-[140px]" />
                        <h1 className="text-[27px] font-light text-complementary-white">Cibersegurança</h1>
                        <p className="text-complementary-white text-center">Envolve a  <span className="font-semibold">proteção</span> <br /> de sistemas, redes e <span className="font-semibold"> dados <br /> contra ataques </span> <br /> cibernéticos e  <span className="font-semibold">acessos</span> <br />não autorizados.</p>
                    </div>
                    <div className="my-[100px] flex flex-col justify-center items-center">
                        <SocialMedia className="h-[140px]" />
                        <h1 className="text-[27px] font-light text-complementary-white  text-center
                    ">Consultoria <br />em TI</h1>
                        <p className="text-complementary-white text-center">Serviço <span className="font-semibold">especializado</span> que <br />  <span className="font-semibold"> auxilia empresas </span> na <br /> escolha e <br /> <span className="font-semibold">implementação</span> de  <br /><span className="font-semibold">soluções tecnológicas</span>.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-[180px]">
                    <div className="my-[100px] flex flex-col justify-center items-center">
                        <Inventing className="h-[140px]" />
                        <h1 className="text-[27px] font-light text-complementary-white">Gestão de Projetos</h1>
                        <p className="text-complementary-white text-center"> <span className="font-semibold">Planejamento</span>, execução  <br />  e
                            <span className="font-semibold"> monitoramento </span> de  <br /> atividades para<span className="font-semibold" > alcançar <br /> metas
                            </span> dentro de  <span className="font-semibold">prazos </span> e <br /><span className="font-semibold" >orçamentos</span></p>
                    </div>

                    <div className="my-[100px] flex flex-col justify-center items-center">
                        <AnalyseData className="h-[140px]" />
                        <h1 className="text-[27px] font-light text-complementary-white text-center">Análise  <br />de Dados</h1>
                        <p className="text-complementary-white text-center"><span className="font-semibold">Processo</span> de coleta, <br /> <span className="font-semibold"> processamento</span> e <br /><span className="font-semibold">interpretação</span> de dados <br /> para <span className="font-semibold">gerar insights</span> que  <br /><span className="font-semibold">embasam</span> desições <br /> <span className="font-semibold">estratégicas</span>
                        </p>
                    </div>

                    <div className="my-[100px] flex flex-col justify-center items-center">
                        <MachineLearning className="h-[140px]" />
                        <h1 className="text-[27px] font-light text-complementary-white text-center">Inteligência <br /> Artificial</h1>
                        <p className="text-complementary-white text-center">Área da<span className="font-semibold">tecnologia</span> que <br /> <span className="font-semibold">desenvolve sistemas</span> <br /> capazes de <span className="font-semibold">realizar <br />tarefas</span> que simulam a <br /> <span className="font-semibold">inteligência humana</span>
                        </p>
                    </div>
                </div>

                <div className="items-center justify-center flex flex-col mt-[100px] gap-[60px] mb-[120px]">
                    <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-center md:text-left text-complementary-white">Se interessou?</h1>
                    <Button>Entrar em contato</Button>
                </div>

            </div>
            <Footer />
        </div>
    )
}