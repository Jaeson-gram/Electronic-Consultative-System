import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/counsellors">Counsellors</Link>
    </nav>
  );
}

export default Navigation;
