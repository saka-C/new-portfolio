import Cardporto from "./Cardporto";

const Portfolio = () => {
  return (
    <section className="bg-dark pb-20" id="project">
      <div className="bg-primary-500 lg:mx-16 mx-5 pb-20 pt-10 sm:rounded-b-[100px] rounded-b-[50px] px-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-[#C4E747] w-1/2 h-1"></div>
          <div className="flex items-center sm:gap-20 gap-5">
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

          <div className="bg-[#C4E747] w-1/2 h-1"></div>
        </div>
        <h1 className="lg:text-8xl sm:text-5xl text-3xl bold text-center">
          Let’s See <br /> What I Make
        </h1>
      </div>
      <div className="lg:mx-16 mx-5 mt-5 flex flex-wrap justify-center gap-5">
        <Cardporto image="ui" year="2023" title="INTIC PSIKO" link="https://intic-psiko-ui.vercel.app/"/>
        <Cardporto image="moneytracker" year="2023" title="MONEY TRACKER" link="https://moneytracker-neoone.vercel.app/"/>
        <Cardporto image="game" year="2023" title="GAME PAK TANI" link="https://paktani.vercel.app/"/>
        <Cardporto image="bookshelf" year="2023" title="LIST READING" link="https://bookshelf-neoone.vercel.app/"/>
        <Cardporto image="co2labs" year="2024" title="CO2 Labs" link="https://labsco2.com/"/>
      </div>
    </section>
  );
};
export default Portfolio;
