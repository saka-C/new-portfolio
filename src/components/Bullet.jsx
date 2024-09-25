const Bullet = ({text}) => {
    return(
        <button className="border-[1px] border-gray-200 rounded-full py-3 sm:px-10 px-5 sm:text-[24px] text-sm text-white text-center bg-transparent hover:bg-gray-200 hover:text-darkgrey ">
            {text}
        </button>
    );
};
export default Bullet;