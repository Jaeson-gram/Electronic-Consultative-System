import { Link } from 'react-router-dom';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpg';
import pic3 from '../assets/pic-3.jpg';
import pic4 from '../assets/pic-4.jpg';
import pic5 from '../assets/pic-5.jpg';
import pic6 from '../assets/pic-6.jpg';
import pic7 from '../assets/pic-7.jpg';
import pic8 from '../assets/pic-8.jpg';


const Counsellors = () => {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

        <header className="header">
          <section className="flex">
            <a href="about.html" className="logo">Consultative System</a>
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
            <p className="role">student</p>
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
        <section className="teachers">
          <h1 className="heading">expert teachers</h1>
          <form action method="post" className="search-tutor">
            <input type="text" name="search_box" placeholder="search tutors..." required maxLength={100} />
            <button type="submit" className="fas fa-search" name="search_tutor" />
          </form>
          <div className="box-container">
            <div className="box offer">
              <h3>become a consultant</h3>
              <p>
                Passionate about guiding students toward success? Join our team as a
                consultant. Help students navigate their academic and personal
                challenges while growing your skills in a supportive environment.
              </p>
              <a href="register.html" className="inline-btn">get started</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic2} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic3} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic4} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic5} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic6} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn bb"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic7} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
            <div className="box">
              <div className="tutor">
                <img src={pic8} alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>Consultant</span>
                </div>
              </div>
              <p>total playlists : <span>4</span></p>
              <p>total videos : <span>18</span></p>
              <p>
                <a href="messages.html" className="inline-btn"><i className="fas fa-message" /><span style={{color: 'white'}}> messages</span></a>
              </p>
              <a href="teacher_profile.html" className="inline-btn">view profile</a>
            </div>
          </div>
        </section>
        {/* custom js file link  */}
      </div>
    );
  }

  export default Counsellors;
