import "../css/Home.css";
import courseOne from '../images/course1.jpg';
import donate from '../images/btn_donateCC_LG.gif';
import bottomGif from '../images/bottom-img.gif';
import EventsList from "../components/EventsList";

const Home = () => {

  return (
    <div id="main-content">
                  
      <h1>Welcome</h1>
      <img className="content-img" src={courseOne} alt="golf course over water"/>
      <p>Whether you are a scratch golfer who takes the game seriously or a golfer 
          that simply enjoys the sport, the Christian Golfers' Association (CGA) 
          invites you to become a member. Regardless of your handicap or score you 
          will have fun and enjoy the fellowship of playing golf with fellow Christians. 
          CGA is strictly a "FAITH" based ministry and does not charge dues or fees to 
          become a member.  The ministry is supported by those who are lead by the Lord 
          to donate to keep the ministry going. 
      </p>

      <h2>Upcoming Events</h2>
      <EventsList/>

      <p>
          <a href="https://www.paypal.com/donate?token=2yl_zKnNYeQZnzpFdqPySB7i_5AMDG8Y_68jQ6RHdYiKlHOePaS967EqwSywiUHiwtVomUS17uKuCrMD&locale.x=US" target="_blank" rel="noreferrer noopener">
              <img id="btn_donate" src={donate} alt="donate button"/>
          </a>
      </p>
      <img id="bottom-img" src={bottomGif} alt="family link"/>

    </div>
  );
};

export default Home;