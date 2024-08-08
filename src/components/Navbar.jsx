import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

export const Navbar = () => {
    
    
    
    return(
       <nav className="mb-20 flex items-center justify-between py-2 ">
        <div className='flex flex-shrink-0 items-center'>
            {/* <img src={logo} alt="logo" className='mx-2 w-10'/> */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/naman-kundra-850209281/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/naman777" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/naman_kundra/" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
            <a href="https://x.com/naman18_" target="_blank" rel="noopener noreferrer">
                <FaSquareTwitter/>
            </a>
        </div>
       </nav>
    )
}