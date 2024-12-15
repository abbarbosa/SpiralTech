import React from 'react';
import { Button, ButtonLink } from './Button';

const Modal = ({ isOpen, setIsOpen, title, description }) => {

  return (
    <div className={`absolute z-50 w-screen h-screen top-0 left-0 flex justify-center items-center ${isOpen ? "" : "hidden"}`} >
      <div className='w-[860px] h-[640px] bg-[#EFEFEF] rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-[20px] bg-opacity-10 items-center justify-center flex flex-col pt-[50px] gap-[50px]'>
        <h1 className='text-[60px] text-complementary-white'>{title}</h1>
        <p className='w-[500px] text-center text-complementary-white text-[27px]'>{description}
        </p>
        <Button styles="text-complementary-white border-primary-white bg-primary-purple">Entrar em contato</Button>
        <ButtonLink styles="text-complementary-white" onClick={() => { setIsOpen(false) }} >Fechar</ButtonLink>
      </div>
    </div>
  );
};

export default Modal;