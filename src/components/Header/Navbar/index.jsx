import './style.css';

import Caret from '../../../assets/icons/caret'

function Navbar() {

  return (
    <div className="navbar">
      <div className="navItem">
        Programs <Caret />
      </div>
      <div className="navItem">
        Live Projects <Caret />
      </div>
      <div className="navItem">
        Community
      </div>
      <div className="navItem">
        Jobs <Caret />
      </div>
      <div className="navItem">
        About
      </div>
    </div>
  );
}

export default Navbar;
