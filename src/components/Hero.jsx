import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import WhatsappContact from '../functions/WhatsappContact';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef(null);
  const loadingTextRef = useRef(null);
  const heroTextRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const loadingText = loadingTextRef.current;
    const heroText = heroTextRef.current;
    const description = descriptionRef.current;

    gsap.set(overlay, { backgroundColor: 'black' });
    gsap.set(loadingText, { opacity: 0, scale: 0.5 });
    gsap.set(heroText.children, { y: 50, opacity: 0 });
    gsap.set(description, { width: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        revealHeroText();
      }
    });

    tl.to(loadingText, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    })
    .to(loadingText, {
      y: '-50vh',
      duration: 1.5,
      ease: 'power3.inOut'
    })
    .to(overlay, {
      y: '-100%',
      duration: 1,
      ease: 'power3.inOut'
    }, '-=0.5');

    const revealHeroText = () => {
      const heroTl = gsap.timeline();
      
      heroTl.to(heroText.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
      .to(description, {
        width: '100%',
        duration: 2,
        ease: 'power3.inOut'
      });
    };

  }, []);

  <WhatsappContact />

  return (
    <section className="bg-primary-500 pb-10">
      <div className="flex lg:flex-row flex-col sm:gap-20 gap-5 sm:mx-16 mx-5">
      {loading && (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div ref={loadingTextRef} className="w-4/5  text-white">
            <h1 className="bold sm:text-8xl text-6xl">
              CREATIVE <br /> IDEAS
              <br />
              <span className="light opacity-50">FROM</span> SHAKA
            </h1>
          </div>
        </div>
      )}
      <div className="lg:w-4/5 w-full overflow-hidden">
        <h1 ref={heroTextRef} className="bold sm:text-8xl text-6xl">
          <div>CREATIVE</div>
          <div>IDEAS</div>
          <div>
            <span className="light">FROM</span> SHAKA
          </div>
        </h1>
      </div>
        <div className="sm:w-1/2">
          <button className="bg-dark text-primary-500 sm:text-[40px] w-full py-5 semibold rounded-full" onClick={WhatsappContact}>
            Let’s Talk
          </button>
          <div className="flex justify-around my-10">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0L20.9565 12.0435L33 16.5L20.9565 20.9565L16.5 33L12.0435 20.9565L0 16.5L12.0435 12.0435L16.5 0Z"
                fill="#C4E747"
              />
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0L20.9565 12.0435L33 16.5L20.9565 20.9565L16.5 33L12.0435 20.9565L0 16.5L12.0435 12.0435L16.5 0Z"
                fill="#C4E747"
              />
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0L20.9565 12.0435L33 16.5L20.9565 20.9565L16.5 33L12.0435 20.9565L0 16.5L12.0435 12.0435L16.5 0Z"
                fill="#C4E747"
              />
            </svg>
          </div>
          <span className="text-xl regular">
            Hi! My name is Shaka Aufa, you can call me Shaka. I am a frontend
            developer. Explore my portfolio to learn more about me.
          </span>
        </div>
      </div>
      <div className="sm:mx-16 mx-5 flex lg:flex-row  flex-col-reverse lg:items-center gap-10 justify-between lg:mt-20 mt-5">
        <div className="flex flex-wrap gap-5">
          <div className="rounded-full border-[1px] border-black py-3 px-10 text-xl regular text-center">
            Frontend Dev
          </div>
          <div className="rounded-full border-[1px] border-black py-3 px-10 text-xl regular text-center">
            UI/UX Designer
          </div>
          <div className="rounded-full border-[1px] border-black py-3 px-10 text-xl regular text-center">
            Technopreneur
          </div>
        </div>
        <div className="lg:w-2/5 h-2 bg-primary-600"></div>
      </div>
    </section>
  );
};
export default Hero;
