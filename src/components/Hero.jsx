import { HERO_CONTENT } from "../constants/index.js";

export const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ml-4">Naman Kundra</h1>
                    </div>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-4 ">
                        Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light ml-4">{HERO_CONTENT}</p>
                    
                    <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 ml-4">
                        <a href="https://codeplex.namankundra.in" className="mb-2 lg:mb-0 bg-purple-500 text-white py-2 px-4 rounded-lg text-center w-full lg:w-auto">CodePlex</a>
                        <a href="https://toggledocs.namankundra.in" className="mb-2 lg:mb-0 bg-purple-500 text-white py-2 px-4 rounded-lg text-center w-full lg:w-auto">Toggle Docs</a>
                        <a href="https://penspace.namankundra.in" className="mb-2 lg:mb-0 bg-purple-500 text-white py-2 px-4 rounded-lg text-center w-full lg:w-auto">PenSpace</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
