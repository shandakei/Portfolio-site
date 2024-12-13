import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import './App.css'

function App() {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isHovered, setIsHovered] = useState(false);
  const [sydneyTime, setSydneyTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setSydneyTime(formatter.format(new Date()));
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

  const toggleTheme = (mode) => {
    setTheme(mode);
    document.documentElement.setAttribute('data-theme', mode);
    setDropdownVisible(false)
  }

  const dropdownVariants = {
    visible: { opacity: 1, height: 'auto', display: 'block' },
    hidden: { opacity: 0, height: 0, display: 'none' }
  }

  const scrollToSection = (id, className, event) => {
    let element = null
    if (id) {
      element = document.getElementById(id);
    }
    if (className) {
      element = document.getElementsByClassName(className)[0];
    }
    element.scrollIntoView({ behavior: 'smooth' });

    if (event) {
      event.target.blur()
    }
  };

  const toggleTextVisibility = (event) => {
    const section = event.currentTarget;
    section.classList.toggle('active');
  };
  


  const skills = [
    { name: 'JavaScript', img: 'public/java-script.png' },
    { name: 'REACT', img: 'public/react.png' },
    { name: 'HTML', img: 'public/html.png' },
    { name: 'CSS', img: 'public/css.png' },
    { name: 'Express', img: 'public/express.png' },
    { name: 'API', img: 'public/api.png' },
    { name: 'Jest', img: 'public/jest.png' },
    { name: 'Mocha', img: 'public/mocha.png' },
    { name: 'Nodejs', img: 'public/nodejs.png' },
    { name: 'Database', img: 'public/database.png' },
    { name: 'Postgress', img: 'public/postgress.png' },
    { name: 'MongoDB', img: 'public/mongodb.png' },
    { name: 'GitHub', img: 'public/github.png' },
    { name: 'Miro', img: 'public/miro.png' },
    { name: 'Trello', img: 'public/trello.png' },
    { name: 'Figma', img: 'public/figma.png' },
  ]


  return (
    <>
      <div className="container">

        <div className="header">
          <p><span id='AKK' >AKK</span></p> 
          <nav>
            <button onClick={(e) => scrollToSection(null, 'content', e)} aria-label="Scroll to intro">Skills</button>
            <button onClick={(e) => scrollToSection(null, 'skills', e)} aria-label="Scroll to about">About</button>
            <button onClick={(e) => scrollToSection(null, 'further-reading', e)} aria-label="Scroll to projects">Projects</button>
            <button onClick={(e) => scrollToSection(null, 'contact-scroll', e)} aria-label="Scroll to contact">Contact</button>
          </nav>

            <button id='colour-theme-btn' onClick={toggleDropdown}>
              <img src="public/colour-img-light.png" id='colour-theme-img' alt='change-colour-theme'/>
            </button>

        <motion.div 
          initial="hidden" 
          animate={dropdownVisible ? "visible" : "hidden"} 
          variants={dropdownVariants}
          className="dropdown-menu"
        >
          <button className='theme-btn' onClick={() => toggleTheme('dark')}>Dark mode</button>
          <button className='theme-btn' onClick={() => toggleTheme('light')}>Light mode</button>
        </motion.div>
          </div>
        
        <div className="profile">
          <div className="left-profile">
            <section>
            <h3>Hello! My name is</h3>
            <h1>Alexander Klaus Kampfer</h1>         
            <h2>Software Engineering</h2>
          <a href="https://www.canva.com/design/DAGS2FL-UH4/RomQtnOCUtX05MXhm53X7w/edit?utm_content=DAGS2FL-UH4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank'><p>Click here for my Resume</p></a>
            </section>
          </div>
          <section>
          <div className="pfp-wrapper">
            <div className="pfp-border"></div>
            <img src="public/pfp1.png" className='pfp' alt='profile' />
          </div>
          </section>
        </div>

        <br />


        <div className="content">
          <h3>Skills</h3>


          <div className='skills'
              onMouseLeave={() => {
                setTimeout(() => setIsHovered(false), 300)
              }}
              onMouseEnter={() => setIsHovered(true)}
              >

              {skills.map((skill) => (
              <motion.div
          
                className={isHovered ? 'skill-text' : 'skill-img'}
                key={skill.name}
                >
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  />
                <motion.span
                  dangerouslySetInnerHTML={{__html: skill.name}} 
                > 
                 </motion.span> 
              </motion.div>
            ))}
          </div>


          <div className="about">
            <h2>About</h2>
            <p>I previously worked in teaching, management, and business. Currently, I'm a General Assembly graduate, focused on building my career as a software engineer in Sydney.</p>
            <p>I recently returned to Australia after spending my life working and studying overseas. With European and Asian backgrounds, I'm adaptable to new cultures and work environments. Having lived in London, Johannesburg, and Shanghai, and with family in several other countries,  I've internalized an international perspective.</p>
            <p>Lately, I've been focused on React and stream functions. Along with sharpening my skills in fundamentals, I'm excited about upcoming collaborative projects with other alumni where I'll be working with new languages and tools.</p>
          </div>

          <div className='further-reading'>
            
            <section onClick={toggleTextVisibility}><h3>ChiroOceaniaHub</h3><p>Built ChiroOceaniaHub, a single-page application (SPA) designed for chiropractors in Oceania to access seminar schedules, register for events, and manage memberships. The project leveraged React for a dynamic user interface, Render for deployment, and PostgreSQL for robust data storage. It features role-based authentication, RESTful API integration, and responsive design to ensure seamless user experience across devices. ChiroOceaniaHub centralises professional development resources for the chiropractic community.</p></section>
            <a href='https://chiroseminarhub-australia.onrender.com/' target='_blank'><img src="public/chiroseminars.png" ></img></a>

            <a href='https://melb-petrol-app.onrender.com/' target='_blank'><img src="public/petrol.png" ></img></a>
            <section onClick={toggleTextVisibility}><h3>Petrol Location App</h3><p>Collaborated on a group project using GitHub to develop a single-page application (SPA) for locating and finding information about petrol stations. The app features an interactive map powered by multiple Google API services, allowing users to search and filter stations by postcode or coordinates. Sidebars enhance usability with search and filter functions. While currently deployed in Melbourne, Australia, the database supports global searches. The user interface provides comprehensive details about each station, including owner information, status, and address, ensuring a user-friendly and informative experience.</p></section>

            <section onClick={toggleTextVisibility}><h3>Xiao'Er - Interactive Novel</h3><p>Developed an interactive novel leveraging React, HTML, CSS, and JavaScript. This project includes multiple branching storylines where user choices influence the plot's direction and outcomes. The narrative features character interactions and multiple endings, encouraging readers to explore different paths. Progress-saving functionality allows users to pick up where they left off, and unlockable content provides additional layers to the story. The interface is designed to be engaging and intuitive, ensuring users maintain their immersion as the plot continues.</p></section>
            <a href='https://xiaoer.onrender.com/' target='_blank'><img src="public/novel.png" ></img></a>
            
            <img src="public/comican.png" ></img>
            <section onClick={toggleTextVisibility}><h3>Comican - Multiple File CRUD </h3><p>For this CRUD app, a platform was created where users can upload and share their fan art, comics, manga, doujinshi, and other creative works. Users can click on the title of a post to view a detailed page, which may include multiple files and images that can also be viewed as original source images. <br /> Once registered, users can freely add, edit, delete, and favourite posts without any limitations on the number of uploads or file size restrictions (though larger uploads may take longer to sync). Whether users are active posters or avid readers, they are encouraged to engage and share their thoughts in the post comment sections.</p></section>
            
            <section onClick={toggleTextVisibility}><h3>Arcade X's & O's - SPA </h3><p>This two-player web application is designed for shared play on a single device. The start screen welcomes users, and with a simple click on the start button, they can dive straight into the game. At the conclusion of each round, players can press the "Play Again" button to keep track of the rounds played without needing to reload the page. Additionally, a music player toggle at the top enhances the gaming atmosphere.</p></section>
            <img src="public/startscreen.png" ></img>
   
            <img src="public/omdb.jpg" ></img>
            <section onClick={toggleTextVisibility}><h3>PSQL - OMDB</h3><p>This live page showcases a user-friendly site for searching movies by title, using data from the OMDB API. Users can find detailed information on single or multiple movies, including ratings, plot summaries, and cast lists. The interface is designed to be intuitive, providing a seamless experience for retrieving and displaying additional data like director names, release dates, and genres. Other versions of this project, utilizing different APIs such as TMDB API, are also available.</p></section>
            
            <div className='contact-scroll'></div>
          </div>
            
        </div>
        <div className="contact">
          <h2>Contact</h2>

          <h3>Please feel free to contact me at anytime and for any reason!</h3>

          <section>
          <img src="public/phone-call.png" alt="phone-icon" />
          <span>+61 430 709 726</span>
          </section>
          <section>
            <img src="public/email.png" alt="email-icon" />
            <span>alexanderkkampfer@gmail.com</span>
          </section>
          <section>
            <img src="public/github-sign.png" alt="github-icon" />
            <a href="https://github.com/shandakei" target='_blank'>GitHub</a>
          </section>
          <section>
            <img src="public/linkedin-icon.png" alt="linkedin-icon" />
            <a href="https://www.linkedin.com/in/alexander-k-kampfer/" target='_blank'>LinkedIn</a> 
          </section>
          
            {/* <img src="/public/location-icon.png" alt="location-icon" /> */}
            <p>Location: North Sydney, NSW</p>
            <p>Timezone: {sydneyTime}</p>
          
        </div>

        <footer>
          <p>© {new Date().getFullYear()} Alexander Kampfer. All rights reserved.</p>
          <p>
            Built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> & Vite.  
            Last updated: October 2024.
          </p>
          <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">
            Study with General Assembly
          </a>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to Top">
            <img src="public/up-arrow.png" alt="Scroll to Top" />
          </button>
        </footer>


      </div>
    </>
  )
}

export default App
