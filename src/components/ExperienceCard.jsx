const ExperienceCard = ({ image = "", title, desc, date}) => {
    return(
        <div className="mb-10">
            <div className="flex items-center -ml-[6px] sm:gap-10 gap-5 mb-3">
                <div className="h-4 w-4 bg-dark rounded-full"></div>
                <h3 className="text-2xl regular">{date}</h3>
            </div>
            <div className="flex sm:gap-10 gap-5">
                <div className="w-1 bg-dark"></div>
                <div className="p-7 flex flex-col gap-6 bg-darkgrey xl:w-[500px] w-full">
                    <img className="experience_pict w-full object-cover" src={`/images/${image}`} />
                    <h3 className="md:text-2xl text-xl text-primary-500 bold xl:w-[400px] uppercase">{title}</h3>
                    <h6 className="text-white xl:w-[400px]">{desc}</h6>
                </div>
            </div>
        </div>
    );
};
export default ExperienceCard