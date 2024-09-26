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
        <h2>About Me</h2>
        <div className="about-info">
          <p>Hi, I'm Iree, and I’ve been a graphic designer for the past 10 years. But for me, it’s never just been about making things look nice—it’s about creating designs that speak to people.</p>
          <p>I use a little secret weapon called sales psychology to tap into what really catches attention and motivates action.</p> 
          <p>Whether it’s picking the right colors that make someone feel something or designing layouts that lead the eye exactly where it needs to go, I focus on connecting with people in meaningful ways.</p>
          <p>I’m passionate about helping brands not just look good but feel right f</p>
          <p> My work is all about telling your story visually, while keeping your goals in mind—whether that’s getting someone to click "buy," follow along, or trust your message.</p>
          <p>Let’s create something together that not only looks amazing but also makes people want to engage with what you have to offer.</p>
        </div>
        
        <div className="profile-pic">
          <div className="image">
            <h1>profile pic of client</h1>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
