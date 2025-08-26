// import { NextLogo } from "./next-logo";
// import { SupabaseLogo } from "./supabase-logo";
import Image from 'next/image';
//import PauLogo from '../assets/images/logos/palaundry_logo_raw_stroked.png';
import PauLogo2 from '../assets/images/logos/stroked_logo.png';


export function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex justify-center items-center">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a> */}
        <span className="border-l rotate-45 h-6" />
          <a href='https://www.facebook.com/profile.php?id=61577046880820' target='_blank' rel='noreferrer'>
            <Image
              src={PauLogo2}
              alt="Pau Laundry Services"
              height={500} // h-52 = 208px
              className="w-auto"
            />
          </a>
      </div>
      {/* <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The quality laundry service in town{" "}
        <span className='font-bold'>You wear it, we cleant it!</span>
      </p> */}
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
  );
}
