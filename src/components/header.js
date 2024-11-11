import "../css/Header.css";
import Modal from './Modal';
import user from '../images/user.png';
import banner from '../images/CGA Banner.png';
import {useState} from "react";
import {Link} from "react-router-dom";


const Header = () => {
  // user button
  const [userMenueOpen, setUserMenueOpen] = useState(false);
  const userMenue = () => {
    setUserMenueOpen(!userMenueOpen);
  }

  // main nav
  const [toggleNavOpen, settoggleNavOpen] = useState(false);
  const toggleNav = () => {
    settoggleNavOpen(!toggleNavOpen);
    console.log("toggleNav: " + toggleNavOpen);
  }

  // sub nav
  const [toggleWhoOpen, settoggleWhoOpen] = useState(false);
  const toggleWho = (e) => {
    e.preventDefault();
    settoggleWhoOpen(!toggleWhoOpen);
    console.log("toggleNav: " + toggleWhoOpen);
  }
  const [toggleChaptersOpen, settoggleChaptersOpen] = useState(false);
  const toggleChapters = (e) => {
    e.preventDefault();
    settoggleChaptersOpen(!toggleChaptersOpen);
    console.log("toggleNav: " + toggleChaptersOpen);
  }

  // modal --> working on figuring out 
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const questionModal = () => {
    setQuestionModalOpen(!questionModalOpen);
    console.log("toggleModal: " + questionModalOpen);
  }

/*
   // toggle user menu  
  document.getElementById("user-img").onclick = (event) => {
    console.log("user menue");
    event.preventDefault();
    document.getElementById("user-menu").classList.toggle("hidden");
  };
*/
  return (
    <header>
      <div id="header-top">
        <div id="user-img">
          <img onClick={userMenue} src={user} alt="Profile icons created by Md Tanvirul Haque - Flaticon"/>
        </div>

        <div id="user-menu" className={userMenueOpen?"":"hidden"}>
          <section id="user-menu-arrow"></section>
          <section id= "user-menu-items">
            <ul>
              <li onClick={questionModal} id="question">Got Questions?</li>
            </ul>
          </section>
        </div>
      </div>

      <div id="header-bottom">
        <img src={banner} alt="Christian Golfers Association Logo"/>
      </div>

      <div onClick={toggleNav} id="toggle-nav">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav id="main-nav">
        <ul id="nav-items" className={toggleNavOpen?"":"hidden-small"}>
          <li><Link to="/">Home</Link></li>
          <li>
            <a onClick={toggleWho} id="who" href="#">Who Are We?</a>
            <ul id="who-nav" class={toggleWhoOpen?"sub-nav":"hidden"}>
              <li><Link to="/pledge">Pledge</Link></li>
              <li><Link to="/mission">Mission</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/goals">Goals</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
            </ul>
          </li>
          <li>
            <a onClick={toggleChapters} id="chapters" href="#">Chapters</a>
            <ul id="chapters-nav" class={toggleChaptersOpen?"sub-nav":"hidden"}>
              <li><Link to="/ar">AR</Link></li>
              <li><Link to="/fl">FL</Link></li>
              <li><Link to="/la">LA</Link></li>
              <li><Link to="/sc">SC</Link></li>
              <li><Link to="/tn">TN</Link></li>
              <li><Link to="/tx">TX</Link></li>
              <li><Link to="/wv">WV</Link></li>
              </ul>
          </li>
          <li><a href="https://www.paypal.com/donate?token=2yl_zKnNYeQZnzpFdqPySB7i_5AMDG8Y_68jQ6RHdYiKlHOePaS967EqwSywiUHiwtVomUS17uKuCrMD&locale.x=US" target="_blank" rel="noreferrer noopener">Donate</a></li>
          <li><Link to="contactus">Contact Us</Link></li>
        </ul>
      </nav>

      <Modal show={questionModalOpen} onClose={questionModal} />
    </header>
  );
};

export default Header;