const Footer = () => {
    return(
        <footer className="bg-primary-500 h-96 flex justify-center">
            <div className="bg-dark sm:rounded-t-[100px] rounded-t-[80px] flex flex-col items-center justify-center w-full py-10 px-5">
                <h1 className="text-white sm:text-5xl text-2xl semibold md:mb-20 mb-10 text-center">See You On Your Own Project</h1>
                <div className="flex flex-col items-center gap-5">
                    <h4 className="regular text-white">You can find me on</h4>
                    <div className="flex  items-center sm:gap-11 gap-8 text-gray-600 sm:text-5xl text-4xl">
                        <a href="https://www.instagram.com/sak.css/"><i class='bx bxl-instagram-alt'></i></a>
                        <a href="https://www.linkedin.com/in/sakcss/"><i class='bx bxl-linkedin' ></i></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shaka.aufa.alhajar@gmail.com"><i class='bx bxl-gmail'></i></a>
                        <a href="https://github.com/saka-C"><i class='bx bxl-github'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;