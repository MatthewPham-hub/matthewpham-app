import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './ui/Button'
import { GiArrowCursor } from "react-icons/gi";
const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="cyan" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill ="grey" />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className ="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Hello, I&apos;m Matthew Pham, a software developer based in the Calgary area.
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] mx:text-5xl lg:text-6xl"
                        words="I specialize in building web applications and websites."
                    />
                    <p className ="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        I&apos;m passionate about creating software that is both functional and visually appealing. I&apos;m always looking for new opportunities to learn and grow as a developer.
                    </p>
                    <a href="#about">
                        <Button text="Experience" icon={<GiArrowCursor />} position='right'></Button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero