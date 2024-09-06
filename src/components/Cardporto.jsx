const Cardporto = ({ image = "", title, year, link }) => {
    return (
        <div className="card relative overflow-hidden group w-96 h-96">
            <div className="card-image">
                <img src={`/images/${image}.png`} alt="" className="w-96 h-96 group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" />
            </div>
            <div className="card-content p-5 group-hover:bg-[#000000c0] absolute top-0 left-0 w-full h-full flex flex-col justify-end transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000">
                <span className="text-4xl text-white light">{year}</span>
                <h1 className="text-6xl semibold text-white">{title}</h1>
            </div>
            {/* "Visit" link */}
            <a href={link}
                className="absolute bg-primary-500 top-0 w-20 h-20 flex justify-center items-center right-0 text-black text-lg transition-transform transform translate-x-full group-hover:translate-x-0 duration-500">
                <i className='bx bx-right-arrow-alt text-6xl transition-transform duration-75 group-hover:-rotate-45 '></i>
            </a>
        </div>
    );
};
export default Cardporto;
