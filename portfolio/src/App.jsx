import './index.scss'

function App() {

  return (
    <body>
      <div className="nav-div">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">My Work</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>
      </div>
      <div className="intro-section">
        <img  className="hero-image" width="1366" height="559" src='/images/pexels-tranmautritam-326503.jpg' alt="graphic design photo"/>
      </div>
      <div className="aboutme-section">
        <div className="about-info"></div>
        <div className="profile-pic"></div>
      </div>
    </body>
  )
}

export default App
