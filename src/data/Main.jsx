import React from 'react'

function Main() {
    return (
       <div>
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Shivam Upadhyay</span>
      <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/3.jpg" alt="shivam" /></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience & Project</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
      </ul>
    </div>
  </nav>
  {/* Page Content*/}
  <div className="container-fluid p-0">
    {/* About*/}
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Shivam
          <span className="text-primary">Upadhyay</span>
        </h1>
        <div className="subheading mb-5">
          228161 ,Kadipur , Sultanpur ,Lucknow , Uttar Pradesh , India
          <span className="mail">shivamup4545@gmail.com</span>
        </div>
        <p className="lead mb-5">knowledge in web development with a strong interest in MERN stack field that require both conceptual and analytical thinking.I have good command in Html , Css and Bootstrap , Fully-committed to designing and developing innovative projects with the help of programming skill. Always eager to learn more techniques and new technologies from who have good  skills in my field.</p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/shivamup/" target="_blank"><i className="fab fa-linkedin-in" /></a>
          <a className="social-icon" href="https://github.com/Shivamup99" target="_blank"><i className="fab fa-github" /></a>
          <a className="social-icon" href="https://www.instagram.com/this_is_shivam45/" target="_blank"><i class="fab fa-instagram-square"></i></a>
          <a className="social-icon" href="https://www.facebook.com/shivamup99" target="_blank"><i className="fab fa-facebook-f" /></a>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Experience*/}
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">MERN Stack Developer</h3>
            <div className="subheading mb-3">Rudra Innovative Software</div>
            <p>As a part of web development team in Rudra Innovative Software my responsibilities are to do develop the project which is provided by the team manager. I have a very good command in mongoDB , Node , React to develop the task I give my 100% to do task.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">February 2021 - Present</span></div>
        </div>
        </div>
    </section>
    {/* Projects */}
    <hr className="m-0" />
     <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">MERN Stack </h3>
            <div className="subheading mb-3">Online Learning System</div>
            <p>This is the mern stack project where I implemented api and UI also The purpose of this project is to provide the learning stuffs in computer science. here I implemented user and admin dashboard with authorization and authentication . for making ui understandable I used Bootstrap 5 and html 5 & Css3 .</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">March 2021 - April 2021</span></div>
      </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Web Development</h3>
            <div className="subheading mb-3">InShorts Clone</div>
            <p>This project is the clone of very famous news website InShorts . I used context api to make this project with the functional components of react js . This is very user friendly and very easy to use there is various category of news you can get .The purpose of this project is to provide news to user. </p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">February 2021 </span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">React Programming</h3>
            <div className="subheading mb-3">Airbnb Clone</div>
            <p>This project is based on react development . In this project I used material ui for a good user interface . here I learn alot about react js .</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">December 2020 </span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Node & MongoDB</h3>
            <div className="subheading mb-3">Blog Api</div>
            <p>This Project is totally based on back-end where node js and express framework used for making api and mongoDB used for storing the database and in this project I used ejs handlebar to make user interface. </p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">January 2021</span></div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Education*/}
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Lovely Professional University</h3>
            <div className="subheading mb-3">Bachelor of Technology - B.tech</div>
            <div>Computer Science Engineering</div>
            <p>GPA: 7.32</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2017 - June 2021</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Government Inter College</h3>
            <div className="subheading mb-3">Physics , Chemestry , Math</div>
            <p>GPA: 8.46</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">July 2013 - May 2016</span></div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Skills*/}
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-2">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-html5" /></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
          <li className="list-inline-item"><i className="fab fa-node-js" /></li>
          <li className="list-inline-item"><i className="fab fa-react" /></li>
          <li className="list-inline-item"><i className="fab fa-node" /></li>
          <li className="list-inline-item"><i className="fas fa-database" /></li>
          <li className="list-inline-item"><i className="fab fa-npm" /></li>
          <li className="list-inline-item"><i class="fab fa-bootstrap"></i> </li>
          <li className="list-inline-item"> <i class="fab fa-github"></i> </li>
          <li className="list-inline-item"> <i class="fab fa-ubuntu"></i></li>
        </ul> 
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            JavaScript for the web development 
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Back-end development with Node &amp; Express Js
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Front-end development with React Js
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Web designing with Html Css &amp; Bootstrap
          </li>
          <li>
         <span className="fa-li"><i className="fas fa-check" /></span>
            Database with Mongoose &amp; MongoDB Atlas 
          </li>
          <li>
         <span className="fa-li"><i className="fas fa-check" /></span>
            A bit knowledge of Git &amp; GitHub
          </li>
        </ul>
      </div>
    </section>
    <hr className="m-0" />
    {/* Interests*/}
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <p>Apart from being a web developer, I enjoy most of my time to developing new stuffs in mern stack. I enjoy biking, going to gym, and watching realstic movies.</p>
        <p className="mb-0">I spend a large amount of my free time exploring the latest technology advancements in the front-end  & Back-end web development world.
         I have some extra sense in technology and growth, business, learning new technologies, community involvement ,traveling .</p>
      </div>
    </section>
    <hr className="m-0" />
    {/* Awards*/}
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
            Certification in C++ Programming from NPTEL , IIT Kaharagpur - 2018
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
            Certification in Database Management System Programming from NPTEL , IIT Kaharagpur - 2018
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
            3
            <sup>rd</sup>
            Place - In Pecha Kucha event - Lovely Professional University - 2019
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
            2
            <sup>nd</sup>
            Place - Quizeeria organized in Anonymous - Lovely Professional University - 2018
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
            Awarded certificate on Web Design from Internshala - 2019
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
            Cyber Security Expert LUCIDEUS - Lovely Professional University - 2017
          </li>
        </ul>
      </div>
    </section>
  </div>
</div>
    )
}

export default Main
