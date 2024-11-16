import { Link } from 'react-router-dom';
import pic1 from '../assets/pic-1.jpg';
import aboutImg from '../assets/about-img.svg';
import pic2 from '../assets/pic-2.jpg';
import pic3 from '../assets/pic-3.jpg';
import pic4 from '../assets/pic-4.jpg';
import pic5 from '../assets/pic-5.jpg';
import pic6 from '../assets/pic-6.jpg';
import pic7 from '../assets/pic-7.jpg';


const About = () => {
      return (
        <div>

          <header className="header">
            <section className="flex">
              <a href="home.html" className="logo">Consultative System</a>
              <form action="search.html" method="post" className="search-form">
                <input type="text" name="search_box" required placeholder="search ..." maxLength={100} />
                <button type="submit" className="fas fa-search" />
              </form>
              <div className="icons">
                <div id="menu-btn" className="fas fa-bars" />
                <div id="search-btn" className="fas fa-search" />
                <div id="user-btn" className="fas fa-user" />
                <div id="toggle-btn" className="fas fa-sun" />
              </div>
              <div className="profile">
                <img src={pic1} className="image" alt="" />
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
              <img src={pic1} className="image" alt="" />
              <h3 className="name">Olatunde Emmanuel</h3>
              <p className="role">Student</p>
              <a href="profile.html" className="btn">view profile</a>
            </div>
            <nav className="navbar">
            <Link to="/about"><i className="fas fa-home" /><span>Home</span></Link>
            <Link to="/counsellors"><i className="fas fa-chalkboard-user" /><span>Counsellors</span></Link>
            <Link to="/messages"><i className="fas fa-message" /><span>Messages</span></Link>
            <Link to="/courses"><i className="fas fa-book" /><span>Materials</span></Link>
            <Link to="/contact"><i className="fas fa-headset" /><span>Contact Us</span></Link>
            </nav>
          </div>
          <section className="about">
            <div className="row">
              <div className="image">
                <img src={aboutImg} alt="" />
              </div>
              <div className="content">
                <h3>why choose us?</h3>
                <p>
                  We understand the unique challenges that students face throughout
                  their academic journey. Our dedicated team of experienced
                  consultants is here to provide personalized support and guidance
                  tailored to each student's needs. We believe in fostering a safe,
                  confidential, and supportive environment where students can explore
                  their concerns, set goals, and develop the skills necessary to
                  thrive both academically and personally.
                </p>
                <a href="counsellors.html" className="inline-btn">our Consultants</a>
              </div>
            </div>
            <div className="box-container">
              <div className="box">
                <i className="fas fa-play" />
                <div>
                  <h3>+10k</h3>
                  <p>educative videos</p>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-user-graduate" />
                <div>
                  <h3>+40k</h3>
                  <p>brilliant students</p>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-chalkboard-user" />
                <div>
                  <h3>+2k</h3>
                  <p>expert consultants</p>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-briefcase" />
                <div>
                  <h3>100%</h3>
                  <p>Positivities</p>
                </div>
              </div>
            </div>
          </section>
          <section className="reviews">
            <h1 className="heading">student's reviews</h1>
            <div className="box-container">
              <div className="box">
                <p>
                  The counselors here have been a tremendous help throughout my
                  academic journey. They provided me with the support and direction I
                  needed to make informed decisions about my future. I couldn’t have
                  done it without them!
                </p>
                <div className="student">
                  <img src={pic2} alt="" />
                  <div>
                    <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <p>
                  I was struggling with anxiety and didn’t know where to turn. The
                  counseling team made me feel heard and understood, helping me
                  develop strategies to manage my stress. I’m so grateful for the safe
                  and welcoming environment they provide.
                </p>
                <div className="student">
                  <img src={pic3} alt="" />
                  <div>
                    <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <p>
                  I was completely lost when it came to choosing a career path. The
                  career counseling sessions helped me explore my interests and
                  strengths, leading me to a major that I’m passionate about. The
                  guidance I received here was life-changing.
                </p>
                <div className="student">
                  <img src={pic4} alt="" />
                  <div>
                    <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <p>
                  Whether it’s a quick chat about school stress or a deeper discussion
                  about my goals, the consultants are always there to listen and offer
                  advice. They’ve helped me stay focused and motivated, even during
                  tough times.
                </p>
                <div className="student">
                  <img src={pic5} alt="" />
                  <div>
                    <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <p>
                  Before meeting with the academic advisors, I was struggling to keep
                  up with my studies. They helped me create a study plan that works
                  for me and offered tips to improve my time management. My grades
                  have improved significantly since!
                </p>
                <div className="student">
                  <img src={pic6} alt="" />
                  <div>
                    <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <p>
                  The counseling services at our school have been a lifeline for me.
                  The counselors are so supportive and understanding, and they truly
                  care about our well-being. I always leave my sessions feeling more
                  confident and ready to tackle my challenges.
                </p>
                <div className="student">
                  <img src={pic7} alt="" />
                  <div>
                    <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            © copyright @ 2024 by <span>Emmanuel</span> | all rights reserved!
          </footer>
          {/* custom js file link  */}
        </div>
      );
    }

    export default About;

