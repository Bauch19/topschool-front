/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
const BackGalaxy = dynamic(() => import('@/components/Main/BackGalaxy'));
const Button = dynamic(() => import('@/app/components/buttons/Button'));
const People = dynamic(() => import('@/app/components/presentation/People'));
const SwiperTop = dynamic(() => import('@/app/components/swipers/SwiperTop'));
const SwiperBanners = dynamic(() => import('@/app/components/swipers/SwiperBanners'));
const Modal = dynamic(() => import('@/app/components/modals/Modal'));
import ParticleCanvas from "./components/particles/ParticleCanvas";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    email: '',
  });
  
  return (
    <>
    <ParticleCanvas />
    <video src="/videos/vecteezy_world-map-and-globe_46294190.mov" autoPlay loop muted className="w-full h-screen object-cover object-center z-0 brightness-75 fixed" />
    <main className="relative z-0 w-[100vw] overflow-x-hidden bg-transparent">
      <BackGalaxy />
      <div className="absolute top-0 !z-[3] bg-transparent w-full h-screen">
        <div className="w-full h-full flex flex-col justify-between relative items-center py-5 bg-transparent">
          <Image 
            src={'/titulo-full.png'}
            alt="titulo"
            width={960}
            height={540}
            priority
            quality={100}
            fetchPriority="high"
            className="w-full max-w-[300px] h-auto z-[1]"
          />
          <h2 className="uppercase text-white text-[40px] text-center font-[200] w-[330px] leading-[40px] mt-2 z-[1]">
            El poder del <span className="text-white font-bold">Mindfulness</span> en la infancia
          </h2>
          <Image 
            src={'/boys.png'}
            alt="principal"
            width={960}
            height={540}
            priority
            quality={100}
            fetchPriority="high"
            className="w-full md:w-3/4 lg:w-1/3 h-auto z-0 mask-img-gradient-min px-5"
          />
          <Button className={'z-[1] absolute bottom-5'} onClick={() => setOpen(true)}>
            Saber más
          </Button>
        </div>
      </div>
      <div className="w-full h-fit bg-black pb-[120px]">
        <div className="w-full max-w-[1000px] mx-auto h-fit px-5 bg-black">
          <SwiperBanners />
        </div>
      </div>
      <section className="bg-transparent !z-[5] bg-center bg-cover bg-no-repeat relative flex flex-col justify-start items-center">
        {/* <video src="/videos/vecteezy_world-map-and-globe_46294190.mov" autoPlay loop muted className="absolute w-full h-screen object-cover object-center z-0 brightness-75" /> */}
        <Image 
          src={'/logo-news.png'}
          alt="titulo"
          width={960}
          height={540}
          priority
          quality={100}
          className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[700px] my-20 h-auto z-[1]"
        />
        <div className="text-white uppercase text-xl font-semibold tracking-[5px] z-[6] text-center w-full h-auto">
          Las mejores opiniones<br /> educativas del país
        </div>
        <div className="w-full max-w-[1000px] flex justify-between items-center px-5 absolute bottom-0">
          <People 
            src={'/people/persona-1.png'}
            name={'Dana'}
            lastName={'Stevens'}
          />
          <People 
            src={'/people/persona-2.png'}
            name={'Rebeca'}
            lastName={'Hadid'}
          />
          <People 
            src={'/people/persona-3.png'}
            name={'Jordi'}
            lastName={'Soler'}
          />
        </div>
        <div className="w-full max-w-[1000px] mx-auto h-fit py-10 px-5 bg-transparent absolute -bottom-[170px]">
          <SwiperBanners />
        </div>
      </section>
      <section className="bg-transparent flex flex-col justify-between gap-10 lg:gap-20 py-20 items-center">
        <h3 className="uppercase text-gray-100 font-semibold text-[30px] tracking-[3px] mt-[140px] z-10">Lo más top</h3>
        <div className="w-full max-w-[1000px] h-auto px-12 xl:px-10 mx-auto relative mb-10">
          <SwiperTop />
        </div>
        {/* <div className="w-full h-auto flex flex-col gap-10 lg:gap-20 justify-center items-center px-5 z-10">
          <p className="text-gray-200 font-semibold text-[16px] tracking-[5px] uppercase text-center">
            ¿Te gustaría suscribirte a la revista?
          </p>
          <div className="w-full h-[20px] flex justify-center gap-2 items-end mb-20">
            <input 
              type="email" 
              id="email"
              name="emal"
              placeholder="Correo electrónico"
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full max-w-[1000px] placeholder:text-gray-400 text-[14px] text-gray-50 h-full bg-transparent border-b border-gray-50" 
            />
            <Button className={''}>
              Enviar
            </Button>
          </div>
        </div> */}
      </section>
      <section className="bg-[url(/bg-home.jpg)] bg-no-repeat bg-center bg-cover relative py-20 flex flex-col gap-20 justify-start items-center">
        <Image 
          src={'/logo-guia.png'}
          alt="titulo"
          width={960}
          height={540}
          priority
          quality={100}
          className="w-full max-w-[700px] px-5 h-auto z-[1]"
        />
        <p className="text-white uppercase text-xl font-semibold tracking-[5px] text-center">
          DONDE ENCONTRAR LA<br /> MEJOR OFERTA EDUCATIVA
        </p>
        <Button className={'mt-7'}>
          Suscribete
        </Button>
      </section>
      {/* <section className="flex flex-col justify-start items-center">
        <Image 
          src={'/titulo-full.png'}
          alt="titulo"
          width={960}
          height={540}
          className="w-1/3 h-auto z-[1]"
        />
        <h2 className="uppercase text-blue-400 font-semibold text-[24px] tracking-[5px] my-8">
          Distribución Nacional
        </h2>
        <div className="flex justify-center items-center gap-5 w-fit">
          <Image 
            src={'/portadas/portada.png'}
            alt="portada"
            width={250}
            height={407}
            className="object-cover object-center scale-75 opacity-55 z-0"
          />
          <Image 
            src={'/portadas/portada.png'}
            alt="portada"
            width={250}
            height={407}
            className="object-cover object-center absolute z-[1]"
          />
          <Image 
            src={'/portadas/portada.png'}
            alt="portada"
            width={250}
            height={407}
            className="object-cover object-center scale-75 opacity-55 z-0"
          />
        </div>
        <p className="uppercase text-blue-400 font-bold text-[36px] my-5">
          * 6 Pass a long
        </p>
        <Button className={'!text-blue-400 !border-blue-400 !bg-white z-[2]'}>
          Anunciate
        </Button>
      </section> */}
      <div className="w-full h-[60px] bg-[url(/bg-gold.jpg)] bg-cover bg-center bg-no-repeat" />
      <section className="bg-gradient-to-bl !min-h-fit from-[#002349] to-[#00a9e9] relative flex flex-col justify-center items-center">
        {/* <Image 
          src={'/portadas/magazine.png'}
          alt="magazine"
          width={1920}
          height={1080}
          className="w-full max-w-[500px] h-auto"
        /> */}
        <div className="flex justify-center items-center">
          <Image 
            src={'/logo-white.png'}
            width={500}
            height={100}
            priority quality={75}
            className="w-full max-w-[150px] my-10 h-auto"
          />
        </div>
        <hr className="w-full h-[1px] bg-white"/>
      </section>
    </main>
    <Modal open={open} setOpen={setOpen} />
    </>
  );
}