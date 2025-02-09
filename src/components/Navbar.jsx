import { useNavigate } from 'react-router-dom'
import logo from '../assets/scorp-guard-LOGO.png'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <img  src={logo} alt="Logo" />
        </div>
        
        <ul>
          <li>
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/about')}>About</button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')}>Contact Us</button>
          </li>
          <li>
            <button onClick={() => navigate('/gallery')}>Gallery</button>
          </li>
          <li>
            <button onClick={() => navigate('/services')}>Services</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 