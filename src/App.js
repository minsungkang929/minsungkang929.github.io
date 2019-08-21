import React from 'react';
import './App.css';
import  {Carousel}  from './components/Carousel.js';

class App extends React.Component {
  render() {
    return (
        <body data-spy="scroll" data-target=".navbar" data-offset="50">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
            <div className="container">
              <a className="navbar-brand" href="#">Minsung Kang</a>
              <button className="navbar-toggler collapsed" type="button"  data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbarResponsive" >
                <ul className="navbar-nav ml-auto"  >
                  <li className="nav-item">
                    <a className="nav-link active"  href="#" >Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#about" >About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          {/* <div className="tab-content"> */}

            <header className="py-5 bg-image-full tab-pane" style={{ backgroundImage: "url('https://unsplash.it/1900/1080?image=1076')" }} id="about">
              <img className="img-fluid d-block mx-auto" src="./logo/logo.png" alt="logo" style={{ backgroundColor: "white" }} />
            </header>

            {/* <!-- Content section --> */}
            <section className="py-5">
              <div className="container">
                <h1>About</h1>
                <p className="lead">Career Goal: SW Developer</p>
                <p><ul>
                    <li>Enrolled in the 5th semester of Computer Engineering Technology program at Seneca</li>
                    <li>Understand and follows the company’s processes and procedures for developing software applications</li>
                    <li>Proven strong communication and interpersonal skills allowing technical discussion with clarity</li>
                    <li>Excellent work ethics and ability to balance multiple tasks in a fast-paced environment shown by activities during whole work years</li>
                  </ul>
                </p>
              </div>
            </section>

            {/* <!-- Image Section - set the background image for the header in the line below --> */}
            <section className="py-5 bg-image-full tab-pane" style={{ backgroundImage: "url('https://unsplash.it/1900/1080?image=1081')" }}  id="skills">
              {/* <!-- Put anything you want here! There is just a spacer below for demo purposes! --> */}
              <div ></div>
            </section>

            {/* <!-- Content section --> */}
            <section className="py-5">
              <div className="container">
                <h1>Skills</h1>
                <p className="lead">TECHNICAL SKILLS</p>
                <p>
                  <ul>
                    <li>Programming Languages: C, C++, C#, Python, JavaScript, React, VHDL</li>
                    <li>Circuit Simulation Tools: MATLAB, Code warrior, Circuit maker, VEE, Quartus II</li>
                    <li>Design Tools: CATIA V5, ANSYS, AutoCAD, OrCAD</li>
                    <li>Microsoft Technologies: Microsoft Excel, Word, PowerPoint, Visio, Visual Studio</li>
                  </ul>
                </p>
              </div>
            </section>

            {/* <!-- Image Section - set the background image for the header in the line below --> */}
            <section className="py-5 bg-image-full tab-pane" style={{ backgroundImage: "url('https://unsplash.it/1900/1080?image=1078')" }} id="experience">
              {/* <!-- Put anything you want here! There is just a spacer below for demo purposes! --> */}
              <div ></div>
            </section>

            {/* <!-- Content section --> */}
            <section className="py-5">
              <div className="container">
                <h1>Experience</h1>
                <p className="lead">Information Technology Systems – Tier 1 and 2 IT Versatilist</p>
                <p>Seneca College ITS</p>
                <p>
                  <ul>
                    <li>User support and customer service, available to clients requiring technical assistance</li>
                    <li>Assist with Networking, and IT Security teams thru assigned tasks/ research/ investigations</li>
                    <li>Fundamental operations of commonly used software, hardware, and otherequipment</li>
                  </ul>
                </p>
                <div>
                  {<Carousel />}
                </div>
              </div>
            </section>

            {/* <!-- Image Section - set the background image for the header in the line below --> */}
            <section className="py-5 bg-image-full tab-pane" style={{ backgroundImage: "url('https://unsplash.it/1900/1080?image=1075')" }} id="contact">
              {/* <!-- Put anything you want here! There is just a spacer below for demo purposes! --> */}
              <div ></div>
            </section>

            {/* <!-- Content section --> */}
            <section className="py-5">
              <div className="container">
                <h1>Contact</h1>
                <p className="lead">EMAIL</p>
                <p>minsung.kang929@gmail.com</p>
                <p className="lead">PHONE</p>
                <p>+1 416-939-1962</p>
              </div>
            </section>

          {/* </div> */}

          {/* <!-- Footer --> */}
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; MinsungKang929 2019</p>
            </div>
            {/* <!-- /.container --> */}
          </footer>
          
        </body>
    )
  }
}



export default App;
