import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);

  useEffect(() => {
    const sectionHeight = sectionRef.current.offsetHeight; // Mendapatkan tinggi section
    const windowHeight = window.innerHeight; // Mendapatkan tinggi layar

    const timeln = gsap.timeline({ paused: true });

    // Ganti nilai '200vh' dengan nilai dinamis yang setara dengan tinggi section
    timeln.fromTo(
      colLeftRef.current,
      { y: 0 },
      { y: sectionHeight - windowHeight, duration: 1, ease: "none" }, // Bergerak sesuai tinggi section
      0
    );

    ScrollTrigger.create({
      animation: timeln,
      trigger: sectionRef.current,
      start: "top top",
      end: `bottom bottom`, // Mengakhiri animasi ketika ujung section mencapai bawah layar
      scrub: true,
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="bg-primary-500">
      <div className="container">
        <div className="experience-content">
          <div className="col col-left sm:block hidden" ref={colLeftRef}>
            <h1 className="experience-heading ml-10">
              <span className="lg:text-6xl text-4xl semibold bg-dark text-white py-5">
                EXPERIENCE
              </span>
            </h1>
          </div>
          <h1 className="experience_text mb-10 text-xl semibold bg-dark text-white py-5 w-full text-center">EXPERIENCE</h1>
          <div className="col col-right">
            <ExperienceCard
              title="Founder NEO ONE Indonesia"
              desc="Has experience as a founder of an organization focused on digital product development and technology education for the public."
              image="fou.png"
              date="July 2023 - Now"
            />
            <ExperienceCard
              title="Coach technopreneur & game developing at clevio inovator camp"
              desc="Part time works as a technopreneur and game development coach at Clevio."
              image="clev.jpeg"
              date="July 2024 - Now"
            />
            <ExperienceCard
              title="freelance frontend web developer at coding collective Singapore"
              desc="Remote working as a freelance front end website dev at a Coding Collective  Singapore ."
              image="co2.jpeg"
              date="July 2024 - Now"
            />
            <ExperienceCard
              title="1st Lomba Cipta Game Nasional"
              desc="Achieved 1P and the overall champion title in a national game-making competition."
              image="lom.png"
              date="November 18 2023"
            />
            <ExperienceCard
              title="Siswa SMK Kreatif KABEKRAF from Disbudpar"
              desc="Being part of the “SISWA SMK KREATIF' within the KABEKRAF organization of Dinas Kebudayaan & Pariwisata Kabupaten Bogor.”"
              image="kre.png"
              date="2023"
            />
            <ExperienceCard
              title="IT support at the Faculty of Psychology, University of Indonesia."
              desc="Proggram Student Internship as IT support at Universitas Indonesia."
              image="mag.png"
              date="October 2023"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
