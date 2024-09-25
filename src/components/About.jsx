import Skills from "./Skills";

const About = () => {
  return (
    <section className="bg-dark py-20" id="about">
      <div className="sm:flex items-center justify-between lg:mx-16 mx-5 lg:gap-20 gap-5">
        <div className="bg-darkgrey p-5">
          <img src="/images/profile.png" alt="profile" />
          <h2 className="semibold text-5xl mt-2 text-white">Shaka Aufa</h2>
        </div>
        <div className="lg:w-3/4 sm:w-1/2 lg:text-3xl text-xl text-white sm:mt-0 mt-5">
          I am a <span className="text-primary-500">Frontend Developer</span>{" "}
          and <span className="text-primary-500">UI/UX Designer</span> with
          approximately 3 years of experience in programming. My expertise
          includes HTML, CSS, JavaScript, PHP, and frameworks such as React JS
          and Laravel. I have a strong passion for digital product development
          and technology education.
        </div>
      </div>
      <Skills />
    </section>
  );
};
export default About;
