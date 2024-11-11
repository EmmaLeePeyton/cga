import "../css/Who.css";
import people from '../images/people.JPG';
import donate from '../images/btn_donateCC_LG.gif';

const Sc = () => {
  return (
    <section className="two">
      <h1>Join The Team</h1>
      <img className="content-img pledge-img" src={people} alt="golf course over water"/>
      <h3>MEMBER'S PLEDGE FORM</h3>
      <p>
        YES! I want to be on the TEAM! I want to support the unique ministry of the Christian 
        Golfers' Association. I want to PERSONALLY take part in the mission and vision of the 
        organization. CGA is a FAITH based ministry with the purpose of providing golfers the 
        opportunity to foster Christian fellowship among the world's golfers and to evangelize 
        by witnessing to golfing enthusiasts everywhere. We believe golf courses and fairways 
        are “fields that are 'green'unto harvest,” It is up to us to recognize and seize the 
        opportunity. We believe that Jesus Christ was born of the Virgin Mary as the living 
        Son of God. That He was crucified on Calvary, died on the cross, was buried and arose 
        on the third day. That today He sits at the right hand of God the Father, and as the 
        Holy Spirit, dwells within us. I believe in the tenets of CGA, and want to support 
        this unique ministry. Please click on the DONATE BUTTON below to make a SECURE, 
        on-line donation. One hundred percent of all donations go directly into the ministry. 
        CGA has no paid staff.
      </p>

      <p>
        <a href="https://www.paypal.com/donate?token=2yl_zKnNYeQZnzpFdqPySB7i_5AMDG8Y_68jQ6RHdYiKlHOePaS967EqwSywiUHiwtVomUS17uKuCrMD&locale.x=US" target="_blank" rel="noreferrer noopener">
          <img id="btn_donate" src={donate} alt="donate button"/>
        </a>
      </p>
    </section>
  );
};

export default Sc;