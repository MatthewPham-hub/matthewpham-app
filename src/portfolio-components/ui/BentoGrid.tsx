'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('matthewpham26@gmail.com');
      setCopied(true);
    } else {
      alert('Clipboard API not available');
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(16,16,18)',
        backgroundImage:
          'linear-gradient(90deg, rgba(10,10,12,1) 10%, rgba(25,25,28,1) 90%)',
      }}
    >
      <div className={`${id === 6 ? 'flex justify-center' : ''} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, `object-cover object-center`)}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div
            className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 mb-2 lg:text-3xl max-w-96"
            style={{
              textShadow:
                "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
            }}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 flex-wrap lg:gap-5 w-fit lg:-right-2">
              <div className="flex flex-col gap-3">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#050614ef]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {["Python", "MongoDB", "Node.js"].map((item) => (
                  <span
                    key={item}
                    className="py-1 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#050614ef]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ width: 150, height: 150 }}
                />
              </div>
              <Button
                text={copied ? 'Email Copied' : 'Copy Email'}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
