import Bullet from "./Bullet";

const Skills = () => {
    return(
        <div className="lg:mx-16 mx-5 mt-10 flex flex-col gap-10">
            <div className="bg-darkgrey p-10">
                <h1 className="text-5xl semibold text-white">Tech Stack<i className='bx bxs-quote-single-right text-primary-500'></i></h1>
                <div className="flex flex-wrap sm:gap-7 gap-3 mt-10">
                    <Bullet text="HTML"/>
                    <Bullet text="CSS"/>
                    <Bullet text="JavaScript"/>
                    <Bullet text="Tailwind"/>
                    <Bullet text="Bootstrap"/>
                    <Bullet text="Blade"/>
                    <Bullet text="React Js"/>
                </div>
            </div>
            <div className="bg-darkgrey p-10">
                <h1 className="text-5xl semibold text-white">Design & Editor<i className='bx bxs-quote-single-right text-primary-500'></i></h1>
                <div className="flex flex-wrap sm:gap-7 gap-3 mt-10">
                    <Bullet text="Figma"/>
                    <Bullet text="Canva"/>
                    <Bullet text="Capcut"/>
                </div>
            </div>
            <div className="bg-darkgrey p-10">
                <h1 className="text-5xl semibold text-white">Additional Skills<i className='bx bxs-quote-single-right text-primary-500'></i></h1>
                <div className="flex flex-wrap sm:gap-7 gap-3 mt-10">
                    <Bullet text="Public Speaking"/>
                    <Bullet text="Photograph"/>
                    <Bullet text="Video Editor"/>
                    <Bullet text="Content Creator"/>
                </div>
            </div>
        </div>
    );
};
export default Skills;