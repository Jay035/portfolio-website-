import React from 'react';
import { useEffect, useRef } from 'react';
import cv from '../components/assets/Chibuike_Ukandu_ CV.pdf';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import sassIcon from '../components/assets/sass.png';
import tailwindcssIcon from '../components/assets/tailwindcss.png';
import javascriptIcon from '../components/assets/javascript.png';
import bootstrapIcon from '../components/assets/bootstrap.png';

export const Home = () => {
  // create ref element
  const el = useRef(null),
        aboutHeading = "<ABOUT />",
        portfolio = "<Portfolio />";

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:[' Chibuike Ukandu. ', ' a Software Developer. '],
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false
    })
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <div className='bg-blackk text-light-grey z-0 relative'>
        <section data-aos="fade-in" data-aos-duration="3000" id='hero' className='bg-hero-img w-full h-[90vh] sm:h-[100vh] bg-no-repeat bg-center bg-black-300 bg-blend-multiply bg-cover'>
          {/* text */}
          <div data-aos="zoom-out" data-aos-duration="1000" className="relative h-4/5 text-center w-11/12 max-w-[800px] mx-auto leading-loose sm:ml-10 sm:text-left top-48 sm:top-72 xl:ml-20">
            <h1 className='text-2xl text-white font-semibold mb-2 sm:text-4xl xl:text-5xl'>Hello, I'm <span ref={el}></span></h1>
            <h4 className='text-lg font-semibold sm:text-2xl'>I'm a developer who is passionate about creating interactive interfaces that solve human problems. </h4>
            {/* buttons */}
            <div className="sm:w-4/5 sm:flex justify-center items-center gap-12 sm:gap-4 mt-12 sm:justify-start">
              {/* contact */}
              <button className="block cursor-auto bg-button-black p-2 w-2/5 mx-auto sm:mx-0 my-2 text-white font-semibold hover:bg-[#505052] sm:py-4">
                <Link to="/contact" className='py-4 px-4 text-lg sm:text-xl xl:text-xl' href="/src/pages/Contact.js">
                  Hire Me
                </Link>
              </button>
              {/* GET CV  */}
              <button className="block cursor-auto bg-button-black p-2 w-2/5 mx-auto sm:mx-0 my-2 text-white font-semibold hover:bg-[#505052] sm:py-4">
                <a className='py-4 px-4 text-lg sm:text-xl xl:text-xl' href={cv} download >Get CV</a>
              </button>
            </div>
          </div>
          <a href="#about-me" className='arrow relative top-20 w-fit mx-auto flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#a5a5a8" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
          </a>
        </section>

        {/* ============= ABOUT ME =================== */}

        <section data-aos="fade-up" data-aos-duration="4000" data-aos-easing="ease" id="about-me" className='w-[90%] mx-auto leading-7 pt-4 max-w-[1300px]'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-center pt-8 pb-10'>{aboutHeading}</h1>
          <div className="about-sections grid lg:grid-cols-2 lg:gap-16 text-base sm:text-lg">
              {/* LEFT COLUMN  */}
            <div className="left-col text-lg xl:text-xl sm:font-normal">
              <h3 className='text-2xl xl:text-3xl mb-2 font-medium'>Hello, I'm <span className='text-white opacity-90'>Chibuike Ukandu.</span></h3>
              <p className=''>I'm an enthusiastic Frontend developer, an ardent believer in continuous learning of both technical and soft skills
               to improve my ability to deliver great software solutions with the best user experience. Whether it's a project, job opportunity, 
               or just a chat, feel free to contact me.</p>

               {/* EDUCATION */}
              <div className="my-8">
                <h5 className='text-2xl lg:text-3xl font-semibold mb-2'>Education</h5>
                <ul className='list-disc pl-9 pb-2'>
                  <li className='cursor-default'>
                    <h6 className='font-medium'>AltSchool School of Engineering</h6>
                    <p className='text-base'>Software Engineering</p>
                    <p className='text-lg font-medium'>2022 - 2023</p>
                  </li>
                  <li className='pb-2 cursor-default'>
                    <h6 className='font-medium'>Jobberman</h6>
                    <p className='text-base'>Soft Skills Training</p>
                    <p className='text-lg font-medium'>2021</p>
                  </li>
                  <li className='pb-2 cursor-default'>
                    <h6 className='font-medium'>Living Word Academy Secondary</h6>
                    <p className='text-base'>WASSCE</p>
                    <p className='text-lg font-medium'>2020</p>
                  </li>
                </ul>
              </div>
            </div> 

            

            {/* RIGHT COLUMN */}
            <div className="">
              {/* <div id="certificates" className="my-4">
                  <h5 className='text-2xl font-medium mb-2'>Certifications</h5>
                  <ul className='list-disc pl-9'>
                      <li>Side Hustle Internship &nbsp;<a href={SHI} className="font-medium text-white">View</a> </li>
                      <li>Jobberman Soft Skills Training &nbsp;
                        <a href="" className="font-medium text-white"> 
                        <Document file={JSS}>
                          <Page>
                            <Text>View</Text>
                            <Image />
                          </Page>
                        </Document>
                        View
                         </a>  
                        </li>
                      <li>Innovation Growth Hub Fellowship &nbsp;<a href={IGHub} className="font-medium text-white">View</a> </li>
                  </ul>
              </div> */}
              <div id="skills" className="my-8 lg:mt-0">
                <h5 className='text-2xl sm:text-3xl font-semibold mb-2'>Skills</h5>
                <div className="">
                  {/* <p className='text-lg font-medium opacity-80'> // These are the technologies I've worked with</p> */}
                  <ul className='mt-8 flex flex-wrap gap-14 pl-4'>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <i className="ri-html5-fill text-4xl mb-2"></i>
                      HTML
                    </li>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <i className="ri-css3-fill text-4xl mb-2"></i>
                      CSS
                    </li>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <img src={sassIcon} alt="" className='mb-2 w-[2.25rem]' />
                      SCSS/SASS
                    </li>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <img src={bootstrapIcon} alt="" className='mb-2 w-[2.25rem]' />
                      BOOTSTRAP
                    </li>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <i className="ri-github-fill text-4xl mb-2"></i>
                      GITHUB
                    </li>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <img src={tailwindcssIcon} alt="" className='mb-2 w-[2.25rem] '/>
                      TAILWINDCSS
                    </li>
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <img src={javascriptIcon} alt="" className='mb-2 w-[2.25rem]'/>
                      JAVASCRIPT
                    </li>
                    
                    <li className='flex flex-col items-center font-medium cursor-default'>
                      <i className="ri-reactjs-line text-4xl mb-2"></i>
                      REACT JS
                      </li>
                  </ul>
                </div>
              </div>
            
              <div id="projects" className="pb-8">
                  <h5 className='text-2xl font-medium mb-2'>Projects</h5>
                  <p className="">Links to my works can be found on my <a href="./Portfolio.js" className='font-medium text-white opacity-90'> {portfolio}</a> </p>
              </div>
            </div>
        </div>
        </section>
        
    </div>
  )
}