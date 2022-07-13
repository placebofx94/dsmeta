import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          putting effort
        </p>
        <p>
          <a href="https://github.com/placebofx94">@placebofx94</a>
        </p>
      </div>
    </header>
  )
}

export default Header;
