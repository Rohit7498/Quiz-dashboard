import './style.css';
import logo from '../../../assets/logo.png';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width="125px" height="57px" />
    </div>
  );
}

export default Logo;
