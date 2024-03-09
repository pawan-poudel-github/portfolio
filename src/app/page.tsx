import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/contact-form";
import { HeroImage } from "@/components/hero-image";
import { InfinitMove } from "@/components/ui/infinite-move";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { aboutText } from "@/data/about";
import { tools } from "@/data/tools";
import { ArrowRightIcon, DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 sm:px-0 p-4 relative">
      <nav className="border-l-0 border-r-0  h-9 border-slate-500 border-2 rounded-sm flex items-center justify-center gap-x-4 p-2">
<Link href={"#about"} className="hover:opacity-80">About</Link>
<Link href={"#project"} className="hover:opacity-80">Projects</Link>
<Link href={"#contact"} className="hover:opacity-80">Contact</Link>
      </nav>
        {/* Hero section  */}
        <div id="home" className="h-screen w-full flex-col-reverse gap-y-6  md:flex-row flex items-center justify-center md:justify-between ">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold">Pawan Poudel</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-transparent stroked mt-2 text-center sm:text-left">Web Developer</h3>
            <div className="mt-12 flex justify-center sm:justify-start ">
              <div className="w-14 h-14 border-white border-2 grid place-items-center border-l-0">
<a href="https://facebook.com/itspawanpoudel" target="_blank" rel="noopener noreferrer">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                </svg>
                </a>
              </div>
              <div className="w-14 h-14 border-white border-2 grid place-items-center border-l-0">
                <a href="https://github.com/pawan-poudel-github" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="scale-[1.5]" />
                </a>
              </div>
              <div className="w-14 h-14 border-white border-2 grid place-items-center border-l-0 border-r-0">
                <a href="https://discord.com/users/836805731033284699" target="_blank" rel="noopener noreferrer">
                <DiscordLogoIcon className="scale-[1.5]" />
                </a>
              </div>  </div>

          </div>
          <div className="rounded-xl max-w-64 w-full md:max-w-sm mx-auto sm:mx-0">
            <HeroImage />
          </div>
        </div>
        {/* end hero section  */}
        {/* About section */}
        <main id="about">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className=" mt-2 ">
            <TextGenerateEffect words={aboutText} className="text-justify" />
          </div>
          <div className="mt-10">

            <InfinitMove speed="normal" items={tools} direction="left" />
          </div>
        </main>

        {/* End about section  */}
        {/* project section starts here */}
        <div id="project" className="mt-10 ">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="md:flex md:justify-around ">
            <ProjectCard title="Homework App" description="Manage student assignments digitally" github="https://github.com/pawan-poudel-github/homework" liveUrl="https://onlinehomework.vercel.app/" image="/homework.PNG" logo="/homework-logo.png" />
            <ProjectCard title="Nilestore" description="E-commerce frontend Page" github="https://github.com/pawan-poudel-github/reactecommerce/" liveUrl="https://nilestore.netlify.app/" image="/nilestore.PNG" logo="/nilestore-logo.png" />
          </div>
          <a className="flex  mx-auto w-fit items-center underline underline-offset-4 justify-center transition-all gap-x-1 hover:gap-x-2 mt-6 text-lg relative text-center " href="https://github.com/pawan-poudel-github" target="_blank" rel="noopener noreferrer">
            Find more on Github <ArrowRightIcon className="text-violet-500" />
          </a>
        </div>
        {/* end porjects page  */}
        {/* contact page */}
        <div id="contact" className="grid gap-10 mt-16">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Get in touch</h2>
              <p className="text-gray-400">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

