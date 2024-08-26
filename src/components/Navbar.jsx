const Navbar = () => {
    return(
        <nav className="flex items-center justify-between py-11 sm:px-16 px-5 bg-primary-500">
            <img src="/svg/logo.svg" alt="logo" className="sm:w-40 w-20"/>
            <div className="flex items-center md:gap-24 gap-4">
                <a href="#" className="regular sm:text-[24px] text-base">About</a>
                <a href="#" className="regular sm:text-[24px] text-base">Project</a>
                <a href="#" className="regular sm:text-[24px] text-base">Experience</a>
            </div>
        </nav>
    );
};
export default Navbar;