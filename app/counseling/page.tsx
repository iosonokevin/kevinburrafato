'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
      
      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/sfondo_counseling_hero.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <nav className="relative z-20 pt-10">
          <ul className="flex gap-8 text-sm font-bold tracking-widest text-white">
            <li><Link href="/" className="hover:opacity-50 transition-opacity">Home</Link></li>
            <li><Link href="/counseling" className="hover:opacity-50 transition-opacity">Counseling</Link></li>
            <li><Link href="/bio" className="hover:opacity-50 transition-opacity">Kevin</Link></li>
          </ul>
        </nav>
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-6 px-4">
          <p className="font-biro text-white font-bold tracking-widest text-center max-w-2xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            <br /> 
            - James Hillman -
          </p>       
        </div>
      </section>

      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_counseling_terra.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
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
        <div className="relative z-20 grid grid-cols-2 w-full flex-grow">          
          <div className="flex flex-col items-center justify-center gap-4 px-10 ml-10">
            <p className="font-biro text-black font-bold tracking-widest">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_counseling_acqua.PNG" 
            alt="Background"
            fill
            className="object-cover"
            priority
          />
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
        <div className="relative z-20 grid grid-cols-2 w-full flex-grow">
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-center gap-4 px-10 mr-10">
            <p className="font-biro text-black font-bold tracking-widest">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>        
        </div>
      </section>

      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_counseling_fuoco.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
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
        <div className="relative z-20 grid grid-cols-2 w-full flex-grow">         
          <div className="flex flex-col items-center justify-center gap-4 px-10 ml-10">
            <p className="font-biro text-black font-bold tracking-widest">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_counseling_aria.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 grid grid-cols-3 w-full flex-grow">         
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-center gap-4 px-10 ml-10">
            <p className="font-biro text-black font-bold tracking-widest">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <Link 
              href="/zero" 
              className="px-6 py-2 text-sm font-bold border border-black text-black rounded-full bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
            >
              Scrivimi
            </Link>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section> 

    </main>
  );
}
