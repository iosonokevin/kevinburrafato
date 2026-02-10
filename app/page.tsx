'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CircleArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
      
      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_home_hero_mobile.PNG" 
            alt="Hero background mobile"
            fill
            className="object-cover block md:hidden"
            priority
          />
          <Image
            src="/sfondo_home_hero.PNG"
            alt="Hero background desktop"
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>
        <nav className="relative z-20 pt-10">
          <ul className="flex gap-8 text-sm font-bold tracking-widest text-black">
            <li><Link href="/" className="hover:opacity-50 transition-opacity">Home</Link></li>
            <li><Link href="/counseling" className="hover:opacity-50 transition-opacity">Counseling</Link></li>
            <li><Link href="/bio" className="hover:opacity-50 transition-opacity">Kevin</Link></li>
          </ul>
        </nav>
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-2">
          <h1 className="font-biro text-2xl md:text-3xl text-black tracking-widest">
            Vivere piuttosto che capire
          </h1>       
          <Link 
            href="zero" 
            className="px-6 py-2 text-sm font-bold border border-black text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
          >
            Scrivimi
          </Link>
        </div>
        <Link 
          href="#counseling" 
          className="relative z-20 pb-5 transition-opacity hover:opacity-50  cursor-pointer"
        >
          <CircleArrowDown className="h-8 w-8 text-black" />
        </Link>
      </section> 

      <section
        id="counseling"
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_home_counseling_mobile.PNG"
            alt="Hero background mobile"
            fill
            className="object-cover block md:hidden"
            priority
          />
          <Image
            src="/sfondo_home_counseling.PNG"
            alt="Hero background desktop"
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>
        <nav className="relative z-20 pt-10">
          <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
            <li>
              <Link href="/zero" className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                <span className="relative top-[1px]">☾</span> 
                <span>Faccio lo zero</span> 
                <span className="relative top-[2px]">☽</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative z-20 w-full flex-grow flex flex-col md:grid md:grid-cols-2">
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-end md:justify-center flex-grow pb-40 md:pb-0 px-10 md:mr-10 text-center md:text-left">
            <div className="max-w-md flex flex-col items-center">
              <p className="font-biro text-black font-bold tracking-widest mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <Link 
                href="/counseling" 
                className="inline-block px-8 py-2 font-bold text-sm border border-black rounded-full text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
              >
                Counseling
              </Link>
            </div>
          </div>
        </div>
        <Link 
          href="#bio" 
          className="relative z-20 pb-5 transition-opacity hover:opacity-50  cursor-pointer"
        >
          <CircleArrowDown className="h-8 w-8 text-black" />
        </Link>
      </section>

      <section
        id="bio"
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
            <Image
              src="/sfondo_home_bio_mobile.PNG"
              alt="Hero background mobile"
              fill
              className="object-cover block md:hidden"
              priority
            />
            <Image
              src="/sfondo_home_bio.PNG"
              alt="Hero background desktop"
              fill
              className="object-cover hidden md:block"
              priority
            />
          </div>
        </div>
        <nav className="relative z-20 pt-10">
          <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
            <li>
              <Link 
                href="/zero" 
                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
              >
                <span className="relative top-[1px]">☾</span> 
                
                <span>Faccio lo zero</span> 
                
                <span className="relative top-[2px]">☽</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative z-20 w-full flex-grow flex flex-col md:grid md:grid-cols-2">         
          <div className="flex flex-col items-center justify-end md:justify-center flex-grow pb-40 md:pb-0 px-10 md:mr-10 text-center md:text-left">
            <div className="max-w-md flex flex-col items-center">
              <p className="font-biro text-black font-bold tracking-widest mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <Link 
                href="/bio" 
                className="inline-block px-8 py-2 font-bold text-sm border border-black rounded-full text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
              >
                Kevin
              </Link>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
        <Link 
          href="#scrivimi" 
          className="relative z-20 pb-5 transition-opacity hover:opacity-50  cursor-pointer"
        >
          <CircleArrowDown className="h-8 w-8 text-black" />
        </Link> 
      </section>

      <section
        id="scrivimi"
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
              src="/sfondo_home_scrivimi_mobile.PNG"
              alt="Hero background mobile"
              fill
              className="object-cover block md:hidden"
              priority
            />
            <Image
              src="/sfondo_home_scrivimi.PNG"
              alt="Hero background desktop"
              fill
              className="object-cover hidden md:block"
              priority
            />
        </div>
        <nav 
          className="relative z-20 pt-10"
        >
          <ul className="flex gap-8 text-sm font-bold tracking-widest text-black">
            <li><Link href="/" className="hover:opacity-50 transition-opacity">Home</Link></li>
            <li><Link href="/counseling" className="hover:opacity-50 transition-opacity">Counseling</Link></li>
            <li><Link href="/bio" className="hover:opacity-50 transition-opacity">Kevin</Link></li>
          </ul>
        </nav>
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-4">
          <motion.p 
            className="font-biro font-bold text-1xl text-black tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Vivere piuttosto che capire
          </motion.p>          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link 
              href="/zero" 
              className="px-6 py-2 text-sm font-bold border border-black text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
            >
              Scrivimi
            </Link>
          </motion.div>
        </div>
        <span 
          className="relative z-20 pb-5 text-[10px] sm:text-sm font-bold text-black w-full text-center"
        >
          © 2026 Kevin Burrafato. Tutti i diritti riservati.
        </span>
      </section>

    </main>
  );
}
