import { Link } from 'react-router-dom';
import profile from "../assets/pic-1.jpg";
import pic2 from "../assets/pic-2.jpg";
import substanceAbuseImg from "../assets/SubstanceAbusePrevention.jpeg";
import pic3 from "../assets/pic-3.jpg";
import CareerCounseling from "../assets/CareerCounseling.jpeg";
import pic4 from "../assets/pic-4.jpg";
import academicPerformance from "../assets/Academic Performance.jpeg";
import pic5 from "../assets/pic-5.jpg";
import mentalHealth from "../assets/Mental Health and Well-being.jpeg";
import pic6 from "../assets/pic-6.jpg";
import stressManagement from "../assets/stress management.jpeg";
import pic7 from "../assets/pic-7.jpg";
import timeManagement from "../assets/Time Management and Study Skills.jpeg";
import pic8 from "../assets/pic-8.jpg";
import socialLearning from "../assets/Social and Emotional Learning (SEL).jpeg";
import pic9 from "../assets/pic-9.jpg";
import culturalCompetence from "../assets/Cultural Competence and Diversity Awareness.jpeg";

import professionalAssistance from "../assets/The Role of Professional Assistance in Understanding Statistics.jpeg";





const Courses = () => {
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    
    return (
      <div>
        <header className="header">
          <section className="flex">
            <a href="about.html" className="logo">Consultative System</a>
            <form action="search.html" method="post" className="search-form">
              <input type="text" name="search_box" required placeholder="search materials.." maxLength={100} />
              <button type="submit" className="fas fa-search" />
            </form>
            <div className="icons">
              <div id="menu-btn" className="fas fa-bars" />
              <div id="search-btn" className="fas fa-search" />
              <div id="user-btn" className="fas fa-user" />
              <div id="toggle-btn" className="fas fa-sun" />
            </div>
            <div className="profile">
              <img src={profile} className="image" alt="" />
              <h3 className="name">shaikh anas</h3>
              <p className="role">studen</p>
              <a href="profile.html" className="btn">view profile</a>
              <div className="flex-btn">
                <a href="login.html" className="option-btn">login</a>
                <a href="register.html" className="option-btn">register</a>
              </div>
            </div>
          </section>
        </header>
        <div className="side-bar">
          <div id="close-btn">
            <i className="fas fa-times" />
          </div>
          <div className="profile">
            <img src={profile} className="image" alt="" />
            <h3 className="name">Olatunde Emmanuel</h3>
            <p className="role">student</p>
            <a href="profile.html" className="btn">view profile</a>
          </div>
          <nav className="navbar">
            {/*a href="home.html"><i class="fas fa-home"></i><span>home</span></a*/}
            <Link to="/about"><i className="fas fa-home" /><span>Home</span></Link>
            <Link to="/counsellors"><i className="fas fa-chalkboard-user" /><span>Counsellors</span></Link>
            <Link to="/messages"><i className="fas fa-message" /><span>Messages</span></Link>
            <Link to="/courses"><i className="fas fa-book" /><span>Materials</span></Link>
            <Link to="/contact"><i className="fas fa-headset" /><span>Contact Us</span></Link>
          </nav>
        </div>
        <section className="courses">
          <h1 className="heading">our courses</h1>
          <div className="box-container">
            <div className="box">
              <div className="tutor">
                <img src={pic2} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={substanceAbuseImg} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Substance Abuse Prevention</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic3} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={CareerCounseling} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Carear Counselling</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic4} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={academicPerformance} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Academic Performance</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic5} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={mentalHealth} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Mental Health and Well-being</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic6} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={stressManagement} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Stress Management</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic7} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={timeManagement} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Time Management and Study Skills</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic8} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={socialLearning} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Social and Emotional Learning</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic9} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={culturalCompetence} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Cultural Competence and Diversity Awareness/h3&gt;
                <a href="playlist.html" className="inline-btn">view playlist</a>
              </h3></div>
            <div className="box">
              <div className="tutor">
                <img src={pic2} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="thumb">
                <img src={professionalAssistance} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">Professional Assistance to Academic Planning</h3>
              <a href="playlist.html" className="inline-btn">view playlist</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Courses;
