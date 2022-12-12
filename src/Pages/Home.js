import '../App.css';
import 'animate.css'
import SafaAsgar_Resume from '../assets/SafaAsgar_Resume.pdf';
import safa from '../assets/safa.jpg';
import '../Cursor.css'
import Projects from '../components/Projects/Projects';
import ContactForm from '../components/ContactForm/ContactForm';
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <div className='h-96 flex justify-between items-center '>
                <div className='flex flex-col items-start'>
                    <div className='animate__animated animate__fadeInDown'>
                        <h1 className='text-2xl font-bold  text-left'>HELLO!</h1>
                        <p className='text-6xl font-black text-white'>
                            <Typewriter
                                options={{ loop: true }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('I am SAFA ASGAR')
                                        .pauseFor(500)
                                        .deleteChars(10)
                                    typewriter.typeString('a Web Developer')
                                        .pauseFor(1000)
                                        .deleteChars(15)
                                    typewriter.typeString('an Artist')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <a
                            href={SafaAsgar_Resume}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-outline mt-5 w-44 glass mr-5'
                        ><button>Download Resume</button></a>
                        <button className='btn btn-outline mt-5 w-44 glass'>View More</button>
                    </div>
                </div>
                <div>
                    <img src={safa} alt="" className='rounded-full mr-16' />
                </div>
            </div>
            <div className='mt-28 mb-14'>
                <Projects></Projects>
            </div>
            <div id='about-me'>
                <AboutMe></AboutMe>
            </div>
            <div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Home;