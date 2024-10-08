'use client';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SwiperArticles from "./SwiperArticles";
import "./style.css";
import ParticlesJs from "@/app/components/particles/ParticlesJs";
import TextAnimation from '@/app/components/texts/TextAnimation';
import TextAnimation2 from '@/app/components/texts/TextAnimation2';

export default function BackGalaxy(){
    return(<>
    <ParticlesJs id={'tsparticles'} />
    <div className="w-screen h-full relative flex flex-col -z-[1] justify-center bg-black">
        <motion.div
            inital={{ translateX: '200vw' }}
            animate={{ translateX: '-200vw' }}
            transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 240,
                ease: "linear",
            }}
            className="hidden lg:block absolute !-z-[1] w-full h-full brightness-90"
        >
            <div className="flex w-full -z-[1]">
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    unoptimized
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 -z-[1] left-0 mask-img-gradient bg-black"
                />
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    unoptimized
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 -z-[1] right-0 scale-x-[-1] mask-img-gradient bg-black"
                />
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    unoptimized
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 -z-[1] right-0 mask-img-gradient bg-black"
                />
                <Image 
                    src={'/galaxy.webp'}
                    alt="galaxia"
                    width={1920}
                    height={1080}
                    priority
                    unoptimized
                    quality={100}
                    fetchPriority="high"
                    className="opacity-100 -z-[1] right-0 scale-x-[-1] mask-img-gradient bg-black"
                />
            </div>
        </motion.div>
        <Image 
            src={'/galaxy.webp'}
            alt="galaxia"
            width={1920}
            height={1080}
            priority
            unoptimized
            quality={100}
            fetchPriority="high"
            className="w-full h-[120vh] absolute top-0 mask-img-gradient bg-black -z-[1] object-cover object-center lg:hidden"
        />
        <div className="wrappers w-full h-full relative py-20 bg-transparent z-[2]">
        </div>
    </div>
    <div className="absolute w-screen h-screen -z-[3] bg-black "/>
    <div className="z-[2] w-screen h-fit mx-auto relative mask-img-gradient-top pt-[120px] flex flex-col gap-10 justify-center items-center bg-black xl:bg-transparent mt-20">
        <h4 className="w-full z-[2] text-white flex uppercase font-bold tracking-[5px] text-[30px] text-center transition justify-center items-center">
            Lo más leído
        </h4>
        <div className="w-full z-[2] max-w-[1000px] lg:max-w-[60%] px-10 h-auto mx-auto relative bg-black">
            <SwiperArticles />
        </div>
    </div>
    </>)
}