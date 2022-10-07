import './header.css';

function Header() {
    return (
      <header>
        <div id="title-bar">
                <img id="main-logo" src="img/icon.PNG" alt="AEML" />
                <span id="title">&nbsp;AVIVA Equity Management Limited</span>
            </div>
        <nav>
            <ul>
                <li>Nav 1</li>
                <li>Nav 2</li>
                <li>Nav 3</li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;