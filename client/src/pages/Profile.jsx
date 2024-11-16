import { Link } from 'react-router-dom';

import picture from '../assets/pic-1.jpg';

const Profile = () => {
      return (
        <div>
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
                <img src={picture} className="image" alt="" />
                <h3 className="name">Olatunde Emmanuel</h3>
                <p className="role">student</p>
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
              <img src={picture} className="image" alt="" />
              <h3 className="name">shaikh anas</h3>
              <p className="role">studen</p>
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
          <section className="user-profile">
            <h1 className="heading">your profile</h1>
            <div className="info">
              <div className="user">
                <img src={picture} alt="" />
                <h3>shaikh anas</h3>
                <p>student</p>
                <a href="update.html" className="inline-btn">update profile</a>
              </div>
              <div className="box-container">
                <div className="box">
                  <div className="flex">
                    <i className="fas fa-bookmark" />
                    <div>
                      <span>4</span>
                      <p>saved playlist</p>
                    </div>
                  </div>
                  <a href="#" className="inline-btn">view playlists</a>
                </div>
                <div className="box">
                  <div className="flex">
                    <i className="fas fa-heart" />
                    <div>
                      <span>33</span>
                      <p>videos liked</p>
                    </div>
                  </div>
                  <a href="#" className="inline-btn">view liked</a>
                </div>
                <div className="box">
                  <div className="flex">
                    <i className="fas fa-comment" />
                    <div>
                      <span>12</span>
                      <p>videos comments</p>
                    </div>
                  </div>
                  <a href="#" className="inline-btn">view comments</a>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            © copyright @ 2022 by <span>Emmanuel</span> | all rights reserved!
          </footer>
          {/* custom js file link  */}
        </div>
      );
    }
export default Profile;