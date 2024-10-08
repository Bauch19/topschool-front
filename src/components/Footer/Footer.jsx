import Image from "next/image";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icons";

export default function Footer(){
  return(
    <footer className="bg-gradient-to-bl !min-h-fit from-[#002349] to-[#00a9e9] z-10 relative flex flex-col gap-5 pb-10 justify-center items-center">
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-2 items-center lg:items-start px-5">
        <div className="w-full flex flex-col justify-center items-center">
          <Image 
            src={'/logo-white.png'}
            alt="logo footer"
            width={500}
            height={100}
            priority quality={75}
            unoptimized
            className="w-full max-w-[500px] my-10 h-auto"
          />
          <div className="flex w-fit items-center gap-2">
            <LinkButton 
              url={'https://www.instagram.com/topschool.mag/'}
              icon={<Icons.Instagram className={'size-6'}/>}
              arialLabel="Instagram"
            />
            <LinkButton 
              url={'https://www.facebook.com/topschoolmagazine?locale=es_LA'}
              icon={<Icons.FacebookFill className={'size-6'}/>}
              arialLabel="Facebook"
            />
            <LinkButton 
              url={'https://www.youtube.com/@TopSchoolmag'}
              icon={<Icons.YouTubeFill className={'size-6'}/>}
              arialLabel="YouTube"
            />
            <LinkButton 
              url={'https://www.tiktok.com/@topschoolmx?lang=es'}
              icon={<Icons.TikTokFill className={'size-6'}/>}
              arialLabel="TikTok"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-14 md:gap-5 text-lg py-10 px-5">
          <div className="w-full h-fit flex flex-col md:flex-row gap-5 justify-center">
            <div className="flex flex-col gap-1 border-l border-white pl-6 px-5">
              <strong className="font-bold text-[24px] uppercase">Temas</strong>
              <p>Cultura</p>
              <p>Tendencias</p>
              <p>Salud</p>
              <p>Bienestar</p>
              <strong className="font-bold text-[24px] uppercase mt-4">Artículos</strong>
              <p>Hablemos de...</p>
              <p>Nutrición</p>
              <p>Entrevista con...</p>
              <p>TI/Innovación</p>
            </div>
            <div className="flex flex-col gap-1 border-l border-white pl-6 px-5">
              <strong className="font-bold text-[24px] uppercase">Seciones</strong>
              <p>Ciencia Lo-K</p>
              <p>Top News</p>
              <p>Top Guía</p>
            </div>
            <div className="flex flex-col gap-1 border-l border-white pl-6 px-5">
              <strong className="font-bold text-[24px] uppercase">Contacto</strong>
              <div className="flex gap-2 w-full items-start">
                <Icons.LocationFill className={'size-6 text-white'}/>
                <div className="flex flex-col gap-1 w-full">
                  <p>5 Sur 3112,</p>
                  <p>Col. Chulavista</p>
                  <p>C.P. 72420, Puebla, Pue.</p>
                </div>
              </div>
              <div className="flex gap-2 w-full items-start">
                <Icons.EmailFill className={'size-6 text-white'}/>
                <div className="flex flex-col gap-1 w-full">
                  <a href="mailto:contacto@topschool.mx">contacto@topschool.mx</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-xs w-full text-center max-w-[1000px] mx-auto px-5">
        © 2024 TOP SCHOOL, LLC. All Rights Reserved. Use of this site constitutes acceptance of our Terms of Service, Privacy Policy (Your Privacy Rights) and Do Not Sell or Share My Personal Information. TOP SCHOOL may receive compensation for some links to products and services on this website. Offers may be subject to change without notice.
      </p>
    </footer>
  )
}

function LinkButton({  url, icon, arialLabel, ...res }){
  return(
    <motion.button
      aria-label={arialLabel}
      aria-labelledby={arialLabel}
      className="flex justify-center items-center p-2 rounded-full text-white hover:text-[#00a9e9] transition-all bg-opacity-50 hover:bg-[#002349] hover:backdrop-blur-lg"
      onClick={() => {
        window.open(
          `${url}`,
          '_blank'
        );
      }}
      {...res}
    >
      {icon}
    </motion.button>
  )
}