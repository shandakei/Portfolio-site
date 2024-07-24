import React, {useState} from 'react';
import './App.css'
import { motion } from 'framer-motion';
// import './styles.css'
import { scroll } from "framer-motion"

function App() {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

  const toggleTheme = (mode) => {
    setTheme(mode);
    document.documentElement.setAttribute('data-theme', mode);
  }

  const dropdownVariants = {
    visible: { opacity: 1, height: 'auto', display: 'block' },
    hidden: { opacity: 0, height: 0, display: 'none' }
  }

  

  const skills = [
    { name: 'html', img: '/public/html.png' },
    { name: 'css', img: '/public/css.png' },
    { name: 'java-script', img: '/public/java-script.png' },
    { name: 'react', img: '/public/react.png' },
    { name: 'github', img: '/public/github.png' },
    { name: 'express', img: '/public/express.png' },
    { name: 'jest', img: '/public/jest.png' },
    { name: 'nodejs', img: '/public/nodejs.png' },
    { name: 'database', img: '/public/database.png' },
    { name: 'non-relational', img: '/public/non-relational.png' },
    { name: 'postgress', img: '/public/postgress.png' },
    { name: 'mongodb', img: '/public/mongodb.png' },
    { name: 'miro', img: '/public/miro.png' },
    { name: 'trello', img: '/public/trello.png' }
  ]
  
  const scrollToSection = (id, className) => {
    let element = null
    if (id) {
      element = document.getElementById(id);
    }
    if (className) {
      element = document.getElementsByClassName(className)[0];
    }
    element.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div className="container">

                                    {/* add onclick fn to AKK to "/" */}
        <div className="header">
          <p><span id='AKK' >AKK</span></p> 
          <nav>
            <button onClick={() => scrollToSection(null, 'skills')} aria-label="Scroll to intro">Skills</button>
            <button onClick={() => scrollToSection(null, 'about')} aria-label="Scroll to about">About</button>
            <button onClick={() => scrollToSection(null, 'further-reading')} aria-label="Scroll to projects">Projects</button>
          </nav>

            <button id='colour-theme-btn' onClick={toggleDropdown}>
              <img src="/public/colour-img-light.png" id='colour-theme-img' alt='change-colour-theme'/>
            </button>
        </div>

        <motion.div 
          initial="hidden" 
          animate={dropdownVisible ? "visible" : "hidden"} 
          variants={dropdownVariants}
          className="dropdown-menu"
        >
          <button className='theme-btn' onClick={() => toggleTheme('light')}>Light mode</button>
          <button className='theme-btn' onClick={() => toggleTheme('dark')}>Dark mode</button>
        </motion.div>
        
        <div className="profile">
          <section>
          <h3>Hello! My name is</h3>
          <h1>Alexander Klaus Kampfer</h1>         
          <h2>Software Engineering</h2>
          </section>
          <section>
          <div className="pfp-wrapper">
            <img src="/public/pfp1.png" className='pfp' alt='profile' />
          </div>
          </section>
          <a href="https://drive.google.com/file/d/1iij2Lx88_IVCqUuC5jSRuzylCFT3Ljw-/view?usp=sharing" target='_blank'><p>Click here for my Resume</p></a>
        </div>

        <br />
        {/* <hr /> */}

        <div className="content">
          <h3>Skills</h3>


          <div className='skills'>
            {skills.map((skill) => (
              <motion.div
          
                className={isHovered ? 'skill-text' : 'skill-img'}
                // transition={{ duration: 0.25 }} //transition in?
                key={skill.name}
                // style={{ perspective: '1000px' }}
                onMouseLeave={() => setIsHovered(false)}
                  onMouseEnter={() => setIsHovered(true)}
                >
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  // className='skill-img'
                  // initial={{ opacity: 1, rotateX: 0, display: "block" }}
                  // whileHover={{ opacity: 0, rotateX: 0, display: "hidden" }}
                  // transition={{ duration: 0.25 }}
                  />
                <motion.span
                  // {/* // className='skill-text' */}
                  dangerouslySetInnerHTML={{__html: skill.name}} 
                  // initial={{ opacity: 1, rotateX: 0, display: "block"}}
                  // whileHover={{ opacity: 1, rotateX: 0, display: "block"}}
                  // {/* // transition={{ duration: 0.25 }} */}
                > 
                  {/* { skill.name } */}
                 </motion.span> 
              </motion.div>
            ))}
          </div>


          <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit magna consequat himenaeos, mollis quam sociosqu pretium commodo cubilia elementum volutpat. Donec curae consequat himenaeos iaculis semper pretium erat hendrerit arcu sodales conubia velit egestas a, sollicitudin neque congue primis taciti odio suspendisse lobortis mauris fames nec nibh pellentesque. Lobortis tempor accumsan torquent platea mus cursus mattis, taciti fusce curabitur tincidunt pharetra egestas senectus, vivamus ultrices nec hac risus molestie. Sociosqu urna felis parturient pulvinar gravida at facilisis bibendum, nibh mi phasellus orci pellentesque et accumsan eu inceptos, vitae facilisi ullamcorper suscipit curae varius proin. Habitant platea per ad facilisis aptent, vulputate massa nullam curabitur viverra, faucibus velit aliquam mus. Sem consequat vivamus purus senectus in lacinia per sed semper facilisis non, facilisi nunc ut pharetra tempor id netus nisi laoreet.</p>
          </div>

          <div className='further-reading'>
            <h3>Petrol Location App</h3>
            <img src="/public/petrol.png" ></img>
            <section>Collaborated on a group project using GitHub to develop a single-page application (SPA) for locating and finding information about petrol stations. The app features an interactive map powered by multiple Google API services, allowing users to search and filter stations by postcode or coordinates. Sidebars enhance usability with search and filter functions. While currently deployed in Melbourne, Australia, the database supports global searches. The user interface provides comprehensive details about each station, including owner information, status, and address, ensuring a user-friendly and informative experience.</section>
            <a href="">Visit site</a>
            <br />
            <h3>Xiao'Er - Interactive Novel</h3>
            <img src="/public/novel.png" ></img>
            <section>Developed an interactive novel leveraging React, HTML, CSS, and JavaScript. This project includes multiple branching storylines where user choices influence the plot's direction and outcomes. The narrative features rich character interactions and a variety of endings, encouraging readers to explore different paths. Progress-saving functionality allows users to pick up where they left off, and unlockable content provides additional layers to the story. The interface is designed to be engaging and intuitive, ensuring a seamless and immersive reading experience.</section>
            <a href="">Visit site</a>
            <br />
            <h3>Comican - Multiple File CRUD </h3>
            <img src="/public/comican.png" ></img>
            <section>For this CRUD app, a platform was created where users can upload and share their fan art, comics, manga, doujinshi, and other creative works. Users can click on the title of an intriguing post to view a detailed page, which may include multiple files and images that can also be viewed as original source images. <br /> Once registered, users can freely add, edit, delete, and favourite posts without any limitations on the number of uploads or file size restrictions (though larger uploads may take longer to sync). Whether users are active posters or avid readers, they are encouraged to engage and share their thoughts in the post comment sections.</section>
            <a href="">Visit site</a>
          </div>

        </div>

        <div className="contact">
          <h2>Contact</h2>

          <h3>Please feel free to contact me at anytime and for any reason!</h3>
          <img src="/public/phone-call.png" alt="phone-icon" />
          <p>+61 430 709 726</p>

          <img src="/public/email.png" alt="email-icon" />
          <p>alexanderkkampfer@gmail.com</p>
  
          <img src="/public/github.png" alt="github-icon" />
          <a href="https://github.com/shandakei" target='_blank'>GitHub</a>
          <br />
          <img src="/public/linkedin-icon.png" alt="linkedin-icon" />
          <a href="https://www.linkedin.com/in/alexander-k-kampfer/" target='_blank'>LinkedIn</a>
          <br />
          <img src="/public/location-icon.png" alt="location-icon" />
          <p>Location: North Sydney, NSW</p>
          <p>Timezone: GMT+10</p>
        </div>

        <footer>
          <p>Created using REACT, Updated @2024</p>
          <a href=''>References</a> 
          <a href='https://generalassemb.ly/' target='_blank'>Study with General Assembly</a>
          <a href=''>something</a>

          <button onClick={() => scrollToSection('AKK', null)} ><img src="/public/up-arrow.png" alt="up-arrow-image-scroll-to-top" /></button>
        </footer>

        
        


      </div>
    </>
  )
}

export default App
