import React from 'react'
import MagicButton from './ui/Button'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] pb-3">
                    Want to work together?
                </h1>
                <p>Contact me and we can discuss how I can assist you!</p>
                <a href="mailto:matthewpham26@gmail.com">
                <MagicButton
                    text="Contact me"
                    icon={<FaLocationArrow />}
                    position="right">
                </MagicButton>
                </a>
            </div>
            <div className="flex mt-16 md:flew-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Matthew Pham</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <a href={profile.url} target="_blank" rel="noopener noreferrer">
                                <img src={profile.img} alt={String(profile.id)} width={20} height={20} />
                            </a>
                        </div>
                    )
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer