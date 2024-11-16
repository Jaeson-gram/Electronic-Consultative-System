// const Contact = () => {
//     return (
//       <div>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
//         <header className="header">
//           <section className="flex">
//             <a href="about.html" className="logo">Consultative System</a>
//             <form action="search.html" method="post" className="search-form">
//               <input type="text" name="search_box" required placeholder="search ..." maxLength={100} />
//               <button type="submit" className="fas fa-search" />
//             </form>
//             <div className="icons">
//               <div id="menu-btn" className="fas fa-bars" />
//               <div id="search-btn" className="fas fa-search" />
//               <div id="user-btn" className="fas fa-user" />
//               <div id="toggle-btn" className="fas fa-sun" />
//             </div>
//             <div className="profile">
//               <img src="images/pic-1.jpg" className="image" alt="" />
//               <h3 className="name">shaikh anas</h3>
//               <p className="role">studen</p>
//               <a href="profile.html" className="btn">view profile</a>
//               <div className="flex-btn">
//                 <a href="login.html" className="option-btn">login</a>
//                 <a href="register.html" className="option-btn">register</a>
//               </div>
//             </div>
//           </section>
//         </header>
//         <div className="side-bar">
//           <div id="close-btn">
//             <i className="fas fa-times" />
//           </div>
//           <div className="profile">
//             <img src="images/pic-1.jpg" className="image" alt="" />
//             <h3 className="name">Olatunde Emmanuel</h3>
//             <p className="role">student</p>
//             <a href="profile.html" className="btn">view profile</a>
//           </div>
//           <nav className="navbar">
//             <Link to="/about"><i className="fas fa-home" /><span>Home</span></Link>
//             <Link to="/courses"><i className="fas fa-book" /><span>Materials</span></Link>
//             <Link to="/messages"><i className="fas fa-message" /><span>Messages</span></Link>
//             <Link to="/counsellors"><i className="fas fa-chalkboard-user" /><span>Counsellors</span></Link>
//             <Link to="/contact"><i className="fas fa-headset" /><span>Contact Us</span></Link>
//           </nav>
//         </div>
//         <section className="contact">
//           <div className="row">
//             <div className="image">
//               <img src="images/contact-img.svg" alt="" />
//             </div>
//             <form action method="post">
//               <h3>get in touch</h3>
//               <input type="text" placeholder="enter your name" name="name" required maxLength={50} className="box" />
//               <input type="email" placeholder="enter your email" name="email" required maxLength={50} className="box" />
//               <input type="number" placeholder="enter your number" name="number" required maxLength={50} className="box" />
//               <textarea name="msg" className="box" placeholder="enter your message" required maxLength={1000} cols={30} rows={10} defaultValue={""} />
//               <input type="submit" defaultValue="send message" className="inline-btn" name="submit" />
//             </form>
//           </div>
//           <div className="box-container">
//             <div className="box">
//               <i className="fas fa-phone" />
//               <h3>phone number</h3>
//               <a href="tel:1234567890">123-456-7890</a>
//               <a href="tel:1112223333">111-222-3333</a>
//             </div>
//             <div className="box">
//               <i className="fas fa-envelope" />
//               <h3>email address</h3>
//               <a href="mailto:emmanuel@gmail.com">emmanuel@gmail.come</a>
//               <a href="mailto:emmanuel@gmail.com">emmanuel@gmail.come</a>
//             </div>
//             <div className="box">
//               <i className="fas fa-map-marker-alt" />
//               <h3>office address</h3>
//               <a href="#">flat no. 1, a-1 building, Lagos, Nigeria</a>
//             </div>
//           </div>
//         </section>
//         {/* custom js file link  */}
//       </div>
//     );
//   }


//   export default Contact;


import { Link } from 'react-router-dom';
import profile from "../assets/pic-1.jpg";
import contactImg from "../assets/contact-img.svg"


const Contact = () => {
  return (
    <div>
      <header className="header">
        <section className="flex">
          <Link to="/about" className="logo">Consultative System</Link>
          <form method="post" className="search-form">
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
            <img src={profile} className="image" alt="Profile" />
            <h3 className="name">shaikh anas</h3>
            <p className="role">student</p>
            <Link to="/profile" className="btn">view profile</Link>
            <div className="flex-btn">
              <Link to="/login" className="option-btn">login</Link>
              <Link to="/register" className="option-btn">register</Link>
            </div>
          </div>
        </section>
      </header>

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times" />
        </div>
        <div className="profile">
          <img src={profile} className="image" alt="Profile" />
          <h3 className="name">Olatunde Emmanuel</h3>
          <p className="role">student</p>
          <Link to="/profile" className="btn">view profile</Link>
        </div>
        <nav className="navbar">
        <Link to="/about"><i className="fas fa-home" /><span>Home</span></Link>
          <Link to="/counsellors"><i className="fas fa-chalkboard-user" /><span>Counsellors</span></Link>
          <Link to="/messages"><i className="fas fa-message" /><span>Messages</span></Link>
          <Link to="/courses"><i className="fas fa-book" /><span>Materials</span></Link>
          <Link to="/contact"><i className="fas fa-headset" /><span>Contact Us</span></Link>
        </nav>
      </div>

      <section className="contact">
        <div className="row">
          <div className="image">
            <img src={contactImg} alt="Contact" />
          </div>
          <form method="post">
            <h3>get in touch</h3>
            <input type="text" placeholder="enter your name" name="name" required maxLength={50} className="box" />
            <input type="email" placeholder="enter your email" name="email" required maxLength={50} className="box" />
            <input type="number" placeholder="enter your number" name="number" required maxLength={15} className="box" />
            <textarea name="msg" className="box" placeholder="enter your message" required maxLength={1000} cols={30} rows={10} />
            <input type="submit" value="send message" className="inline-btn" name="submit" />
          </form>
        </div>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-phone" />
            <h3>phone number</h3>
            <a href="tel:1234567890">123-456-7890</a>
            <a href="tel:1112223333">111-222-3333</a>
          </div>
          <div className="box">
            <i className="fas fa-envelope" />
            <h3>email address</h3>
            <a href="mailto:emmanuel@gmail.com">emmanuel@gmail.com</a>
            <a href="mailto:emmanuel@gmail.com">emmanuel@gmail.com</a>
          </div>
          <div className="box">
            <i className="fas fa-map-marker-alt" />
            <h3>office address</h3>
            <a href="#">flat no. 1, a-1 building, Lagos, Nigeria</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
